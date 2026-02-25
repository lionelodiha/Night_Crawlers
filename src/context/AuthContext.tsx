import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';

export interface UserAddress {
    id: string;
    label: string;
    address: string;
    city: string;
    isDefault: boolean;
}

export interface OrderItem {
    name: string;
    quantity: number;
    price: number;
    image: string;
}

export interface Transaction {
    id: string;
    orderId: string;
    date: string;
    status: 'delivered' | 'in-transit' | 'preparing' | 'cancelled' | 'refunded';
    items: OrderItem[];
    subtotal: number;
    deliveryFee: number;
    total: number;
    vendorName: string;
    vendorImage?: string;
    paymentMethod: string;
    deliveryAddress: string;
}

export interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: string | null;
    location: string;
    joinedDate: string;
    addresses: UserAddress[];
    favoriteVendors: string[];
    notifications: {
        orderUpdates: boolean;
        promotions: boolean;
        newsletter: boolean;
    };
    password?: string; // stored for password change feature
}

interface AuthContextType {
    user: UserProfile | null;
    transactions: Transaction[];
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    signup: (data: { username: string; email: string; password: string }) => Promise<boolean>;
    logout: () => void;
    updateProfile: (updates: Partial<UserProfile>) => void;
    addTransaction: (transaction: Transaction) => void;
    // Address management
    addAddress: (address: Omit<UserAddress, 'id'>) => void;
    updateAddress: (id: string, updates: Partial<Omit<UserAddress, 'id'>>) => void;
    deleteAddress: (id: string) => void;
    setDefaultAddress: (id: string) => void;
    // Password management
    changePassword: (currentPassword: string, newPassword: string) => { success: boolean; error?: string };
    // Account management
    deleteAccount: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper to get user initials for avatar fallback
export const getInitials = (firstName: string, lastName: string): string => {
    const f = firstName?.charAt(0)?.toUpperCase() || '';
    const l = lastName?.charAt(0)?.toUpperCase() || '';
    return f + l || '?';
};

const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

// Mock transactions for demo
const MOCK_TRANSACTIONS: Transaction[] = [
    {
        id: 'txn_001',
        orderId: '#NC-22491',
        date: '2026-02-20T19:30:00Z',
        status: 'delivered',
        items: [
            { name: 'Spicy Chicken Wings', quantity: 2, price: 2250, image: 'https://images.unsplash.com/photo-1567620832903-9969f7853b44?w=100&h=100&fit=crop' },
            { name: 'Jollof Rice Special', quantity: 1, price: 1800, image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=100&h=100&fit=crop' },
        ],
        subtotal: 6300,
        deliveryFee: 500,
        total: 6800,
        vendorName: 'Chicken Republic',
        paymentMethod: 'Card ending in 4242',
        deliveryAddress: 'Block 4, Flat 2, Admiralty Way, Lekki Phase 1',
    },
    {
        id: 'txn_002',
        orderId: '#NC-22487',
        date: '2026-02-18T14:15:00Z',
        status: 'delivered',
        items: [
            { name: 'Pepperoni Pizza (Large)', quantity: 1, price: 5500, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=100&h=100&fit=crop' },
            { name: 'Garlic Bread', quantity: 1, price: 1200, image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=100&h=100&fit=crop' },
        ],
        subtotal: 6700,
        deliveryFee: 500,
        total: 7200,
        vendorName: 'Domino\'s Pizza',
        paymentMethod: 'Card ending in 4242',
        deliveryAddress: 'Block 4, Flat 2, Admiralty Way, Lekki Phase 1',
    },
    {
        id: 'txn_003',
        orderId: '#NC-22480',
        date: '2026-02-15T20:45:00Z',
        status: 'delivered',
        items: [
            { name: 'Shawarma Combo', quantity: 2, price: 3500, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=100&h=100&fit=crop' },
        ],
        subtotal: 7000,
        deliveryFee: 300,
        total: 7300,
        vendorName: 'The Shawarma Place',
        paymentMethod: 'Cash on Delivery',
        deliveryAddress: 'Block 4, Flat 2, Admiralty Way, Lekki Phase 1',
    },
    {
        id: 'txn_004',
        orderId: '#NC-22475',
        date: '2026-02-12T12:00:00Z',
        status: 'cancelled',
        items: [
            { name: 'Amala & Ewedu', quantity: 1, price: 2000, image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=100&h=100&fit=crop' },
        ],
        subtotal: 2000,
        deliveryFee: 400,
        total: 2400,
        vendorName: 'Mama Put Kitchen',
        paymentMethod: 'Card ending in 4242',
        deliveryAddress: 'Block 4, Flat 2, Admiralty Way, Lekki Phase 1',
    },
    {
        id: 'txn_005',
        orderId: '#NC-22470',
        date: '2026-02-10T18:30:00Z',
        status: 'delivered',
        items: [
            { name: 'Burger Meal Deal', quantity: 1, price: 4200, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop' },
            { name: 'Milkshake (Vanilla)', quantity: 2, price: 1500, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=100&h=100&fit=crop' },
        ],
        subtotal: 7200,
        deliveryFee: 500,
        total: 7700,
        vendorName: 'Johnny Rockets',
        paymentMethod: 'Card ending in 8901',
        deliveryAddress: '15 Adeola Odeku St, Victoria Island',
    },
];

const DEFAULT_USER: UserProfile = {
    id: 'usr_001',
    firstName: 'Chidubem',
    lastName: 'Odiha',
    email: 'user@example.com',
    phone: '',
    avatar: null,
    location: 'Lagos, Nigeria',
    joinedDate: '2026-01-15',
    addresses: [
        {
            id: 'addr_1',
            label: 'Home',
            address: 'Block 4, Flat 2, Admiralty Way, Lekki Phase 1',
            city: 'Lagos, Nigeria',
            isDefault: true,
        },
        {
            id: 'addr_2',
            label: 'Office',
            address: '15 Adeola Odeku St, Victoria Island',
            city: 'Lagos, Nigeria',
            isDefault: false,
        },
    ],
    favoriteVendors: [],
    notifications: {
        orderUpdates: true,
        promotions: false,
        newsletter: true,
    },
    password: 'password123',
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserProfile | null>(() => {
        const saved = localStorage.getItem('nc_user');
        return saved ? JSON.parse(saved) : null;
    });

    const [transactions, setTransactions] = useState<Transaction[]>(() => {
        const saved = localStorage.getItem('nc_transactions');
        return saved ? JSON.parse(saved) : [];
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user) {
            localStorage.setItem('nc_user', JSON.stringify(user));

            // Sync with registry
            const registry = JSON.parse(localStorage.getItem('nc_users_registry') || '[]');
            // Initialize registry with DEFAULT_USER if empty
            if (registry.length === 0) {
                registry.push(DEFAULT_USER);
            }
            const existingIndex = registry.findIndex((u: UserProfile) => u.id === user.id);
            if (existingIndex >= 0) {
                registry[existingIndex] = user;
            } else {
                registry.push(user);
            }
            localStorage.setItem('nc_users_registry', JSON.stringify(registry));
        } else {
            localStorage.removeItem('nc_user');
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem('nc_transactions', JSON.stringify(transactions));
    }, [transactions]);

    const login = useCallback(async (email: string, _password: string): Promise<boolean> => {
        setIsLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1200));

        let registry = JSON.parse(localStorage.getItem('nc_users_registry') || '[]');
        if (registry.length === 0) {
            registry = [DEFAULT_USER];
            localStorage.setItem('nc_users_registry', JSON.stringify(registry));
        }

        const foundUser = registry.find((u: UserProfile) => u.email === email && u.password === _password);

        if (foundUser) {
            setUser(foundUser);
            setTransactions([]);
            setIsLoading(false);
            return true;
        }

        setIsLoading(false);
        return false;
    }, []);

    const signup = useCallback(async (data: { username: string; email: string; password: string }): Promise<boolean> => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));

        let registry = JSON.parse(localStorage.getItem('nc_users_registry') || '[]');
        if (registry.length === 0) {
            registry = [DEFAULT_USER];
        }

        // Check if email already in use
        if (registry.some((u: UserProfile) => u.email === data.email)) {
            setIsLoading(false);
            return false;
        }

        const nameParts = data.username.split(' ');
        const newUser: UserProfile = {
            ...DEFAULT_USER,
            id: 'usr_' + Date.now(),
            firstName: nameParts[0] || data.username,
            lastName: nameParts.slice(1).join(' ') || '',
            email: data.email,
            phone: '',
            avatar: null,
            joinedDate: new Date().toISOString().split('T')[0],
            addresses: [],
            favoriteVendors: [],
            password: data.password,
        };
        setUser(newUser);
        setTransactions([]);
        setIsLoading(false);
        return true;
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        setTransactions([]);
        localStorage.removeItem('nc_user');
        localStorage.removeItem('nc_transactions');
    }, []);

    const updateProfile = useCallback((updates: Partial<UserProfile>) => {
        setUser(prev => prev ? { ...prev, ...updates } : null);
    }, []);

    const addTransaction = useCallback((transaction: Transaction) => {
        setTransactions(prev => [transaction, ...prev]);
    }, []);

    // ---- ADDRESS MANAGEMENT ----

    const addAddress = useCallback((address: Omit<UserAddress, 'id'>) => {
        setUser(prev => {
            if (!prev) return null;
            const newAddr: UserAddress = {
                ...address,
                id: 'addr_' + generateId(),
            };
            // If this is the first address or marked as default, unset others
            let updatedAddresses = [...prev.addresses];
            if (address.isDefault || updatedAddresses.length === 0) {
                updatedAddresses = updatedAddresses.map(a => ({ ...a, isDefault: false }));
                newAddr.isDefault = true;
            }

            const allAddresses = [...updatedAddresses, newAddr];
            const defaultAddress = allAddresses.find(a => a.isDefault);
            const newLocation = defaultAddress ? defaultAddress.city : prev.location;

            return { ...prev, addresses: allAddresses, location: newLocation };
        });
    }, []);

    const updateAddress = useCallback((id: string, updates: Partial<Omit<UserAddress, 'id'>>) => {
        setUser(prev => {
            if (!prev) return null;
            let updatedAddresses = prev.addresses.map(addr =>
                addr.id === id ? { ...addr, ...updates } : addr
            );
            // If setting this one as default, unset all others
            if (updates.isDefault) {
                updatedAddresses = updatedAddresses.map(addr =>
                    addr.id === id ? { ...addr, isDefault: true } : { ...addr, isDefault: false }
                );
            }

            const defaultAddress = updatedAddresses.find(a => a.isDefault);
            const newLocation = defaultAddress ? defaultAddress.city : prev.location;

            return { ...prev, addresses: updatedAddresses, location: newLocation };
        });
    }, []);

    const deleteAddress = useCallback((id: string) => {
        setUser(prev => {
            if (!prev) return null;
            const filtered = prev.addresses.filter(a => a.id !== id);
            // If deleted was default and others exist, set first as default
            const hadDefault = prev.addresses.find(a => a.id === id)?.isDefault;
            if (hadDefault && filtered.length > 0) {
                filtered[0].isDefault = true;
            }

            const defaultAddress = filtered.find(a => a.isDefault);
            const newLocation = defaultAddress ? defaultAddress.city : (filtered.length > 0 ? filtered[0].city : 'Lagos, Nigeria');

            return { ...prev, addresses: filtered, location: newLocation };
        });
    }, []);

    const setDefaultAddress = useCallback((id: string) => {
        setUser(prev => {
            if (!prev) return null;
            const updatedAddresses = prev.addresses.map(addr => ({
                ...addr,
                isDefault: addr.id === id,
            }));

            const defaultAddress = updatedAddresses.find(a => a.isDefault);
            const newLocation = defaultAddress ? defaultAddress.city : prev.location;

            return { ...prev, addresses: updatedAddresses, location: newLocation };
        });
    }, []);

    // ---- PASSWORD MANAGEMENT ----

    const changePassword = useCallback((currentPassword: string, newPassword: string): { success: boolean; error?: string } => {
        if (!user) return { success: false, error: 'Not authenticated' };

        if (user.password && currentPassword !== user.password) {
            return { success: false, error: 'Current password is incorrect' };
        }

        if (newPassword.length < 6) {
            return { success: false, error: 'New password must be at least 6 characters' };
        }

        setUser(prev => prev ? { ...prev, password: newPassword } : null);
        return { success: true };
    }, [user]);

    // ---- ACCOUNT MANAGEMENT ----

    const deleteAccount = useCallback(() => {
        setUser(prev => {
            if (prev) {
                const registry = JSON.parse(localStorage.getItem('nc_users_registry') || '[]');
                const updatedRegistry = registry.filter((u: UserProfile) => u.id !== prev.id);
                localStorage.setItem('nc_users_registry', JSON.stringify(updatedRegistry));
            }
            return null;
        });
        setTransactions([]);
        localStorage.removeItem('nc_user');
        localStorage.removeItem('nc_transactions');
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                transactions,
                isAuthenticated: !!user,
                isLoading,
                login,
                signup,
                logout,
                updateProfile,
                addTransaction,
                addAddress,
                updateAddress,
                deleteAddress,
                setDefaultAddress,
                changePassword,
                deleteAccount,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

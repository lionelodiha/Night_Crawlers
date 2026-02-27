/**
 * Night Crawlers — Domain Models & Types
 *
 * These types define the data contract between the frontend and backend.
 * The backend engineer should implement API endpoints that return data
 * matching these types.
 */

// ─── Business Types ──────────────────────────────────────────────────────────

export type BusinessType = 'Food' | 'Groceries' | 'Pharmacy' | 'Drinks' | 'Clubs/Lounges';

export const BUSINESS_TYPES: BusinessType[] = [
    'Food',
    'Groceries',
    'Pharmacy',
    'Drinks',
    'Clubs/Lounges',
];

export type BusinessTypeMeta = {
    type: BusinessType;
    singular: string;
    plural: string;
    categoryLabel: string;
    itemSingular: string;
    itemPlural: string;
};

// ─── Vendor ──────────────────────────────────────────────────────────────────

export type VendorAccount = {
    id: string;
    firstName: string;
    lastName: string;
    businessType: BusinessType;
    businessTypeRaw: string;
    phoneNumber: string;
    email: string;
    location: string;
    password: string;
    createdAt: string;
    verified: boolean;
};

export type VendorStore = {
    id: string;
    vendorId: string;
    name: string;
    businessType: BusinessType;
    categories: string[];
    address: string;
    description: string;
    imageUrl: string;
    openingTime: string;
    closingTime?: string;
    createdAt: string;
};

export type CreateVendorInput = {
    firstName: string;
    lastName: string;
    businessType: string;
    phoneNumber: string;
    email: string;
    location: string;
    password: string;
};

export type CreateStoreInput = {
    name: string;
    categories?: string[];
    address: string;
    description: string;
    imageUrl: string;
    openingTime?: string;
    closingTime?: string;
};

export type UpdateStoreInput = {
    name?: string;
    categories?: string[];
    address?: string;
    description?: string;
    imageUrl?: string;
    openingTime?: string;
    closingTime?: string;
};

// ─── Menu Items ──────────────────────────────────────────────────────────────

export type MenuItem = {
    id: string;
    storeId: string;
    name: string;
    categories: string[];
    price: number;
    description: string;
    imageUrl: string;
    createdAt: string;
};

export type CreateMenuItemInput = {
    storeId: string;
    name: string;
    categories: string[];
    price: number;
    description: string;
    imageUrl: string;
};

// ─── Rider ───────────────────────────────────────────────────────────────────

export type RiderAccount = {
    id: string;
    firstName: string;
    lastName: string;
    vehicleType: string;
    phoneNumber: string;
    email: string;
    location: string;
    password: string;
    createdAt: string;
    isOnline?: boolean;
    lastSeen?: string;
    verified: boolean;
};

export type CreateRiderInput = {
    firstName: string;
    lastName: string;
    vehicleType: string;
    phoneNumber: string;
    email: string;
    location: string;
    password: string;
};

// ─── Orders ──────────────────────────────────────────────────────────────────

export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'accepted' | 'picked_up' | 'in_transit' | 'delivered' | 'cancelled';

export type Order = {
    id: string;
    storeId: string;
    storeName: string;
    customerId: string;
    customerName: string;
    customerPhone: string;
    customerLocation: string;
    customerAddress: string;
    riderId: string | null;
    items: { name: string; quantity: number; price: number }[];
    totalAmount: number;
    deliveryFee: number;
    status: OrderStatus;
    createdAt: string;
    acceptedAt?: string;
    pickedUpAt?: string;
    deliveredAt?: string;
};

export type CreateOrderInput = {
    storeId: string;
    storeName: string;
    customerName: string;
    customerPhone: string;
    customerLocation: string;
    customerAddress: string;
    items: { name: string; quantity: number; price: number }[];
    deliveryFee: number;
};

// ─── Admin ───────────────────────────────────────────────────────────────────

export type AdminAccount = {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: string;
};

export type CreateAdminInput = {
    username: string;
    email: string;
    password: string;
};

// ─── User Profile ────────────────────────────────────────────────────────────

export type UserProfile = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    location: string;
    avatarUrl?: string;
    createdAt: string;
};

// ─── Platform / Admin Stats ──────────────────────────────────────────────────

export type PlatformStats = {
    totalVendors: number;
    totalStores: number;
    totalRiders: number;
    totalMenuItems: number;
    totalOrders: number;
    totalRevenue: number;
};

export type ActivityItem = {
    id: string;
    type: 'vendor' | 'rider' | 'admin' | 'store';
    message: string;
    timeAgo: string;
    timestamp: number;
};

export type PendingItem = {
    id: string;
    title: string;
    type: 'vendor' | 'rider';
};

// ─── Earnings ────────────────────────────────────────────────────────────────

export type EarningsPeriod = {
    today: number;
    thisMonth: number;
    thisYear: number;
    todayOrders: number;
    monthOrders: number;
    yearOrders: number;
};

export type StoreEarnings = {
    storeId: string;
    storeName: string;
    vendorId: string;
    vendorName: string;
    todayEarnings: number;
    todayOrders: number;
    monthEarnings: number;
    monthOrders: number;
    yearEarnings: number;
    yearOrders: number;
};

export type EntityEarnings = {
    id: string;
    name: string;
    type: 'vendor' | 'rider';
    earnings: EarningsPeriod;
};

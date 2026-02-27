/**
 * Night Crawlers — API Service Layer
 *
 * This file contains all the function signatures that the backend needs to implement.
 * Each function currently returns a stub (empty data / null) so that the frontend
 * compiles and renders without errors. The backend engineer should replace each
 * stub with a real API call (e.g. fetch / axios).
 *
 * TODO: Replace every function body below with actual API calls.
 */

import type {
    BusinessType,
    BusinessTypeMeta,
    VendorAccount,
    VendorStore,
    CreateVendorInput,
    CreateStoreInput,
    UpdateStoreInput,
    MenuItem,
    CreateMenuItemInput,
    RiderAccount,
    CreateRiderInput,
    Order,
    OrderStatus,
    CreateOrderInput,
    AdminAccount,
    PlatformStats,
    ActivityItem,
    PendingItem,
    EarningsPeriod,
    StoreEarnings,
    EntityEarnings,
} from '../types/models';

// Re-export types so existing imports keep working
export type {
    BusinessType,
    BusinessTypeMeta,
    VendorAccount,
    VendorStore,
    CreateVendorInput,
    CreateStoreInput,
    UpdateStoreInput,
    MenuItem,
    CreateMenuItemInput,
    RiderAccount,
    CreateRiderInput,
    Order,
    OrderStatus,
    CreateOrderInput,
    AdminAccount,
    PlatformStats,
    ActivityItem,
    PendingItem,
    EarningsPeriod,
    StoreEarnings,
    EntityEarnings,
};

// Re-export the constants
export { BUSINESS_TYPES } from '../types/models';

// ─── Business Type Helpers ───────────────────────────────────────────────────

const BUSINESS_TYPE_META: Record<BusinessType, BusinessTypeMeta> = {
    Food: {
        type: 'Food',
        singular: 'Restaurant',
        plural: 'Restaurants',
        categoryLabel: 'Food Categories',
        itemSingular: 'Menu Item',
        itemPlural: 'Menu Items',
    },
    Groceries: {
        type: 'Groceries',
        singular: 'Grocery Store',
        plural: 'Grocery Stores',
        categoryLabel: 'Store Categories',
        itemSingular: 'Product',
        itemPlural: 'Products',
    },
    Pharmacy: {
        type: 'Pharmacy',
        singular: 'Pharmacy',
        plural: 'Pharmacies',
        categoryLabel: 'Product Categories',
        itemSingular: 'Product',
        itemPlural: 'Products',
    },
    Drinks: {
        type: 'Drinks',
        singular: 'Drink Store',
        plural: 'Drink Stores',
        categoryLabel: 'Drink Categories',
        itemSingular: 'Drink',
        itemPlural: 'Drinks',
    },
    'Clubs/Lounges': {
        type: 'Clubs/Lounges',
        singular: 'Lounge',
        plural: 'Lounges',
        categoryLabel: 'Service Categories',
        itemSingular: 'Menu Item',
        itemPlural: 'Menu Items',
    },
};

/** Get display metadata for a business type (pure frontend helper, no API needed). */
export const getBusinessTypeMeta = (type: BusinessType): BusinessTypeMeta =>
    BUSINESS_TYPE_META[type] ?? BUSINESS_TYPE_META.Food;

/** Resolve a user-provided string into a BusinessType (pure frontend helper). */
export const resolveBusinessType = (input: string): BusinessType => {
    const normalized = input.toLowerCase().trim();
    if (!normalized) return 'Food';
    const keywords: Array<{ type: BusinessType; keywords: string[] }> = [
        { type: 'Food', keywords: ['food', 'restaurant', 'resto', 'cafe', 'kitchen', 'diner', 'meal'] },
        { type: 'Groceries', keywords: ['grocery', 'supermarket', 'market', 'mart', 'grocer'] },
        { type: 'Pharmacy', keywords: ['pharmacy', 'chemist', 'drug', 'medicine', 'med'] },
        { type: 'Drinks', keywords: ['drink', 'drinks', 'beverage', 'liquor', 'wine'] },
        { type: 'Clubs/Lounges', keywords: ['club', 'lounge', 'nightlife', 'bar'] },
    ];
    for (const entry of keywords) {
        if (entry.keywords.some((kw) => normalized.includes(kw))) return entry.type;
    }
    return 'Food';
};

// ─── Vendor Actions ──────────────────────────────────────────────────────────

/** TODO: POST /api/vendors — Create a new vendor account */
export const createVendorAccount = (_input: CreateVendorInput): VendorAccount => {
    console.warn('[API STUB] createVendorAccount — replace with real API call');
    throw new Error('Backend not connected yet. Please implement the API.');
};

/** TODO: POST /api/vendors/login — Sign in a vendor */
export const signInVendor = (_email: string, _password: string): VendorAccount | null => {
    console.warn('[API STUB] signInVendor — replace with real API call');
    return null;
};

/** TODO: GET /api/vendors/me — Get the currently authenticated vendor */
export const getCurrentVendor = (): VendorAccount | null => {
    console.warn('[API STUB] getCurrentVendor — replace with real API call');
    return null;
};

/** TODO: POST /api/vendors/logout — Clear the current vendor session */
export const clearCurrentVendor = (): void => {
    console.warn('[API STUB] clearCurrentVendor — replace with real API call');
};

// ─── Store Actions ───────────────────────────────────────────────────────────

/** TODO: POST /api/stores — Create a new store for the current vendor */
export const createStore = (_input: CreateStoreInput): VendorStore => {
    console.warn('[API STUB] createStore — replace with real API call');
    throw new Error('Backend not connected yet. Please implement the API.');
};

/** TODO: PATCH /api/stores/:id — Update store details */
export const updateStore = (_storeId: string, _updates: UpdateStoreInput): VendorStore => {
    console.warn('[API STUB] updateStore — replace with real API call');
    throw new Error('Backend not connected yet. Please implement the API.');
};

/** TODO: GET /api/vendors/:vendorId/stores — Get all stores for a vendor */
export const getStoresForVendor = (_vendorId: string): VendorStore[] => {
    console.warn('[API STUB] getStoresForVendor — replace with real API call');
    return [];
};

/** TODO: GET /api/stores/:id — Get a single store by ID */
export const getStoreById = (_storeId: string): VendorStore | null => {
    console.warn('[API STUB] getStoreById — replace with real API call');
    return null;
};

/** TODO: GET /api/stores?address=...&category=... — Get stores for the explore page */
export const getStoresForExplore = (
    _address: string | null | undefined,
    _category?: BusinessType | 'All',
): VendorStore[] => {
    console.warn('[API STUB] getStoresForExplore — replace with real API call');
    return [];
};

// ─── Menu Item Actions ───────────────────────────────────────────────────────

/** TODO: POST /api/menu-items — Create a new menu item */
export const createMenuItem = (_input: CreateMenuItemInput): MenuItem => {
    console.warn('[API STUB] createMenuItem — replace with real API call');
    throw new Error('Backend not connected yet. Please implement the API.');
};

/** TODO: PATCH /api/menu-items/:id — Update a menu item */
export const updateMenuItem = (_itemId: string, _updates: Partial<MenuItem>): MenuItem | null => {
    console.warn('[API STUB] updateMenuItem — replace with real API call');
    return null;
};

/** TODO: GET /api/stores/:storeId/menu-items — Get all menu items for a store */
export const getMenuItemsForStore = (_storeId: string): MenuItem[] => {
    console.warn('[API STUB] getMenuItemsForStore — replace with real API call');
    return [];
};

/** TODO: DELETE /api/menu-items/:id — Delete a menu item */
export const deleteMenuItem = (_menuItemId: string): void => {
    console.warn('[API STUB] deleteMenuItem — replace with real API call');
};

// ─── Rider Actions ───────────────────────────────────────────────────────────

/** TODO: POST /api/riders — Create a new rider account */
export const createRiderAccount = (_input: CreateRiderInput): RiderAccount => {
    console.warn('[API STUB] createRiderAccount — replace with real API call');
    throw new Error('Backend not connected yet. Please implement the API.');
};

/** TODO: POST /api/riders/login — Sign in a rider */
export const signInRider = (_email: string, _password: string): RiderAccount | null => {
    console.warn('[API STUB] signInRider — replace with real API call');
    return null;
};

/** TODO: GET /api/riders/me — Get the currently authenticated rider */
export const getCurrentRider = (): RiderAccount | null => {
    console.warn('[API STUB] getCurrentRider — replace with real API call');
    return null;
};

/** TODO: POST /api/riders/logout — Log out the current rider */
export const logoutRider = (): void => {
    console.warn('[API STUB] logoutRider — replace with real API call');
};

/** TODO: PATCH /api/riders/:id/status — Set rider online/offline status */
export const setRiderOnlineStatus = (_riderId: string, _isOnline: boolean): void => {
    console.warn('[API STUB] setRiderOnlineStatus — replace with real API call');
};

/** TODO: GET /api/riders/online — Get all online riders */
export const getOnlineRiders = (): RiderAccount[] => {
    console.warn('[API STUB] getOnlineRiders — replace with real API call');
    return [];
};

/** TODO: GET /api/riders/:id — Get a rider by ID */
export const getRiderById = (_riderId: string): RiderAccount | null => {
    console.warn('[API STUB] getRiderById — replace with real API call');
    return null;
};

// ─── Admin Actions ───────────────────────────────────────────────────────────

/** TODO: POST /api/admins — Create a new admin account */
export const createAdminAccount = (_input: { username: string; email: string; password: string }): AdminAccount => {
    console.warn('[API STUB] createAdminAccount — replace with real API call');
    throw new Error('Backend not connected yet. Please implement the API.');
};

/** TODO: POST /api/admins/login — Sign in an admin */
export const signInAdmin = (_email: string, _password: string): AdminAccount | null => {
    console.warn('[API STUB] signInAdmin — replace with real API call');
    return null;
};

/** TODO: GET /api/admins/me — Get the currently authenticated admin */
export const getCurrentAdmin = (): AdminAccount | null => {
    console.warn('[API STUB] getCurrentAdmin — replace with real API call');
    return null;
};

// ─── Admin Stats & Activity ──────────────────────────────────────────────────

/** TODO: GET /api/admin/stats — Get platform-wide statistics */
export const getPlatformStats = (): PlatformStats => {
    console.warn('[API STUB] getPlatformStats — replace with real API call');
    return {
        totalVendors: 0,
        totalStores: 0,
        totalRiders: 0,
        totalMenuItems: 0,
        totalOrders: 0,
        totalRevenue: 0,
    };
};

/** TODO: GET /api/admin/activity — Get recent system activity */
export const getSystemActivity = (): ActivityItem[] => {
    console.warn('[API STUB] getSystemActivity — replace with real API call');
    return [];
};

/** TODO: GET /api/admin/pending — Get pending verification items */
export const getPendingActions = (): PendingItem[] => {
    console.warn('[API STUB] getPendingActions — replace with real API call');
    return [];
};

/** TODO: POST /api/admin/verify — Approve or reject a vendor/rider */
export const verifyUser = (_id: string, _type: 'vendor' | 'rider', _action: 'approve' | 'reject'): void => {
    console.warn('[API STUB] verifyUser — replace with real API call');
};

// ─── Admin Lists ─────────────────────────────────────────────────────────────

/** TODO: GET /api/admin/vendors — Get all vendors */
export const getAllVendors = (): VendorAccount[] => {
    console.warn('[API STUB] getAllVendors — replace with real API call');
    return [];
};

/** TODO: GET /api/admin/riders — Get all riders */
export const getAllRiders = (): RiderAccount[] => {
    console.warn('[API STUB] getAllRiders — replace with real API call');
    return [];
};

/** TODO: GET /api/admin/stores — Get all stores */
export const getAllStores = (): VendorStore[] => {
    console.warn('[API STUB] getAllStores — replace with real API call');
    return [];
};

/** TODO: GET /api/admin/orders — Get all orders */
export const getAllOrders = (): Order[] => {
    console.warn('[API STUB] getAllOrders — replace with real API call');
    return [];
};

// ─── Order Management ────────────────────────────────────────────────────────

/** TODO: POST /api/orders — Create a new order */
export const createOrder = (_input: CreateOrderInput): Order => {
    console.warn('[API STUB] createOrder — replace with real API call');
    throw new Error('Backend not connected yet. Please implement the API.');
};

/** TODO: GET /api/orders/pending?location=... — Get pending orders near a rider */
export const getPendingOrdersForRider = (_riderLocation: string): Order[] => {
    console.warn('[API STUB] getPendingOrdersForRider — replace with real API call');
    return [];
};

/** TODO: GET /api/riders/:id/orders — Get all orders assigned to a rider */
export const getOrdersForRider = (_riderId: string): Order[] => {
    console.warn('[API STUB] getOrdersForRider — replace with real API call');
    return [];
};

/** TODO: POST /api/orders/:id/accept — Accept an order as a rider */
export const acceptOrder = (_orderId: string, _riderId: string): Order | null => {
    console.warn('[API STUB] acceptOrder — replace with real API call');
    return null;
};

/** TODO: PATCH /api/orders/:id/status — Update an order's status */
export const updateOrderStatus = (_orderId: string, _status: OrderStatus): Order | null => {
    console.warn('[API STUB] updateOrderStatus — replace with real API call');
    return null;
};

/** TODO: GET /api/orders/:id — Get an order by ID */
export const getOrderById = (_orderId: string): Order | null => {
    console.warn('[API STUB] getOrderById — replace with real API call');
    return null;
};

/** TODO: GET /api/stores/:id/location — Get store address for navigation */
export const getStoreLocation = (_storeId: string): string | null => {
    console.warn('[API STUB] getStoreLocation — replace with real API call');
    return null;
};

/** TODO: GET /api/admin/orders/stats — Get order statistics */
export const getOrderStats = () => {
    console.warn('[API STUB] getOrderStats — replace with real API call');
    return {
        totalOrders: 0,
        todayOrders: 0,
        pendingOrders: 0,
        activeOrders: 0,
        completedOrders: 0,
        totalRevenue: 0,
        todayRevenue: 0,
        onlineRiders: 0,
        totalRiders: 0,
    };
};

// ─── Vendor Orders ───────────────────────────────────────────────────────────

/** TODO: GET /api/vendors/:id/orders — Get all orders for a vendor's stores */
export const getOrdersForVendor = (_vendorId: string): Order[] => {
    console.warn('[API STUB] getOrdersForVendor — replace with real API call');
    return [];
};

// ─── Earnings ────────────────────────────────────────────────────────────────

/** TODO: GET /api/vendors/:id/earnings — Get earnings for a vendor */
export const getVendorEarnings = (_vendorId: string): EarningsPeriod => {
    console.warn('[API STUB] getVendorEarnings — replace with real API call');
    return { today: 0, thisMonth: 0, thisYear: 0, todayOrders: 0, monthOrders: 0, yearOrders: 0 };
};

/** TODO: GET /api/stores/:id/earnings — Get earnings for a specific store */
export const getStoreEarnings = (_storeId: string): StoreEarnings => {
    console.warn('[API STUB] getStoreEarnings — replace with real API call');
    return {
        storeId: _storeId,
        storeName: '',
        vendorId: '',
        vendorName: '',
        todayEarnings: 0,
        todayOrders: 0,
        monthEarnings: 0,
        monthOrders: 0,
        yearEarnings: 0,
        yearOrders: 0,
    };
};

/** TODO: GET /api/vendors/:id/stores/earnings — Get earnings for all vendor stores */
export const getVendorStoreEarnings = (_vendorId: string): StoreEarnings[] => {
    console.warn('[API STUB] getVendorStoreEarnings — replace with real API call');
    return [];
};

/** TODO: GET /api/admin/stores/earnings — Get all store earnings (admin) */
export const getAllStoreEarningsForAdmin = (): StoreEarnings[] => {
    console.warn('[API STUB] getAllStoreEarningsForAdmin — replace with real API call');
    return [];
};

/** TODO: GET /api/riders/:id/earnings — Get earnings for a rider */
export const getRiderEarnings = (_riderId: string): EarningsPeriod => {
    console.warn('[API STUB] getRiderEarnings — replace with real API call');
    return { today: 0, thisMonth: 0, thisYear: 0, todayOrders: 0, monthOrders: 0, yearOrders: 0 };
};

/** TODO: GET /api/admin/earnings — Get all entity earnings (admin) */
export const getAllEarningsForAdmin = (): EntityEarnings[] => {
    console.warn('[API STUB] getAllEarningsForAdmin — replace with real API call');
    return [];
};

// ─── Misc ────────────────────────────────────────────────────────────────────

/** TODO: POST /api/reload — Reload state (needed for cross-tab sync) */
export const reloadFromStorage = (): void => {
    console.warn('[API STUB] reloadFromStorage — no-op in real backend (use WebSockets or polling)');
};

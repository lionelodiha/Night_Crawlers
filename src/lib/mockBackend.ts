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

const BUSINESS_TYPE_KEYWORDS: Array<{ type: BusinessType; keywords: string[] }> = [
  { type: 'Food', keywords: ['food', 'restaurant', 'resto', 'cafe', 'kitchen', 'diner', 'meal'] },
  { type: 'Groceries', keywords: ['grocery', 'supermarket', 'market', 'mart', 'grocer'] },
  { type: 'Pharmacy', keywords: ['pharmacy', 'chemist', 'drug', 'medicine', 'med'] },
  { type: 'Drinks', keywords: ['drink', 'drinks', 'beverage', 'liquor', 'wine'] },
  { type: 'Clubs/Lounges', keywords: ['club', 'lounge', 'nightlife', 'bar'] },
];

export const getBusinessTypeMeta = (type: BusinessType): BusinessTypeMeta => BUSINESS_TYPE_META[type];

const normalizeText = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const normalizeEmail = (value: string) => value.trim().toLowerCase();

export const resolveBusinessType = (input: string): BusinessType => {
  const normalized = normalizeText(input);
  if (!normalized) return 'Food';
  for (const entry of BUSINESS_TYPE_KEYWORDS) {
    if (entry.keywords.some((keyword) => normalized.includes(keyword))) {
      return entry.type;
    }
  }
  return 'Food';
};

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

export type OrderStatus = 'pending' | 'accepted' | 'picked_up' | 'in_transit' | 'delivered' | 'cancelled';

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

export type CreateRiderInput = {
  firstName: string;
  lastName: string;
  vehicleType: string;
  phoneNumber: string;
  email: string;
  location: string;
  password: string;
};

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

const STORAGE_KEY = 'night-crawlers-mock-backend';

type StoredState = {
  vendors: VendorAccount[];
  stores: VendorStore[];
  menuItems: MenuItem[];
  riders: RiderAccount[];
  admins: AdminAccount[];
  orders: Order[];
  currentVendorId: string | null;
  currentRiderId: string | null;
  currentAdminId: string | null;
  processedIds: string[];
};

const normalizeVendor = (vendor: VendorAccount): VendorAccount => ({
  ...vendor,
  password: vendor.password ?? '',
  verified: vendor.verified ?? false, // Existing vendors default to unverified
});

const normalizeRider = (rider: RiderAccount): RiderAccount => ({
  ...rider,
  verified: rider.verified ?? false, // Existing riders default to unverified
});

const loadState = (): StoredState => {
  if (typeof window === 'undefined') {
    return {
      vendors: [], stores: [], menuItems: [],
      riders: [], admins: [], orders: [],
      currentVendorId: null, currentRiderId: null, currentAdminId: null,
      processedIds: []
    };
  }
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return {
      vendors: [], stores: [], menuItems: [],
      riders: [], admins: [], orders: [],
      currentVendorId: null, currentRiderId: null, currentAdminId: null,
      processedIds: []
    };
  }
  try {
    const parsed = JSON.parse(raw) as StoredState;
    return {
      vendors: Array.isArray(parsed.vendors) ? parsed.vendors.map(normalizeVendor) : [],
      stores: Array.isArray(parsed.stores) ? parsed.stores : [],
      menuItems: Array.isArray(parsed.menuItems) ? parsed.menuItems : [],
      riders: Array.isArray(parsed.riders) ? parsed.riders.map(normalizeRider) : [],
      admins: Array.isArray(parsed.admins) ? parsed.admins : [],
      orders: Array.isArray(parsed.orders) ? parsed.orders : [],
      currentVendorId: parsed.currentVendorId ?? null,
      currentRiderId: parsed.currentRiderId ?? null,
      currentAdminId: parsed.currentAdminId ?? null,
      processedIds: Array.isArray(parsed.processedIds) ? parsed.processedIds : [],
    };
  } catch {
    return {
      vendors: [], stores: [], menuItems: [],
      riders: [], admins: [], orders: [],
      currentVendorId: null, currentRiderId: null, currentAdminId: null,
      processedIds: []
    };
  }
};

const {
  vendors, stores, menuItems, riders, admins, orders,
  currentVendorId: initialVendorId,
  currentRiderId: initialRiderId,
  currentAdminId: initialAdminId,
  processedIds: initialProcessedIds
} = loadState();

let currentVendorId: string | null = initialVendorId;
let currentRiderId: string | null = initialRiderId;
let currentAdminId: string | null = initialAdminId;

// Mock status storage
let processedIds: string[] = initialProcessedIds;

const saveState = () => {
  if (typeof window === 'undefined') return;
  const payload: StoredState = {
    vendors, stores, menuItems, riders, admins, orders,
    currentVendorId, currentRiderId, currentAdminId,
    processedIds
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
};

// Reload state from localStorage (useful when another tab/admin updates data)
export const reloadFromStorage = () => {
  const freshState = loadState();
  // Update in-memory arrays with fresh data
  vendors.length = 0;
  vendors.push(...freshState.vendors);
  stores.length = 0;
  stores.push(...freshState.stores);
  menuItems.length = 0;
  menuItems.push(...freshState.menuItems);
  riders.length = 0;
  riders.push(...freshState.riders);
  admins.length = 0;
  admins.push(...freshState.admins);
  orders.length = 0;
  orders.push(...freshState.orders);
  processedIds.length = 0;
  processedIds.push(...freshState.processedIds);
};

const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 1000)}`;

// Ensure default admin account exists with correct credentials
const defaultAdminEmail = 'admin@nightcrawlers.ng';
const existingDefaultAdmin = admins.find(a => a.email === defaultAdminEmail || a.id === 'admin-default');
if (existingDefaultAdmin) {
  // Update existing default admin with new credentials
  existingDefaultAdmin.username = 'SuperAdmin';
  existingDefaultAdmin.email = defaultAdminEmail;
  existingDefaultAdmin.password = 'Nc@dm1n$2026!';
  saveState();
} else if (admins.length === 0) {
  // Create new admin if none exist
  admins.push({
    id: 'admin-default',
    username: 'SuperAdmin',
    email: defaultAdminEmail,
    password: 'Nc@dm1n$2026!',
    createdAt: new Date().toISOString(),
  });
  saveState();
}

const matchesAddress = (address: string | undefined, query: string) => {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return false;
  const normalizedAddress = normalizeText(address || '');
  if (!normalizedAddress) return false;
  return normalizedAddress.includes(normalizedQuery) || normalizedQuery.includes(normalizedAddress);
};

const getTokens = (value: string) =>
  normalizeText(value)
    .split(' ')
    .filter(Boolean);

const matchesAddressLoose = (address: string | undefined, query: string) => {
  const queryTokens = getTokens(query);
  if (!queryTokens.length) return false;
  const addressTokens = getTokens(address || '');
  if (!addressTokens.length) return false;
  return queryTokens.some((token) => addressTokens.includes(token));
};

// --- VENDOR ACTIONS ---

export const createVendorAccount = (input: CreateVendorInput): VendorAccount => {
  const email = normalizeEmail(input.email);
  const password = input.password.trim();
  const existing = vendors.find((vendor) => vendor.email === email);
  if (existing) {
    const businessType = resolveBusinessType(input.businessType);
    existing.firstName = input.firstName.trim();
    existing.lastName = input.lastName.trim();
    existing.businessType = businessType;
    existing.businessTypeRaw = input.businessType.trim();
    existing.phoneNumber = input.phoneNumber.trim();
    existing.location = input.location.trim();
    existing.password = password || existing.password;
    // Keep existing verified status
    if (existing.verified === undefined) existing.verified = false;
    currentVendorId = existing.id;
    saveState();
    return existing;
  }

  const businessType = resolveBusinessType(input.businessType);
  const vendor: VendorAccount = {
    id: generateId(),
    firstName: input.firstName.trim(),
    lastName: input.lastName.trim(),
    businessType,
    businessTypeRaw: input.businessType.trim(),
    phoneNumber: input.phoneNumber.trim(),
    email,
    location: input.location.trim(),
    password,
    createdAt: new Date().toISOString(),
    verified: false, // New vendors require admin verification
  };

  vendors.push(vendor);
  currentVendorId = vendor.id;
  saveState();
  return vendor;
};

export const signInVendor = (email: string, password: string): VendorAccount | null => {
  const normalizedEmail = normalizeEmail(email);
  if (!normalizedEmail) return null;
  const vendor = vendors.find((item) => item.email === normalizedEmail) || null;
  if (!vendor) return null;
  if (!vendor.password && password.trim()) {
    vendor.password = password.trim();
  }
  if (vendor.password !== password.trim()) return null;
  currentVendorId = vendor.id;
  saveState();
  return vendor;
};

export const getCurrentVendor = (): VendorAccount | null => {
  if (!currentVendorId) return null;
  return vendors.find((vendor) => vendor.id === currentVendorId) || null;
};

export const clearCurrentVendor = () => {
  currentVendorId = null;
  saveState();
};

export const createStore = (input: CreateStoreInput): VendorStore => {
  const vendor = getCurrentVendor();
  if (!vendor) {
    throw new Error('No active vendor session.');
  }

  const categories =
    input.categories
      ?.map((cat) => cat.trim())
      .filter(Boolean) ?? [];

  const store: VendorStore = {
    id: generateId(),
    vendorId: vendor.id,
    name: input.name.trim(),
    businessType: vendor.businessType,
    categories,
    address: input.address.trim(),
    description: input.description.trim(),
    imageUrl: input.imageUrl.trim(),
    openingTime: input.openingTime?.trim() || '8:00 am - 8:00 pm',
    closingTime: input.closingTime?.trim() || '',
    createdAt: new Date().toISOString(),
  };

  stores.push(store);
  saveState();
  return store;
};

export const updateStore = (storeId: string, updates: UpdateStoreInput): VendorStore => {
  const vendor = getCurrentVendor();
  const store = stores.find((item) => item.id === storeId);
  if (!store) {
    throw new Error('Store not found.');
  }
  if (vendor && store.vendorId !== vendor.id) {
    throw new Error('Not authorized to edit this store.');
  }

  const next: VendorStore = {
    ...store,
    ...updates,
    categories: updates.categories ?? store.categories,
  };

  Object.assign(store, next);
  saveState();
  return store;
};

export const getStoresForVendor = (vendorId: string): VendorStore[] =>
  stores.filter((store) => store.vendorId === vendorId);

export const getStoreById = (storeId: string): VendorStore | null =>
  stores.find((store) => store.id === storeId) || null;

export const getStoresForExplore = (
  address: string | null | undefined,
  category?: BusinessType | 'All',
): VendorStore[] => {
  const normalizedAddress = address ? address.trim() : '';
  const requestedType = category && category !== 'All' ? category : undefined;

  return stores.filter((store) => {
    if (requestedType && store.businessType !== requestedType) return false;
    if (!normalizedAddress) return true;

    const vendor = vendors.find((item) => item.id === store.vendorId);
    const matchesStore =
      matchesAddress(store.address, normalizedAddress) ||
      matchesAddressLoose(store.address, normalizedAddress);
    const matchesVendor = vendor
      ? matchesAddress(vendor.location, normalizedAddress) ||
      matchesAddressLoose(vendor.location, normalizedAddress)
      : false;

    return matchesStore || matchesVendor;
  });
};

export const createMenuItem = (input: CreateMenuItemInput): MenuItem => {
  const store = stores.find((s) => s.id === input.storeId);
  if (!store) {
    throw new Error('Store not found.');
  }

  const menuItem: MenuItem = {
    id: generateId(),
    storeId: input.storeId,
    name: input.name.trim(),
    categories: input.categories.map((c) => c.trim()).filter(Boolean),
    price: input.price,
    description: input.description.trim(),
    imageUrl: input.imageUrl.trim(),
    createdAt: new Date().toISOString(),
  };

  menuItems.push(menuItem);
  saveState();
  return menuItem;
};

export const getMenuItemsForStore = (storeId: string): MenuItem[] =>
  menuItems.filter((item) => item.storeId === storeId);

export const deleteMenuItem = (menuItemId: string): void => {
  const index = menuItems.findIndex((item) => item.id === menuItemId);
  if (index !== -1) {
    menuItems.splice(index, 1);
    saveState();
  }
};

// --- RIDER ACTIONS ---

export const createRiderAccount = (input: CreateRiderInput): RiderAccount => {
  const email = normalizeEmail(input.email);
  const password = input.password.trim();

  const existing = riders.find((r) => r.email === email);
  if (existing) {
    existing.firstName = input.firstName.trim();
    existing.lastName = input.lastName.trim();
    existing.vehicleType = input.vehicleType.trim();
    existing.phoneNumber = input.phoneNumber.trim();
    existing.location = input.location.trim();
    existing.password = password || existing.password;
    // Keep existing verified status
    if (existing.verified === undefined) existing.verified = false;
    currentRiderId = existing.id;
    saveState();
    return existing;
  }

  const rider: RiderAccount = {
    id: generateId(),
    firstName: input.firstName.trim(),
    lastName: input.lastName.trim(),
    vehicleType: input.vehicleType.trim(),
    phoneNumber: input.phoneNumber.trim(),
    email,
    location: input.location.trim(),
    password,
    createdAt: new Date().toISOString(),
    verified: false, // New riders require admin verification
  };

  riders.push(rider);
  currentRiderId = rider.id;
  saveState();
  return rider;
};

export const signInRider = (email: string, password: string): RiderAccount | null => {
  const normalizedEmail = normalizeEmail(email);
  const rider = riders.find((r) => r.email === normalizedEmail);
  if (!rider) return null;
  if (rider.password !== password.trim()) return null;

  currentRiderId = rider.id;
  saveState();
  return rider;
};

export const getCurrentRider = (): RiderAccount | null => {
  if (!currentRiderId) return null;
  return riders.find((r) => r.id === currentRiderId) || null;
};

export const logoutRider = (): void => {
  // Set rider offline before logging out
  if (currentRiderId) {
    const rider = riders.find(r => r.id === currentRiderId);
    if (rider) {
      rider.isOnline = false;
      rider.lastSeen = new Date().toISOString();
    }
  }
  currentRiderId = null;
  saveState();
};

// --- ADMIN ACTIONS ---

export const createAdminAccount = (input: CreateAdminInput): AdminAccount => {
  const email = normalizeEmail(input.email);
  const password = input.password.trim();

  const existing = admins.find((a) => a.email === email);
  if (existing) {
    existing.username = input.username.trim();
    existing.password = password || existing.password;
    currentAdminId = existing.id;
    saveState();
    return existing;
  }

  const admin: AdminAccount = {
    id: generateId(),
    username: input.username.trim(),
    email,
    password,
    createdAt: new Date().toISOString(),
  };

  admins.push(admin);
  currentAdminId = admin.id;
  saveState();
  return admin;
};

export const signInAdmin = (email: string, password: string): AdminAccount | null => {
  const normalizedEmail = normalizeEmail(email);
  const admin = admins.find((a) => a.email === normalizedEmail);
  if (!admin) return null;
  if (admin.password !== password.trim()) return null;

  currentAdminId = admin.id;
  saveState();
  return admin;
};

export const getCurrentAdmin = (): AdminAccount | null => {
  if (!currentAdminId) return null;
  return admins.find((a) => a.id === currentAdminId) || null;
};

// --- ADMIN STATS ---

export type PlatformStats = {
  totalVendors: number;
  totalStores: number;
  totalRiders: number;
  totalMenuItems: number;
  // These would come from orders in a real system
  totalOrders: number;
  totalRevenue: number;
};

export const getPlatformStats = (): PlatformStats => {
  // In a real app, orders and revenue would come from an orders table
  // For now we'll calculate a mock revenue based on menu items
  const mockOrderCount = menuItems.length * 12; // Simulated orders
  const mockRevenue = menuItems.reduce((sum, item) => sum + item.price, 0) * 45;

  return {
    totalVendors: vendors.length,
    totalStores: stores.length,
    totalRiders: riders.length,
    totalMenuItems: menuItems.length,
    totalOrders: mockOrderCount,
    totalRevenue: mockRevenue,
  };
};

// --- HELPER FOR DATES ---
const timeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes ago";
  return Math.floor(seconds) + " seconds ago";
};

export type ActivityItem = {
  id: string;
  type: 'vendor' | 'rider' | 'admin' | 'store';
  message: string;
  timeAgo: string;
  timestamp: number;
};

export const getSystemActivity = (): ActivityItem[] => {
  const activity: ActivityItem[] = [];

  vendors.forEach(v => {
    activity.push({
      id: v.id,
      type: 'vendor',
      message: `New Vendor: ${v.firstName} ${v.lastName} (${v.businessType})`,
      timeAgo: timeAgo(v.createdAt),
      timestamp: new Date(v.createdAt).getTime()
    });
  });

  riders.forEach(r => {
    activity.push({
      id: r.id,
      type: 'rider',
      message: `New Rider: ${r.firstName} ${r.lastName}`,
      timeAgo: timeAgo(r.createdAt),
      timestamp: new Date(r.createdAt).getTime()
    });
  });

  // Sort by newest first and take top 5
  return activity.sort((a, b) => b.timestamp - a.timestamp).slice(0, 5);
};


// --- UPDATED TYPES WITH STATUS ---
// (We are extending the existing types via intersection for backward compatibility in this file context,
// but ideally we'd update the main type definition. For now, we'll checking existing objects dynamically)

export const verifyUser = (id: string, type: 'vendor' | 'rider', action: 'approve' | 'reject') => {
  if (type === 'vendor') {
    const vendor = vendors.find(v => v.id === id);
    if (vendor) {
      vendor.verified = action === 'approve';
      updateMockStatus(id, action);
    }
  } else {
    const rider = riders.find(r => r.id === id);
    if (rider) {
      rider.verified = action === 'approve';
      updateMockStatus(id, action);
    }
  }
  saveState();
};

// Mock status storage
// processedIds is now managed in the main state block above

const updateMockStatus = (id: string, action: 'approve' | 'reject') => {
  if (!processedIds.includes(id)) {
    processedIds.push(id);
  }
};

export type PendingItem = {
  id: string;
  title: string;
  type: 'vendor' | 'rider';
};

export const getPendingActions = (): PendingItem[] => {
  const pending: PendingItem[] = [];

  // Show unverified vendors and riders
  const pendingVendors = vendors.filter(v => v.verified === false).reverse().slice(0, 5);
  const pendingRiders = riders.filter(r => r.verified === false).reverse().slice(0, 5);

  pendingVendors.forEach(v => {
    pending.push({ id: v.id, title: `Vendor: ${v.firstName} ${v.lastName}`, type: 'vendor' });
  });

  pendingRiders.forEach(r => {
    pending.push({ id: r.id, title: `Rider: ${r.firstName} ${r.lastName}`, type: 'rider' });
  });

  return pending;
};

export const getAllVendors = (): VendorAccount[] => [...vendors];
export const getAllRiders = (): RiderAccount[] => [...riders];
export const getAllStores = (): VendorStore[] => [...stores];
export const getAllOrders = (): Order[] => [...orders];

// --- RIDER ONLINE STATUS ---

export const setRiderOnlineStatus = (riderId: string, isOnline: boolean): void => {
  const rider = riders.find(r => r.id === riderId);
  if (rider) {
    rider.isOnline = isOnline;
    rider.lastSeen = new Date().toISOString();
    saveState();
  }
};

export const getOnlineRiders = (): RiderAccount[] => {
  return riders.filter(r => r.isOnline === true);
};

export const getRiderById = (riderId: string): RiderAccount | null => {
  return riders.find(r => r.id === riderId) || null;
};

// --- ORDER MANAGEMENT ---

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

export const createOrder = (input: CreateOrderInput): Order => {
  const totalAmount = input.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const order: Order = {
    id: generateId(),
    storeId: input.storeId,
    storeName: input.storeName,
    customerId: generateId(), // In real app, this would be the logged-in user's ID
    customerName: input.customerName,
    customerPhone: input.customerPhone,
    customerLocation: input.customerLocation,
    customerAddress: input.customerAddress,
    riderId: null,
    items: input.items,
    totalAmount,
    deliveryFee: input.deliveryFee,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  orders.push(order);
  saveState();
  return order;
};

export const getPendingOrdersForRider = (riderLocation: string): Order[] => {
  // In a real app, we'd use geolocation to find nearby orders
  // For now, we'll return all pending orders (not assigned to any rider)
  return orders
    .filter(o => o.status === 'pending' && !o.riderId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const getOrdersForRider = (riderId: string): Order[] => {
  return orders
    .filter(o => o.riderId === riderId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const acceptOrder = (orderId: string, riderId: string): Order | null => {
  const order = orders.find(o => o.id === orderId);
  if (!order) return null;

  if (order.status !== 'pending') return null; // Already taken

  order.riderId = riderId;
  order.status = 'accepted';
  order.acceptedAt = new Date().toISOString();
  saveState();
  return order;
};

export const updateOrderStatus = (orderId: string, status: OrderStatus): Order | null => {
  const order = orders.find(o => o.id === orderId);
  if (!order) return null;

  order.status = status;

  if (status === 'picked_up') {
    order.pickedUpAt = new Date().toISOString();
  } else if (status === 'delivered') {
    order.deliveredAt = new Date().toISOString();
  }

  saveState();
  return order;
};

export const getOrderById = (orderId: string): Order | null => {
  return orders.find(o => o.id === orderId) || null;
};

// Helper to get store location for navigation
export const getStoreLocation = (storeId: string): string | null => {
  const store = stores.find(s => s.id === storeId);
  return store?.address || null;
};

// Get order statistics for admin
export const getOrderStats = () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const todayOrders = orders.filter(o => new Date(o.createdAt) >= today);
  const pendingOrders = orders.filter(o => o.status === 'pending');
  const activeOrders = orders.filter(o => ['accepted', 'picked_up', 'in_transit'].includes(o.status));
  const completedOrders = orders.filter(o => o.status === 'delivered');

  const totalRevenue = completedOrders.reduce((sum, o) => sum + o.totalAmount + o.deliveryFee, 0);
  const todayRevenue = todayOrders
    .filter(o => o.status === 'delivered')
    .reduce((sum, o) => sum + o.totalAmount + o.deliveryFee, 0);

  return {
    totalOrders: orders.length,
    todayOrders: todayOrders.length,
    pendingOrders: pendingOrders.length,
    activeOrders: activeOrders.length,
    completedOrders: completedOrders.length,
    totalRevenue,
    todayRevenue,
    onlineRiders: riders.filter(r => r.isOnline).length,
    totalRiders: riders.length,
  };
};


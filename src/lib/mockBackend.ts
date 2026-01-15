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

const STORAGE_KEY = 'night-crawlers-mock-backend';

type StoredState = {
  vendors: VendorAccount[];
  stores: VendorStore[];
  menuItems: MenuItem[];
  currentVendorId: string | null;
};

const normalizeVendor = (vendor: VendorAccount): VendorAccount => ({
  ...vendor,
  password: vendor.password ?? '',
});

const loadState = (): StoredState => {
  if (typeof window === 'undefined') {
    return { vendors: [], stores: [], menuItems: [], currentVendorId: null };
  }
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return { vendors: [], stores: [], menuItems: [], currentVendorId: null };
  }
  try {
    const parsed = JSON.parse(raw) as StoredState;
    return {
      vendors: Array.isArray(parsed.vendors) ? parsed.vendors.map(normalizeVendor) : [],
      stores: Array.isArray(parsed.stores) ? parsed.stores : [],
      menuItems: Array.isArray(parsed.menuItems) ? parsed.menuItems : [],
      currentVendorId: parsed.currentVendorId ?? null,
    };
  } catch {
    return { vendors: [], stores: [], menuItems: [], currentVendorId: null };
  }
};

const saveState = () => {
  if (typeof window === 'undefined') return;
  const payload: StoredState = { vendors, stores, menuItems, currentVendorId };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
};

const { vendors, stores, menuItems, currentVendorId: initialVendorId } = loadState();
let currentVendorId: string | null = initialVendorId;

const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 1000)}`;

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

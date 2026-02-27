# 🔌 Backend API Integration Guide

> **For the backend engineer:** This document describes every API endpoint the frontend expects. The frontend is fully built and ready — you just need to implement these endpoints and update the stub functions in `frontend/src/services/api.ts`.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [How to Connect](#how-to-connect)
3. [Data Models](#data-models)
4. [API Endpoints](#api-endpoints)
   - [Vendor Endpoints](#vendor-endpoints)
   - [Store Endpoints](#store-endpoints)
   - [Menu Item Endpoints](#menu-item-endpoints)
   - [Rider Endpoints](#rider-endpoints)
   - [Order Endpoints](#order-endpoints)
   - [Admin Endpoints](#admin-endpoints)
   - [Earnings Endpoints](#earnings-endpoints)
5. [Authentication Flow](#authentication-flow)
6. [Business Logic Notes](#business-logic-notes)

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│  Frontend (React + TypeScript)                      │
│                                                     │
│  pages/ ──► services/api.ts ──► YOUR BACKEND API    │
│                 │                                   │
│           types/models.ts                           │
│          (data contract)                            │
└─────────────────────────────────────────────────────┘
```

### Key Files

| File | Purpose |
|------|---------|
| `frontend/src/types/models.ts` | **All TypeScript types** — this is the data contract. Every object your API returns should match these shapes. |
| `frontend/src/services/api.ts` | **API function stubs** — each function has a `TODO` comment with the suggested endpoint. Replace the stub body with a real `fetch`/`axios` call. |

---

## How to Connect

### Step 1: Implement the REST API

Build your backend API with the endpoints listed below. Use any language/framework (Node.js, Python, Go, C#, etc.).

### Step 2: Update `services/api.ts`

Each function in `services/api.ts` currently looks like this:

```typescript
/** TODO: POST /api/vendors — Create a new vendor account */
export const createVendorAccount = (_input: CreateVendorInput): VendorAccount => {
  console.warn('[API STUB] createVendorAccount — replace with real API call');
  throw new Error('Backend not connected yet.');
};
```

Replace with a real API call:

```typescript
export const createVendorAccount = async (input: CreateVendorInput): Promise<VendorAccount> => {
  const response = await fetch('/api/vendors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  if (!response.ok) throw new Error('Failed to create vendor account');
  return response.json();
};
```

> **Note:** When you make functions `async`, the pages that call them may need minor updates to `await` the result. Most already use `async/await` patterns.

### Step 3: Configure the API base URL

Add your backend URL to `frontend/vite.config.ts` as a proxy, or set an environment variable:

```typescript
// vite.config.ts — add a proxy for development
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Your backend URL
    },
  },
});
```

---

## Data Models

All types are defined in `frontend/src/types/models.ts`. Here's a summary:

### BusinessType
```typescript
type BusinessType = 'Food' | 'Groceries' | 'Pharmacy' | 'Drinks' | 'Clubs/Lounges';
```

### VendorAccount
```typescript
{
  id: string;
  firstName: string;
  lastName: string;
  businessType: BusinessType;    // Resolved category
  businessTypeRaw: string;       // Original input from vendor
  phoneNumber: string;
  email: string;
  location: string;
  password: string;
  createdAt: string;             // ISO 8601 date
  verified: boolean;             // Admin must approve before vendor can access dashboard
}
```

### VendorStore
```typescript
{
  id: string;
  vendorId: string;              // FK → VendorAccount.id
  name: string;
  businessType: BusinessType;
  categories: string[];          // E.g. ["Nigerian", "Chinese", "Desserts"]
  address: string;
  description: string;
  imageUrl: string;
  openingTime: string;           // E.g. "8:00 am - 8:00 pm"
  closingTime?: string;
  createdAt: string;
}
```

### MenuItem
```typescript
{
  id: string;
  storeId: string;               // FK → VendorStore.id
  name: string;
  categories: string[];          // E.g. ["Main Course", "Nigerian"]
  price: number;                 // In Naira (₦)
  description: string;
  imageUrl: string;
  createdAt: string;
}
```

### RiderAccount
```typescript
{
  id: string;
  firstName: string;
  lastName: string;
  vehicleType: string;           // E.g. "Motorcycle", "Bicycle", "Car"
  phoneNumber: string;
  email: string;
  location: string;
  password: string;
  createdAt: string;
  isOnline?: boolean;            // Rider's current availability
  lastSeen?: string;
  verified: boolean;             // Admin must approve
}
```

### Order
```typescript
{
  id: string;
  storeId: string;               // FK → VendorStore.id
  storeName: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  customerLocation: string;
  customerAddress: string;
  riderId: string | null;        // FK → RiderAccount.id (null until accepted)
  items: { name: string; quantity: number; price: number }[];
  totalAmount: number;           // Sum of (price × quantity) for all items
  deliveryFee: number;
  status: OrderStatus;
  createdAt: string;
  acceptedAt?: string;           // When rider accepted
  pickedUpAt?: string;           // When rider picked up from store
  deliveredAt?: string;          // When rider delivered to customer
}
```

### OrderStatus (lifecycle)
```
pending → preparing → ready → accepted → picked_up → in_transit → delivered
                                                                 ↘ cancelled
```

### AdminAccount
```typescript
{
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
}
```

### EarningsPeriod
```typescript
{
  today: number;          // Earnings amount for today
  thisMonth: number;
  thisYear: number;
  todayOrders: number;    // Order count for today
  monthOrders: number;
  yearOrders: number;
}
```

### StoreEarnings
```typescript
{
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
}
```

---

## API Endpoints

### Vendor Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| `POST` | `/api/vendors` | Create vendor account | `CreateVendorInput` | `VendorAccount` |
| `POST` | `/api/vendors/login` | Vendor sign-in | `{ email, password }` | `VendorAccount \| null` |
| `GET` | `/api/vendors/me` | Get current vendor (from session/token) | — | `VendorAccount \| null` |
| `POST` | `/api/vendors/logout` | Clear vendor session | — | `void` |
| `GET` | `/api/admin/vendors` | Get all vendors (admin) | — | `VendorAccount[]` |

#### CreateVendorInput
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "businessType": "Food",
  "phoneNumber": "+2348012345678",
  "email": "john@example.com",
  "location": "Lagos, Nigeria",
  "password": "securePassword123"
}
```

---

### Store Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| `POST` | `/api/stores` | Create store (for current vendor) | `CreateStoreInput` | `VendorStore` |
| `PATCH` | `/api/stores/:id` | Update store details | `UpdateStoreInput` | `VendorStore` |
| `GET` | `/api/stores/:id` | Get store by ID | — | `VendorStore \| null` |
| `GET` | `/api/vendors/:vendorId/stores` | Get all stores for a vendor | — | `VendorStore[]` |
| `GET` | `/api/stores?address=...&category=...` | Search stores for explore page | Query params | `VendorStore[]` |
| `GET` | `/api/stores/:id/location` | Get store address (for rider navigation) | — | `string \| null` |
| `GET` | `/api/admin/stores` | Get all stores (admin) | — | `VendorStore[]` |

---

### Menu Item Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| `POST` | `/api/menu-items` | Create menu item | `CreateMenuItemInput` | `MenuItem` |
| `PATCH` | `/api/menu-items/:id` | Update menu item | `Partial<MenuItem>` | `MenuItem \| null` |
| `DELETE` | `/api/menu-items/:id` | Delete menu item | — | `void` |
| `GET` | `/api/stores/:storeId/menu-items` | Get all items for a store | — | `MenuItem[]` |

---

### Rider Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| `POST` | `/api/riders` | Create rider account | `CreateRiderInput` | `RiderAccount` |
| `POST` | `/api/riders/login` | Rider sign-in | `{ email, password }` | `RiderAccount \| null` |
| `GET` | `/api/riders/me` | Get current rider | — | `RiderAccount \| null` |
| `POST` | `/api/riders/logout` | Log out rider (set offline) | — | `void` |
| `PATCH` | `/api/riders/:id/status` | Set online/offline | `{ isOnline: boolean }` | `void` |
| `GET` | `/api/riders/:id` | Get rider by ID | — | `RiderAccount \| null` |
| `GET` | `/api/riders/online` | Get all online riders | — | `RiderAccount[]` |
| `GET` | `/api/admin/riders` | Get all riders (admin) | — | `RiderAccount[]` |

> **Note:** When a rider logs out, their `isOnline` should be set to `false` and `lastSeen` updated to the current timestamp.

---

### Order Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| `POST` | `/api/orders` | Place a new order | `CreateOrderInput` | `Order` |
| `GET` | `/api/orders/:id` | Get order by ID | — | `Order \| null` |
| `GET` | `/api/orders/pending?location=...` | Get ready orders for rider | Query params | `Order[]` |
| `GET` | `/api/riders/:id/orders` | Get all orders for a rider | — | `Order[]` |
| `GET` | `/api/vendors/:id/orders` | Get all orders for a vendor's stores | — | `Order[]` |
| `POST` | `/api/orders/:id/accept` | Rider accepts an order | `{ riderId }` | `Order \| null` |
| `PATCH` | `/api/orders/:id/status` | Update order status | `{ status: OrderStatus }` | `Order \| null` |
| `GET` | `/api/admin/orders` | Get all orders (admin) | — | `Order[]` |
| `GET` | `/api/admin/orders/stats` | Get order statistics | — | See below |

#### Order Stats Response
```json
{
  "totalOrders": 150,
  "todayOrders": 12,
  "pendingOrders": 3,
  "activeOrders": 5,
  "completedOrders": 130,
  "totalRevenue": 2500000,
  "todayRevenue": 185000,
  "onlineRiders": 8,
  "totalRiders": 25
}
```

#### Order Status Flow
The vendor and rider update the order status through its lifecycle:

```
Customer places order    →  status: "pending"
Vendor starts preparing  →  status: "preparing"
Vendor marks as ready    →  status: "ready"
Rider accepts order      →  status: "accepted"     (riderId gets set)
Rider picks up           →  status: "picked_up"    (pickedUpAt timestamp)
Rider in transit         →  status: "in_transit"
Rider delivers           →  status: "delivered"     (deliveredAt timestamp)
                         or  status: "cancelled"    (at any point before delivery)
```

---

### Admin Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| `POST` | `/api/admins/login` | Admin sign-in | `{ email, password }` | `AdminAccount \| null` |
| `GET` | `/api/admins/me` | Get current admin | — | `AdminAccount \| null` |
| `GET` | `/api/admin/stats` | Platform statistics | — | `PlatformStats` |
| `GET` | `/api/admin/activity` | Recent system activity | — | `ActivityItem[]` |
| `GET` | `/api/admin/pending` | Pending verifications | — | `PendingItem[]` |
| `POST` | `/api/admin/verify` | Approve/reject vendor or rider | `{ id, type, action }` | `void` |

#### PlatformStats Response
```json
{
  "totalVendors": 45,
  "totalStores": 62,
  "totalRiders": 25,
  "totalMenuItems": 340,
  "totalOrders": 1500,
  "totalRevenue": 25000000
}
```

#### Verify Request
```json
{
  "id": "vendor-123",
  "type": "vendor",        // "vendor" | "rider"
  "action": "approve"      // "approve" | "reject"
}
```

---

### Earnings Endpoints

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| `GET` | `/api/vendors/:id/earnings` | Vendor earnings (today/month/year) | `EarningsPeriod` |
| `GET` | `/api/vendors/:id/stores/earnings` | Per-store earnings for a vendor | `StoreEarnings[]` |
| `GET` | `/api/stores/:id/earnings` | Earnings for a specific store | `StoreEarnings` |
| `GET` | `/api/riders/:id/earnings` | Rider earnings (delivery fees) | `EarningsPeriod` |
| `GET` | `/api/admin/stores/earnings` | All store earnings (admin) | `StoreEarnings[]` |
| `GET` | `/api/admin/earnings` | All entity earnings (admin) | `EntityEarnings[]` |

**Vendor Earnings** = sum of `totalAmount` from delivered orders for that vendor's stores.
**Rider Earnings** = sum of `deliveryFee` from delivered orders assigned to that rider.

---

## Authentication Flow

The frontend expects session-based or token-based authentication. Here's how each role logs in:

### Vendors & Riders (shared sign-in page)

The **same sign-in page** (`/vendor-signin`) handles both vendors and riders:
1. User enters email + password
2. Frontend tries `signInVendor(email, password)` first
3. If that returns `null`, it tries `signInRider(email, password)`
4. On success, the user is redirected to the appropriate dashboard

### Admins

1. Admin visits `/admin-login`
2. Enters email + password
3. Frontend calls `signInAdmin(email, password)`
4. On success, redirected to `/admin-dashboard`

### Customers

1. Customer visits `/signin` or `/signup`
2. These pages use Firebase Auth (see existing `SignIn.tsx` and `SignUp.tsx`)
3. Customer auth is separate from the vendor/rider/admin system

### Session Management

The `getCurrentVendor()`, `getCurrentRider()`, and `getCurrentAdmin()` functions are called on page load to check if a user is already authenticated. If they return `null`, the user is redirected to the sign-in page.

**Recommended approach:** Use JWT tokens stored in `httpOnly` cookies, or use session cookies. The frontend doesn't care about the mechanism — it just calls the API functions and expects the correct data back.

---

## Business Logic Notes

### 1. Vendor Verification
- New vendors register with `verified: false`
- They see a "Pending Verification" screen until an admin approves them
- The vendor dashboard polls for verification status via `getCurrentVendor()`
- Admin approves/rejects via `verifyUser(id, 'vendor', 'approve')`

### 2. Rider Verification
- Same flow as vendors — riders must be admin-approved before they can go online

### 3. Business Type Resolution
- When a vendor signs up, they enter a free-text business type (e.g., "Restaurant")
- The frontend resolves this to one of the 5 `BusinessType` categories using keyword matching
- This logic is in `resolveBusinessType()` in `services/api.ts` (pure frontend, no API needed)
- The raw input is preserved in `businessTypeRaw`, the resolved category in `businessType`

### 4. Explore Page
- Customers search for stores by location/address
- `getStoresForExplore(address, category)` should return stores near that address
- In production, use geolocation (lat/lng) for proximity search
- The `category` filter is one of the `BusinessType` values or `'All'`

### 5. Order Lifecycle
- Customer places order → vendor sees it in "Incoming Orders"
- Vendor prepares → marks as "ready"
- Rider sees "ready" orders → accepts → picks up → delivers
- The frontend polls every 5 seconds for new orders (vendor & rider dashboards)
- Consider WebSockets for real-time updates in production

### 6. Image Handling
- Store and menu item images can be URLs or file uploads
- File uploads are currently converted to base64 data URLs on the frontend
- In production, upload images to a file storage service (S3, Cloudinary, etc.) and store the URL

### 7. Currency
- All prices are in Nigerian Naira (₦)
- Displayed with `toLocaleString()` formatting

---

## 🗂️ Database Schema Suggestion

```
vendors
├── id (PK)
├── first_name, last_name
├── business_type, business_type_raw
├── phone_number, email, location
├── password_hash
├── verified (boolean)
├── created_at

stores
├── id (PK)
├── vendor_id (FK → vendors)
├── name, business_type
├── categories (JSON array)
├── address, description, image_url
├── opening_time, closing_time
├── created_at

menu_items
├── id (PK)
├── store_id (FK → stores)
├── name, categories (JSON array)
├── price, description, image_url
├── created_at

riders
├── id (PK)
├── first_name, last_name
├── vehicle_type
├── phone_number, email, location
├── password_hash
├── is_online, last_seen
├── verified (boolean)
├── created_at

orders
├── id (PK)
├── store_id (FK → stores)
├── store_name
├── customer_id, customer_name, customer_phone
├── customer_location, customer_address
├── rider_id (FK → riders, nullable)
├── items (JSON array)
├── total_amount, delivery_fee
├── status (enum)
├── created_at, accepted_at, picked_up_at, delivered_at

admins
├── id (PK)
├── username, email, password_hash
├── created_at
```

---

## ❓ Questions?

If anything is unclear, check:
1. `frontend/src/types/models.ts` — the exact type definitions
2. `frontend/src/services/api.ts` — every function the frontend calls
3. The page components in `frontend/src/pages/` — to see how data is used in the UI

Each `TODO` comment in `api.ts` tells you exactly which endpoint to build and what it should return.

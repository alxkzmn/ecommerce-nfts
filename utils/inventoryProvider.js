/*
 *   Copyright (c) 2021 JAMstack Ecommerce
 *   All rights reserved.
 *   SPDX-License-Identifier: MIT
 *   Modified by Alexander Kuzmin
 */

/*
Inventory items should adhere to the following schema:
type Product {
  id: ID!
  categories: [String]!
  price: Float!
  name: String!
  image: String!
  description: String!
  currentInventory: Int!
  brand: String
  sku: ID
}
*/

async function fetchInventory() {
  const res = await fetch("http://localhost:5000/inventory")
  const data = await res.json()
  return data
}

export { fetchInventory }

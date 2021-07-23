/*
 *   Copyright (c) 2021 JAMstack Ecommerce
 *   All rights reserved.
 *   SPDX-License-Identifier: MIT
 */
import { fetchInventory } from "./inventoryProvider"
import { inventoryByCategory } from "./inventoryByCategory"

async function inventoryForCategory(category) {
  const inventory = await fetchInventory()
  const byCategory = inventoryByCategory(inventory)
  return byCategory[category].items
}

export default inventoryForCategory

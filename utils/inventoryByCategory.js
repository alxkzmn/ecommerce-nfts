/*
 *   Copyright (c) 2021 JAMstack Ecommerce
 *   All rights reserved.
 *   SPDX-License-Identifier: MIT
 */
function inventoryByCategory(inventory) {
  return inventory.reduce((acc, next) => {
    const categories = next.categories
    categories.forEach((c) => {
      if (acc[c]) {
        acc[c].items.push(next)
      } else {
        acc[c] = {}
        acc[c].items = []
        acc[c].items.push(next)
      }
    })
    return acc
  }, {})
}

export { inventoryByCategory }

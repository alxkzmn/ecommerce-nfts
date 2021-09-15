/*
 *   Copyright (c) 2021 JAMstack Ecommerce
 *   All rights reserved.
 *   SPDX-License-Identifier: MIT
 *   Modified by: Alexander Kuzmin
 */
import Head from "next/head"
import {
  Center,
  Footer,
  Tag,
  Showcase,
  DisplaySmall,
  DisplayMedium,
} from "../components"
import { titleIfy, slugify } from "../utils/helpers"
import { fetchInventory } from "../utils/inventoryProvider"
import CartLink from "../components/CartLink"

const Home = ({ inventoryData = [], categories: categoryData = [] }) => {
  const inventory = inventoryData.slice(0, 4)
  const categories = categoryData.slice(0, 2)

  return (
    <>
      <CartLink />
      <div className="w-full">
        <Head>
          <title>BikeShop</title>
          <meta
            name="description"
            content="Ride a BikeShop bike and have a smooth ride"
          />
          <meta property="og:title" content="BikeShop" key="title" />
        </Head>
        {inventory.length > 0 && (
          <div
            className="bg-blue-300
        p-6 pb-10 smpb-6
        flex lg:flex-row flex-col"
          >
            <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
              <Tag year="2021" category={inventory[1].categories[0]} />
              <Center
                price={inventory[1].price}
                title={inventory[1].name}
                link={`/product/${slugify(inventory[1].name)}`}
              />
              <Footer designer="Jason Bourne" />
            </div>
            <div className="flex flex-1 justify-center items-center relative">
              <Showcase imageSrc={inventory[1].image} />
              <div
                className="absolute
              w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88
              bg-white z-0 rounded-full"
              />
            </div>
          </div>
        )}
      </div>
      {categories.length > 1 && (
        <div
          className="
        lg:my-8 lg:grid-cols-2
        grid-cols-1
        grid gap-4 my-4 
      "
        >
          <DisplayMedium
            imageSrc={categories[0].image}
            subtitle={`${categories[0].itemCount} items`}
            title={titleIfy(categories[0].name)}
            link={`/category/${slugify(categories[0].name)}`}
          />
          <DisplayMedium
            imageSrc={categories[2].image}
            subtitle={`${categories[2].itemCount} items`}
            title={titleIfy(categories[2].name)}
            link={`/category/${slugify(categories[2].name)}`}
          />
        </div>
      )}
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-4xl mb-3">
          {inventory.length > 0
            ? "Trending Now"
            : "We are expecting a restock soon, please come back later"}
        </h2>
        {inventory.length > 0 && (
          <p className="text-gray-600 text-sm">
            Find the perfect bicycle for You.
          </p>
        )}
      </div>
      {inventory.length > 0 && (
        <div className="my-8 flex flex-col lg:flex-row justify-between">
          <DisplaySmall
            imageSrc={inventory[0].image}
            title={inventory[0].name}
            subtitle={inventory[0].categories[0]}
            link={`/product/${slugify(inventory[0].name)}`}
          />

          <DisplaySmall
            imageSrc={inventory[1].image}
            title={inventory[1].name}
            subtitle={inventory[1].categories[0]}
            link={`/product/${slugify(inventory[1].name)}`}
          />

          <DisplaySmall
            imageSrc={inventory[2].image}
            title={inventory[2].name}
            subtitle={inventory[2].categories[0]}
            link={`/product/${slugify(inventory[2].name)}`}
          />
        </div>
      )}
    </>
  )
}

export async function getStaticProps() {
  const inventory = await fetchInventory()

  const inventoryCategorized = inventory.reduce(
    (acc, next) => {
      const categories = next.categories

      for (const c of categories)
        (c) => {
          const index = acc.findIndex((item) => item.name === c)
          if (index !== -1) {
            const item = acc[index]
            item.itemCount = item.itemCount + 1
            acc[index] = item
          } else {
            const item = {
              name: c,
              image: next.image,
              itemCount: 1,
            }
            acc.push(item)
          }
        }
      return acc
    },
    [inventory]
  )

  return {
    props: {
      inventoryData: inventory,
      categories: inventoryCategorized,
    },
  }
}

export default Home

/*
 *   Copyright (c) 2021 JAMstack Ecommerce
 *   All rights reserved.
 *   SPDX-License-Identifier: MIT
 */
import Image from "../Image"

const Showcase = ({ imageSrc }) => {
  return (
    <div className="z-10">
      <Image src={imageSrc} className="w-136" alt="Showcase item" />
    </div>
  )
}

export default Showcase

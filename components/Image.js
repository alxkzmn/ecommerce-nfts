/*
 *   Copyright (c) 2021 JAMstack Ecommerce
 *   All rights reserved.
 *   SPDX-License-Identifier: MIT
 */
const ImageComponent = ({ src, ...props }) => {
  return <img src={src} {...props} />
}

export default ImageComponent

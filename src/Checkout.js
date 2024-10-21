import React from 'react'
import { Cartpage } from './Cartpage'
import { useSelector } from 'react-redux'


export  function Checkout() {
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.pinimg.com/736x/84/ee/48/84ee48dbb18b783a991c2a22103b5649.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-2.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.ebayimg.com/images/g/G8oAAOSwdIlblX2q/s-l1200.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "https://doiqgxrhp4iii.cloudfront.net/F19%20PRO%20BLACK%20256GB_71_11zon.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://i.gadgets360cdn.com/products/large/1553612275_635_huawei_p30.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
  ];
    const totalPrice = useSelector(state=>state.priceValue.totalPrice)
    console.log(totalPrice)
  return (
    <div>
{products.map((pd)=>(
    <Cartpage pd={pd} />
))}
<div className="flex-bottom">
        <div className="f1">
          <span>Subtotal:</span>
          <span>{totalPrice}</span>
        </div>
        <div className="f2">
          {" "}
          <span>shipping:</span>
          <span>
            <strong>FREE</strong>
          </span>
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          paddingBottom: "10px",
          marginTop: "50px",
        }}></div>
      <div className="f3">
        <span>Total:</span>
        <div className="flex">
        <span>{totalPrice}</span>
        <p className="text2">
        Get daily cash with Nespola Card
      </p>
      </div>
      </div>
    </div>
  )
}

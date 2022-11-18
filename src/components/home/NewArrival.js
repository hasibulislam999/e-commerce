import React from "react";
import SecondaryContainer from "../container/SecondaryContainer";
import GreyText from "../GreyText";
import ProductCarousel from "../ProductCarousel";

const NewArrival = () => {
  // carousel data
  const items = [
    {
      _id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
      category: "Men's Sneaker",
      name: "ULTRABOOST 22 SHOES",
      seller: "Addidas",
      price: 420,
      stock: 20,
      ratings: 4,
      ratingsCount: 3725,
      thumbnail:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
      shipping: 1,
      quantity: 0,
    },
    {
      _id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
      category: "Men's Sneaker",
      name: "LUNAR NEW YEAR ULTRABOOST DNA SHOES",
      seller: "Addidas",
      price: 196,
      stock: 19,
      ratings: 5,
      ratingsCount: 4355,
      thumbnail:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
      shipping: 14,
      quantity: 0,
    },
    {
      _id: "307f166f-1d04-4573-bc37-2f461ea9d4f7",
      category: "Men's Sneaker",
      name: "SUPERNOVA SHOES",
      seller: "Addidas",
      price: 245,
      stock: 20,
      ratings: 4,
      ratingsCount: 3972,
      thumbnail:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
      shipping: 1,
      quantity: 0,
    },
    {
      _id: "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
      category: "Men's Sneaker",
      name: "LITE RACER ADAPT 3.0 SHOES",
      seller: "Addidas",
      price: 229,
      stock: 10,
      ratings: 5,
      ratingsCount: 1764,
      thumbnail:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
      shipping: 32,
      quantity: 0,
    },
    {
      _id: "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
      category: "Men's Sneaker",
      name: "4DFWD SHOES",
      seller: "Addidas",
      price: 287,
      stock: 11,
      ratings: 4,
      ratingsCount: 799,
      thumbnail:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
      shipping: 49,
      quantity: 0,
    },
    {
      _id: "6e5593d3-557b-43cf-8dab-a5140faedfb0",
      category: "Men's Sneaker",
      name: "KAPTIR 2.0 SHOES",
      seller: "Addidas",
      price: 138,
      stock: 19,
      ratings: 3,
      ratingsCount: 4372,
      thumbnail:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",
      shipping: 19,
      quantity: 0,
    },
    {
      _id: "9c0c13c2-54e4-4001-809b-afbd9d84037d",
      category: "Men's Sneaker",
      name: "4DFWD PULSE SHOES",
      seller: "Addidas",
      price: 226,
      stock: 1,
      ratings: 4,
      ratingsCount: 2870,
      thumbnail:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a8256bb7ca34da49ff8ad5600bb2812_9366/4DFWD_Pulse_Shoes_White_Q46221_01_standard.jpg",
      shipping: 15,
      quantity: 0,
    },
  ];

  return (
    <SecondaryContainer>
      <h1 className="lg:text-4xl md:text-2xl text-xl font-semibold mb-4">
        New Arrivals. <GreyText>REY backpacks & bags</GreyText>
      </h1>
      <ProductCarousel products={items} />
    </SecondaryContainer>
  );
};

export default NewArrival;
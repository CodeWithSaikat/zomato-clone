import React from "react";
import BestFoodComponents from "./bestFoodComponents/BestFoodComponents";
import "./BestFoodDetails.css";

const BestFoodDetails = () => {
  const bestFood = [
    {
      id: 1,
      img: "https://b.zmtcdn.com/data/pictures/2/20602/8d2f781aba85428628d124dd819ce888_o2_featured_v2.jpg?output-format=webp",
      name: "Zeeshan Restaurant",
      rating: "4.0 ",
      location: "North Indian, Biriyani",
      price: "₹ 130 for one",
    },
    {
      id: 2,
      img: "https://b.zmtcdn.com/data/pictures/6/18560756/3ff70f0627385a2462ea4aea282b204c_o2_featured_v2.jpg?output-format=webp",
      name: "AI Baik Fast Food Center",
      rating: "3.9 ",
      location: "Biriyani, North Indian, Rolls...",
      price: "₹ 200 for one",
    },
    {
      id: 3,
      img: "https://b.zmtcdn.com/data/pictures/chains/0/21300/9658745b57aece14026ebf5b3d08cf40_o2_featured_v2.jpg?output-format=webp",
      name: "Tandoori Darbar",
      rating: "4.0",
      location: "North Indian, Chinese, Mu..",
      price: "₹ 130 for one",
    },
    {
      id: 4,
      img: "https://b.zmtcdn.com/data/pictures/2/19675772/5b60dd1a74744c0ef9c582c200d3edc4_o2_featured_v2.jpg?output-format=webp",
      name: "Southern Pantry",
      rating: "4.3 ",
      location: "South Indian",
      price: "₹ 200 for one",
    },
    {
      id: 5,
      img: "https://b.zmtcdn.com/data/pictures/chains/7/20287/2be07c61fafa2caa0b17000a8a1b032a_o2_featured_v2.jpg?output-format=webp",
      name: "KFC",
      rating: "4.1 ",
      location: "Burger, Fast Food, Bevea...",
      price: "₹ 200 for one",
    },
    {
      id: 6,
      img: "https://b.zmtcdn.com/data/pictures/chains/3/18947213/0716b5947b013e6dc41f5defe0bb72e0_o2_featured_v2.jpg?output-format=webp",
      name: "Mughal Arsalan Biriyani",
      rating: "3.8 ",
      location: "Biriyani, North Indian",
      price: "₹ 200 for one",
    },
    {
      id: 7,
      img: "https://b.zmtcdn.com/data/pictures/1/18649981/5dbe471f92f97dad89763d60caf074a3_o2_featured_v2.jpg?output-format=webp",
      name: "Petuk Kolkata",
      rating: "4.0 ",
      location: "Chinese, North Indian",
      price: "₹ 200 for one",
    },
    {
      id: 8,
      img: "https://b.zmtcdn.com/data/pictures/chains/0/21060/cc7cfcafbaa312b8e003ab60181246b0_o2_featured_v2.jpg?output-format=webp",
      name: "WOW! Momo",
      rating: "4.3 ",
      location: "Momos, Fast Food",
      price: "₹ 200 for one",
    },
    {
      id: 9,
      img: "https://b.zmtcdn.com/data/pictures/2/19128032/aa93f8b95c830c9a8e6dc354fde43a8b_o2_featured_v2.jpg?output-format=webp",
      name: "Little Box",
      rating: "4.3 ",
      location: "Chinese, Momos, Rolls, Fast Food",
      price: "₹ 200 for one",
    },
    {
      resId: 18578307,
      name: "Sufi Palace",
      image:
        "https://b.zmtcdn.com/data/pictures/7/18578307/3d24ff5a7ad3ead41b01deb621e271db_o2_featured_v2.jpg?output-format=webp",
      rating: "4.3 ",
      location: "College Street, Kolkata",
      price: "₹ 200 for one",
    },
  ];

  return (
    <div className="best-food-container">
      <h3 className="best-food-text">Best Food in Kolkata</h3>
      <div className="best-food-items-container">
        <div className="best-food-items">
          {bestFood.map((item) => {
            return <BestFoodComponents item={item} />;
          })}
        </div>

        <div className="end-result">
          <h3>End of Search Result</h3>
          <h1>This is under Build process...</h1>
        </div>
      </div>
    </div>
  );
};

export default BestFoodDetails;

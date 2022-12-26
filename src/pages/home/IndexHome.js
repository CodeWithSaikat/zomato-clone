import React, { useState } from "react";
import Footer from "../../components/commen/footer/Footer";
import IndexHeader from "../../components/commen/header/IndexHeader";
import IndexTabOption from "../../components/commen/tabOption/IndexTabOption";
import Delivery from "../../components/delivery/Delivery";
import DiningOut from "../../components/diningOut/DiningOut";
import Nightlife from "../../components/nightLife/Nightlife";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  const getCorrectScreenCome = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;

      case "Dining Out":
        return <DiningOut />;

      case "Nightlife":
        return <Nightlife />;

      default:
        return <Delivery />;
    }
  };

  return (
    <div>
      <IndexHeader />
      <IndexTabOption activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* different screen */}
      {getCorrectScreenCome(activeTab)}
      <Footer />
    </div>
  );
};

export default HomePage;

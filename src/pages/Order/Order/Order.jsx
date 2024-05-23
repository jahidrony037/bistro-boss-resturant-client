import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../../components/shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import "./Order.css";

const Order = () => {
  const categories = ["salads", "pizzas", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [index, setIndex] = useState(initialIndex);
  const [menu, isLoading] = useMenu();
  //   console.log(menu);

  //   console.log(category);
  const desserts = menu?.filter((item) => item.category === "dessert");
  const pizzas = menu?.filter((item) => item.category === "pizza");
  const salads = menu?.filter((item) => item.category === "salad");
  const soups = menu?.filter((item) => item.category === "soup");
  const drinks = menu?.filter((item) => item.category === "drinks");

  

  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Order Food</title>
      </Helmet>
      <Cover
        title="OUR SHOP"
        description="Would you like to try a dish?"
        image="https://i.ibb.co/8XKfXZm/banner2.jpg"
      />

      {isLoading ? (
        "loading"
      ) : (
        <div className="flex justify-center mt-10 mx-auto">
          <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
            <div className="text-center mb-[48px]">
              <TabList>
                <Tab>SALAD</Tab>
                <Tab>PIZZA</Tab>
                <Tab>SOUPS</Tab>
                <Tab>DESSERTS</Tab>
                <Tab>DRINKS</Tab>
              </TabList>
            </div>
            <TabPanel>
              {isLoading ? <p>Loading</p> : <OrderTab items={salads} />}
            </TabPanel>
            <TabPanel>
              {isLoading ? <p>Loading</p> : <OrderTab items={pizzas} />}
            </TabPanel>
            <TabPanel>
              {isLoading ? <p>Loading</p> : <OrderTab items={soups} />}
            </TabPanel>
            <TabPanel>
              {isLoading ? <p>Loading</p> : <OrderTab items={desserts} />}
            </TabPanel>
            <TabPanel>
              {isLoading ? <p>Loading</p> : <OrderTab items={drinks} />}
            </TabPanel>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default Order;

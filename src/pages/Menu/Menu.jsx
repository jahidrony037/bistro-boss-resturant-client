import { Helmet } from "react-helmet-async";
import Cover from "../../components/shared/Cover/Cover";
import SectionTitles from "../../components/shared/SectionTitles/SectionTitles";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const title = "OUR MENU";
  const description = "Would you like to try a dish?";
  const image = "https://i.ibb.co/LxT8Dst/banner3.jpg";

  const [menu] = useMenu() || [];
  // console.log(menu);
  const desserts = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="space-y-[106px]">
      <Helmet>
        <title>Bistro-Boss | Menu</title>
      </Helmet>
      <Cover title={title} description={description} image={image} />
      <SectionTitles heading="---Don't miss---" subHeading="TODAY'S OFFER" />
      {/* offered menu*/}
      <MenuCategory items={offered} />
      {/* Desserts */}
      <MenuCategory title="desserts" items={desserts} />
      {/* Pizzas */}
      <MenuCategory title="pizzas" items={pizzas} />
      {/* Salads */}
      <MenuCategory title="salads" items={salads} />
      {/* Soups */}
      <MenuCategory title="soups" items={soups} />
      {/* Drinks */}
      <MenuCategory title="drinks" items={drinks} />
    </div>
  );
};

export default Menu;

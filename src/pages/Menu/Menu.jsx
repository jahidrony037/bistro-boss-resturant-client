import { Helmet } from "react-helmet-async";
import CommonBanner from "../../components/shared/CommonBanner/CommonBanner";
import Cover from "../../components/shared/Cover/Cover";
import SectionTitles from "../../components/shared/SectionTitles/SectionTitles";
import useMenu from "../../hooks/useMenu";
import PopularMenuCard from "../Home/PopularMenu/PopularMenuCard";

const Menu = () => {
  const title = "OUR MENU";
  const description = "Would you like to try a dish?";
  const image = "https://i.ibb.co/LxT8Dst/banner3.jpg";

  const [menu, isLoading] = useMenu() || [];
  const desserts = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div className="space-y-[106px]">
      <Helmet>
        <title>Bistro-Boss | Menu</title>
      </Helmet>
      <Cover title={title} description={description} image={image} />
      <SectionTitles heading="---Don't miss---" subHeading="TODAY'S OFFER" />
      {/* offered menu*/}
      <div>
        {!isLoading ? (
          <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
            {offered.map((item) => (
              <PopularMenuCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <p>Loading....</p>
        )}
      </div>
      <CommonBanner
        bgColor="#15151599"
        textColor="#FFF"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="DESSERTS"
      />
      <div>
        {!isLoading ? (
          <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
            {desserts.map((item) => (
              <PopularMenuCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <p>Loading....</p>
        )}
      </div>
      {/* Pizza */}
      <CommonBanner
        bgColor="#15151599"
        textColor="#FFF"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="PIZZA"
      />
      <div>
        {!isLoading ? (
          <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
            {pizzas.map((item) => (
              <PopularMenuCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <p>Loading....</p>
        )}
      </div>

      {/* Salads */}
      <CommonBanner
        bgColor="#15151599"
        textColor="#FFF"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="SALADS"
      />
      <div>
        {!isLoading ? (
          <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
            {salads.map((item) => (
              <PopularMenuCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <p>Loading....</p>
        )}
      </div>

      {/* Soups */}
      <CommonBanner
        bgColor="#15151599"
        textColor="#FFF"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="SOUPS"
      />
      <div>
        {!isLoading ? (
          <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
            {soups.map((item) => (
              <PopularMenuCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
};

export default Menu;

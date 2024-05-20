import CommonBanner from "../../../components/shared/CommonBanner/CommonBanner";
import Banner from "../Banner/Banner";
import CallUsBanner from "../CallUsBanner/CallUsBanner";
import Category from "../Category/Category";
import ChefRecomendations from "../ChefRecomendations/ChefRecomendations";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  const title = "Bistro Boss";
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.";
  return (
    <div className="space-y-[96px]">
      <Banner />
      <Category />
      <CommonBanner title={title} description={description} />
      <PopularMenu />
      <CallUsBanner />
      <ChefRecomendations />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;

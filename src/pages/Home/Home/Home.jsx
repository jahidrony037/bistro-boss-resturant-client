import CommonBanner from "../../../components/shared/CommonBanner/CommonBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  const title = "Bistro Boss";
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.";
  return (
    <div className="space-y-[92px]">
      <Banner />
      <Category />
      <CommonBanner title={title} description={description} />
      <PopularMenu />
    </div>
  );
};

export default Home;

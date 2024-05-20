import CommonBanner from "../../../components/shared/CommonBanner/CommonBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  const title = "Bistro Boss";
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.";
  return (
    <div>
      <Banner />
      <Category />
      <CommonBanner title={title} description={description} />
    </div>
  );
};

export default Home;

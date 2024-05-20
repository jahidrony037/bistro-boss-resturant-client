import SectionTitles from "../../../components/shared/SectionTitles/SectionTitles";

const Featured = () => {
  return (
    <div className="bg-[url('https://i.postimg.cc/TYL4KTv8/featured.jpg')] bg-no-repeat bg-center z-10 bg-opacity-70 bg-fixed">
      <SectionTitles heading="---Check it out---" subHeading="FROM OUR MENU" />
      <div className="flex md:flex-row flex-col md:items-center  md:justify-evenly md:px-[15%] gap-10 ">
        <img
          src="https://i.postimg.cc/TYL4KTv8/featured.jpg"
          alt="featured image"
          className="object-cover w-[448px] rounded-lg"
        />

        <div className="space-y-4 ">
          <p className="text-white pr-6">
            March 20, 2023 <br /> WHERE CAN I GET SOME? <br />{" "}
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </small>
          </p>
          <button
            className="bg-opacity-5 bg-gray-500 hover:bg-gray-500 hover:bg-opacity-5 hover:border-white uppercase btn"
            style={{ borderBottom: "3px solid #FFF" }}
          >
            Reade More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

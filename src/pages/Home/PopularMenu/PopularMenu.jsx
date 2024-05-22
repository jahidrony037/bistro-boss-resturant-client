import SectionTitles from "../../../components/shared/SectionTitles/SectionTitles";
import useMenu from "./../../../hooks/useMenu";
import PopularMenuCard from "./PopularMenuCard";

const PopularMenu = () => {
  const heading = `---Check it out---`;
  const subHeading = `FROM OUR MENU`;
  const [menu, isLoading] = useMenu() || [];
  const popularCategory = menu.filter((item) => item.category === "popular");
  return (
    <section>
      <SectionTitles heading={heading} subHeading={subHeading} />
      {!isLoading ? (
        <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
          {popularCategory.map((item) => (
            <PopularMenuCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <p>Loading....</p>
      )}
      <div className="flex my-[30px]">
        <button
          className="uppercase btn bg-[#fff] hover:bg-[#fff] text-center mx-auto"
          style={{ borderBottom: "3px solid #151515" }}
        >
          view full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;

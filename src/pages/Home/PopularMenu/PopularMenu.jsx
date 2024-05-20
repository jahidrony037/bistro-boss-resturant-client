import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitles from "../../../components/shared/SectionTitles/SectionTitles";
import PopularMenuCard from "./PopularMenuCard";

const PopularMenu = () => {
  const heading = `---Check it out---`;
  const subHeading = `FROM OUR MENU`;
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("menu.json");
      const results = res.data;
      if (results) {
        const menuItems = results.filter(
          (result) => result.category === "popular"
        );
        setMenu(menuItems);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <SectionTitles heading={heading} subHeading={subHeading} />
      <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
        {menu.map((item) => (
          <PopularMenuCard key={item._id} item={item} />
        ))}
      </div>
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

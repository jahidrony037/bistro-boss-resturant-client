import SectionTitles from "../../../components/shared/SectionTitles/SectionTitles";
import ChefRecomendationCard from "./ChefRecomendationCard";

const ChefRecomendations = () => {
  const data = [
    {
      image: "https://i.postimg.cc/KjDTLnnC/slide5.jpg",
      name: "Caeser Salad",
      ingredients: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
    {
      image: "https://i.postimg.cc/KjDTLnnC/slide5.jpg",
      name: "Caeser Salad",
      ingredients: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
    {
      image: "https://i.postimg.cc/KjDTLnnC/slide5.jpg",
      name: "Caeser Salad",
      ingredients: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
  ];
  return (
    <div>
      <SectionTitles heading="---Should Try---" subHeading="CHEF RECOMMENDS" />
      <div className="grid md:grid-cols-3  grid-cols-1 gap-4 mt-12">
        {data.map((item, i) => (
          <ChefRecomendationCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecomendations;

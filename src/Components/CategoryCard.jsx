import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards";

const CategoryCard = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [card, setCard] = useState([]);
  useEffect(() => {
    if (category) {
      const ClickedCategory = [...data].filter(
        (card) => card.category === category
      );
      setCard(ClickedCategory);
    } else {
      setCard(data);
    }
  }, [data, category]);
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
        {card.length > 0 ? (
          card.map((card, idx) => <Cards key={idx} card={card} />)
        ) : (
          <div className=" text-4xl text-purple-500 font-bold">
            No data Found
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryCard;

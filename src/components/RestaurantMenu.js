import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
function RestaurantMenu() {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(null);
  if (menuData === null) {
    return <Shimmer />;
  }

  const { itemCards } =
    menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, cuisines, costForTwoMessage } =
    menuData?.cards[0]?.card?.card?.info;

  return (
    <div>
      <div className="text-center">
        <h2 className="font-bold my-6 text-2xl">{name}</h2>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      {categories.map((catagory, index) => (
        <RestaurantCategory
          key={catagory?.card?.card?.title}
          data={catagory?.card?.card}
          showItems={showItems === index ? true : false}
          setShowItems={() => {
            setShowItems(index);
          }}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;

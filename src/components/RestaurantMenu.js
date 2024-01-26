import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import Shimmer from "./shimmer";
function RestaurantMenu() {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setMenuData(json.data);
  };
  if (menuData === null) {
    return <Shimmer />;
  }

  const { itemCards } =
    menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const { name, cuisines, costForTwoMessage } =
    menuData?.cards[0]?.card?.card?.info;

  return (
    <div className="res-menu">
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards &&
          itemCards.map((items) => (
            <li key={items.card.info.id}>
              {items.card.info.name} - Rs{" "}
              {items.card.info.price / 100 ||
                items.card.info.defaultPrice / 100}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;

import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resID) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resID);
    const json = await data.json();
    setMenuData(json.data);
  };

  return menuData;
};

export default useRestaurantMenu;

import { useState, useEffect } from "react";
import { RES_API } from "../utils/constant";

const useRestaurantData = () => {
  const [resListItems, setResListItems] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const swiggyData = await data.json();

    const restaurants =
      swiggyData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setResListItems(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const handleSearch = () => {
    const filteredRes = resListItems.filter((filtered) =>
      filtered.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRes);
  };

  const handleFilterTopRated = () => {
    const filteredList = resListItems.filter((res) => res.info.avgRating > 4.0);
    setFilteredRestaurants(filteredList);
  };
  const searching = (e) => {
    setSearchText(e.target.value);
  };

  return {
    resListItems,
    filteredRestaurant,
    searchText,
    searching,
    handleSearch,
    handleFilterTopRated,
  };
};

export default useRestaurantData;

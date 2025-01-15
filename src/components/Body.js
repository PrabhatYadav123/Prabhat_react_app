import { useContext } from "react";
import ResCart, { promotedResCart } from "./ResCart";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";

const Body = () => {
  const {
    resListItems,
    filteredRestaurant,
    searchText,
    searching,
    handleSearch,
    handleFilterTopRated,
  } = useRestaurantData();
  const { userName, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  const ResCartPromoted = promotedResCart(ResCart);

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please Check your Internet Connection!!!
      </h1>
    );
  }

  return resListItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-2 p-2 border border-black rounded-md ">
      <div className="flex">
        <div>
          <input
            className="p-1 m-1 border hover:border-black rounded-md"
            value={searchText}
            onChange={searching}
          />
          <button
            className="border p-1 m-1 hover:border-black rounded-md bg-green-300"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
              <h1>Hello Prabhat</h1>
        <button
          className="m-1 p-1 border hover:border-black rounded-md bg-green-200"
          onClick={handleFilterTopRated}
        >
          Filter Top Rated Restaurant
        </button>
        <input
          className="p-1 m-1 border hover:border-black rounded-md"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className=" flex flex-wrap shadow-sm ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating < 4.3 ? (
              <ResCartPromoted ResData={restaurant} />
            ) : (
              <ResCart ResData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

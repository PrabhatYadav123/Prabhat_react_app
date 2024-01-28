import ResCart from "./ResCart";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const {
    resListItems,
    filteredRestaurant,
    searchText,
    searching,
    handleSearch,
    handleFilterTopRated,
  } = useRestaurantData();

  const onlineStatus = useOnlineStatus();

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
        <button
          className="m-1 p-1 border hover:border-black rounded-md bg-green-200"
          onClick={handleFilterTopRated}
        >
          Filter Top Rated Restaurant
        </button>
      </div>
      <div className=" flex flex-wrap shadow-sm ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <ResCart ResData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

import ResCart from "./ResCart";
import Shimmer from "./shimmer";
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
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-bar"
            value={searchText}
            onChange={searching}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilterTopRated}>
          Filter Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
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

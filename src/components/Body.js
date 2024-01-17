import ResCart from "./ResCart";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [resListItems, setResListItems] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resListItems.filter(
              (res) => res.data.avgRating > 4.0
            );
            setResListItems(filteredList);
          }}
        >
          Filter Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resListItems.map((restaurant) => (
          <ResCart key={restaurant.data.id} ResData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

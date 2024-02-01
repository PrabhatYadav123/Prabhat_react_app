import ItemsList from "./ItemsList";

function RestaurantCategory({ data, showItems, setShowItems }) {
  const handleClick = () => {
    setShowItems();
  };
  return (
    <div className=" my-2 p-4 shadow-lg bg-gray-50 w-6/12 m-auto ">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold cursor-pointer">
          {data.title} - {data.itemCards.length}
        </span>
        <span>⬇</span>
      </div>
      {showItems && <ItemsList items={data.itemCards} />}
    </div>
  );
}

export default RestaurantCategory;

import { CDN_URL } from "../utils/constant";
const ResCart = (props) => {
  const { ResData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    ResData?.info;
  return (
    <div className="w-[220px] m-2 p-1 rounded-md border border-black bg-gray-300 hover:bg-green-300">
      <img src={CDN_URL + cloudinaryImageId} className="rounded-md" />

      <h5 className="font-bold py-2 text-lg">{name}</h5>
      <h6>{avgRating}⭐</h6>
      <h6>{costForTwo}</h6>
      <h6>{cuisines.join(" ,")}</h6>
      <h6>{sla.deliveryTime} min</h6>
    </div>
  );
};

export default ResCart;

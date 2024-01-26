import { CDN_URL } from "../utils/constant";
const ResCart = (props) => {
  const { ResData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    ResData?.info;
  return (
    <div className="res-cart">
      <img src={CDN_URL + cloudinaryImageId} />
      <h5>{name}</h5>
      <h6>{avgRating}⭐</h6>
      <h6>{costForTwo}</h6>
      <h6>{cuisines.join(" ,")}</h6>
      <h6>{sla.deliveryTime} min</h6>
    </div>
  );
};

export default ResCart;

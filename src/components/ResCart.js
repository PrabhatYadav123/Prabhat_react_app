import { CDN_URL } from "../utils/constant";
const ResCart = (props) => {
  const { ResData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = ResData?.data;
  return (
    <div className="res-cart">
      <img src={CDN_URL + cloudinaryImageId} />
      <h5>{name}</h5>
      <h6>{avgRating}</h6>
      <h6>RS {costForTwo / 100} For Two</h6>
      <h6>{cuisines.join(" ,")}</h6>
      <h6>{deliveryTime}</h6>
    </div>
  );
};

export default ResCart;

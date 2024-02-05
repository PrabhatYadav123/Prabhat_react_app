import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveCartItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="p-4 m-4 text-center">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems?.length === 0 && (
        <h1>Cart is empty!. Please add item in the cart</h1>
      )}
      <div className="w-6/12 m-auto ">
        <ItemsList items={cartItems} />
      </div>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleRemoveCartItem}
      >
        Remove Item
      </button>
    </div>
  );
};

export default Cart;

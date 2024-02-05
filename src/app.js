import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Cart from "./components/cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appstore";

const About = lazy(() => import("./components/About"));
const ContactUS = lazy(() => import("./components/ContactUS"));

const AppLayOut = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    data = {
      name: "Yadav",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ userName: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading!!!</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense
            fallback={
              <h1>
                <Shimmer />
              </h1>
            }
          >
            <ContactUS />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxheading);
root.render(<RouterProvider router={router} />);

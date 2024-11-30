import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Reviews from "../Pages/Reviews";
import ProductDetails from "../Pages/ProductDetails";
import CategoryCard from "../Components/CategoryCard";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <CategoryCard></CategoryCard>,
            loader: () => fetch("../Gadgets.json"),
          },
          {
            path: "/category/:category",
            element: <CategoryCard></CategoryCard>,
            loader: () => fetch("../Gadgets.json"),
          },
        ],
      },
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/Review",
        element: <Reviews></Reviews>,
        loader: () => fetch("../Review.JSON"),
      },
      {
        path: "/ProductDetails/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../Gadgets.json"),
      },
    ],
  },
]);
export default routes;

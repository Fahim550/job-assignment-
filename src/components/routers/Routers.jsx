import Home from "../../pages/home/Home";
import WishList from "../wishlist/WishList";

export const routers=[
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/wishlist",
      element: <WishList/>,
    },
]
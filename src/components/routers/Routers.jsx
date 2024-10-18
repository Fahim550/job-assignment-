import Home from "../../pages/home/Home";
import BookDetails from "../bookDetails/BookDetails";
import WishList from "../wishlist/WishList";

 const routers = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/wishlist",
    element: <WishList />,
  },
  {
    path: "/bookdetails/:id",
    element: <BookDetails />,
  },
];
export default routers;

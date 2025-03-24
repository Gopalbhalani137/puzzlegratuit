import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import BlogPage from "../Pages/BlogPage";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import TermsCond from "../Pages/TermsCond";
import PuzzleCanvas from "../Pages/PuzzleCanvas";
import Jigsaw from "../Pages/Jigsaw";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path:'/blog',
          element: <Blog/>
        },{
          path:'/blog/:slug',
          element: <BlogPage/>
        },{
          path:'/about-us',
          element:<AboutUs/>
        },{
          path:'/contact',
          element:<Contact/>
        },{
          path:'/terms',
          element:<TermsCond/>
        },
    ] 
    },{
        path:'/jigsaw',
        element:<Jigsaw/>
    },{
      path:'/canvas',
      element:<PuzzleCanvas/>
    }
  ]);
export default router;
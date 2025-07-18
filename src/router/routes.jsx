import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Homepage/Homepage";
import AboutUs from "../pages/AboutUs/AboutUs";
import OurStory from "../pages/OurStory/OurStory";
import OurTeam from "../pages/OurTeam/OurTeam";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Homepage },
      {
        path: "/about",
        children: [
          { index: true, Component: AboutUs },
          { path: "our-story", Component: OurStory },
          { path: "our-team", Component: OurTeam },
        ],
      },
    ],
  },
]);

export default router;

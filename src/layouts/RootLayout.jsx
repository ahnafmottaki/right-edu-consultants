import { Outlet } from "react-router";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;

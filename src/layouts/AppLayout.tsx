import { Outlet } from "react-router-dom";
import { Footer, Header, SliderItems } from "@components/index";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <SliderItems />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;

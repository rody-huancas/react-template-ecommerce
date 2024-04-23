import { Outlet } from "react-router-dom";
import { Footer, Header } from "@components/index";

const AppLayout = () => {
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

export default AppLayout;

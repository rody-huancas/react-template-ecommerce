import ScrollToTop from "@components/common/ScrollTop";
import AppLayout from "@layouts/AppLayout";
import Home from "@pages/Home";
import ItemDetail  from "@pages/ItemDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/detail" element={<ItemDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

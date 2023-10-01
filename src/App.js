import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import { Navbar, Sidebar } from "./Components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  ColorPicker,
  ColorMapping,
  Products,
  SingleProduct,
  AddProduct,
} from "./Pages";
import "./App.css";
import { useStateContext } from "./Context/ContextProvider";

const App = () => {
  let { activeMenu, mode } = useStateContext();
  return (
    <div className={`${mode === "dark" && "dark"}`}>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 z-[1000]">
            <button
              data-tooltip-id="settingBtn"
              type="button"
              className="text-white text-3xl bg-red-500 rounded-full p-3 hover:bg-light-gray hover:drop-shadow-xl"
            >
              <FiSettings />
            </button>
            <Tooltip id="settingBtn" content="Setting" position="" />
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/products" element={<Products />} />{" "}
                <Route path="products/:productId" element={<SingleProduct />} />
                <Route path="products/addProduct" element={<AddProduct />} />
                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;

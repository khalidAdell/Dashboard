import { DataGrid } from "@mui/x-data-grid";
import { orderColumns, ordersData } from "../Data/dummy";
import Header from "../Components/Header";

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <div className="h-[40rem]">
        <DataGrid
          rows={ordersData}
          columns={orderColumns}
          sx={{ display: "flex", justifyContent: "space-between" }}
        />
      </div>
    </div>
  );
};

export default Orders;

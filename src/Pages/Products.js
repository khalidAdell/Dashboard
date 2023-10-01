import { DataGrid } from "@mui/x-data-grid";
import { productsColumns, productsData } from "../Data/dummy";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  let navigate = useNavigate();
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      align: "center",
      headerAlign: "center",
      renderCell: () => {
        return (
          <div className="flex gap-2">
            <button
              onClick={(e) =>
                navigate(
                  `${e.target.parentNode.parentNode.parentNode.getAttribute(
                    "data-id"
                  )}`
                )
              }
              className="w-[5rem] h-[2rem] text-white rounded-full bg-blue-400 
            hover:bg-green-300 "
            >
              View
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Products" />
      <div className="h-[40rem]">
        <div className="">
          <Link
            to={"addProduct"}
            className="cursor-poiner text-white w-[fit-content] bg-blue-500 p-2 pl-6 pr-6 rounded-lg mt-2 mb-2 block"
          >
            + New
          </Link>
        </div>
        <DataGrid
          checkboxSelection
          rows={productsData}
          columns={productsColumns.concat(actionColumn)}
          sx={{ display: "flex", justifyContent: "space-between" }}
          initialState={{
            pagination: { paginationModel: { pageSize: 25 } },
          }}
        />
      </div>
    </div>
  );
};

export default Products;

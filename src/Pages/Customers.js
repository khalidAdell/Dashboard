import { Avatar } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { customersData } from "../Data/dummy";
import Header from "../Components/Header";

const Customers = () => {
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
    );
  }

  const columns = [
    {
      field: "CustomerImage",
      headerName: "Image",
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Avatar
          className="rounded-2xl mt-3 mb-3 w-[50px] h-[50px]"
          src={params.value}
        />
      ), // renderCell will render the component
    },
    {
      field: "CustomerName",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "ProjectName",
      headerName: "Project Name",
      flex: 1,
      editable: true,
    },
    {
      field: "Budget",
      headerName: "Budget",
      type: "number",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },

    {
      field: "Status",
      headerName: "Status",
      type: "singleSelect",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <h3
          className={`rounded-xl text-center border-[1px] p-1 w-[5rem]${
            params.value === "Complete"
              ? " text-[#8BE78B]"
              : params.value === "Active"
              ? " text-[#03C9D7]"
              : params.value === "Rejected"
              ? " text-red-500"
              : params.value === "Pending"
              ? " text-[#FB9678]"
              : " text-[#FF5C8E]"
          }`}
        >
          {params.value}
        </h3>
      ), // renderCell will render the component
    },
    {
      field: "CustomerEmail",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "Weeks",
      headerName: "Time",
      flex: 1,
    },
    {
      field: "Location",
      headerName: "Location",
      flex: 1,
    },
    { field: "id", headerName: "ID", flex: 1 },
  ];

  return (
    <div className="m-2 md:m-10 p-2 pt-14 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <div className="h-[40rem]">
        <DataGrid
          checkboxSelection
          rows={customersData}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 25 } },
          }}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </div>
    </div>
  );
};

export default Customers;

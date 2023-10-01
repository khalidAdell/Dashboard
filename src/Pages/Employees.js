import { Avatar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { employeesData } from "../Data/dummy";
import Header from "../Components/Header";

const Employees = () => {
  const columns = [
    {
      field: "EmployeeImage",
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
      field: "Name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "Title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "HireDate",
      headerName: "Hire Date",
      flex: 1,
    },
    {
      field: "Country",
      headerName: "Country",
      flex: 1,
    },
    {
      field: "ReportsTo",
      headerName: "ReportsTo",
      flex: 1,
    },
    { field: "id", headerName: "ID", width: 50 },
  ];

  return (
    <div className="m-2 mt-8 md:m-10 p-2 pt-14 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <div className="h-[40rem]">
        <DataGrid rows={employeesData} columns={columns} />
      </div>
    </div>
  );
};

export default Employees;

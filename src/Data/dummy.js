import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import {
  FiShoppingBag,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import {
  BsKanban,
  BsBarChart,
  BsBoxSeam,
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
} from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import {
  MdOutlineSupervisorAccount,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { GrLocation } from "react-icons/gr";
import { Avatar } from "@mui/material";

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);
const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p
      style={{ background: props.StatusBg }}
      className="rounded-full h-3 w-3"
    />
    <p>{props.Status}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  majorGridLines: { width: 0 },
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  labelStyle: { color: "gray" },
};

export const areaPrimaryYAxis = {
  labelFormat: "{value}%",
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: "gray" },
};
export const barPrimaryXAxis = {
  valueType: "Category",
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: "transparent" },
};
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: "x",
    yName: "y",
    name: "USA",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
  {
    dataSource: areaChartData[1],
    xName: "x",
    yName: "y",
    name: "France",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
  {
    dataSource: areaChartData[2],
    xName: "x",
    yName: "y",
    name: "Germany",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
];

export const barChartData = [
  [
    { x: "USA", y: 46 },
    { x: "GBR", y: 27 },
    { x: "CHN", y: 26 },
  ],
  [
    { x: "USA", y: 37 },
    { x: "GBR", y: 23 },
    { x: "CHN", y: 18 },
  ],
  [
    { x: "USA", y: 38 },
    { x: "GBR", y: 17 },
    { x: "CHN", y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: "x",
    yName: "y",
    name: "Gold",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: "x",
    yName: "y",
    name: "Silver",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: "x",
    yName: "y",
    name: "Bronze",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
];
export const colorMappingData = [
  [
    { x: "Jan", y: 6.96 },
    { x: "Feb", y: 8.9 },
    { x: "Mar", y: 12 },
    { x: "Apr", y: 17.5 },
    { x: "May", y: 22.1 },
    { x: "June", y: 25 },
    { x: "July", y: 29.4 },
    { x: "Aug", y: 29.6 },
    { x: "Sep", y: 25.8 },
    { x: "Oct", y: 21.1 },
    { x: "Nov", y: 15.5 },
    { x: "Dec", y: 9.9 },
  ],
  ["#FFFF99"],
  ["#FFA500"],
  ["#FF4040"],
];

export const rangeColorMapping = [
  { label: "1°C to 10°C", start: "1", end: "10", colors: colorMappingData[1] },

  {
    label: "11°C to 20°C",
    start: "11",
    end: "20",
    colors: colorMappingData[2],
  },

  {
    label: "21°C to 30°C",
    start: "21",
    end: "30",
    colors: colorMappingData[3],
  },
];

export const ColorMappingPrimaryXAxis = {
  valueType: "Category",
  majorGridLines: { width: 0 },
  title: "Months",
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: "{value}°C",
  title: "Temperature",
};

export const FinancialPrimaryXAxis = {
  valueType: "DateTime",
  minimum: new Date("2016, 12, 31"),
  maximum: new Date("2017, 9, 30"),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: "Price",
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};

export const LinePrimaryYAxis = {
  labelFormat: "{value}%",
  rangePadding: "None",
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const customersGrid = [
  { type: "checkbox", width: "50" },
  {
    headerText: "Name",
    width: "150",
    template: customerGridImage,
    textAlign: "Center",
  },
  {
    field: "ProjectName",
    headerText: "Project Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Status",
    headerText: "Status",
    width: "130",
    format: "yMd",
    textAlign: "Center",
    template: customerGridStatus,
  },
  {
    field: "Weeks",
    headerText: "Weeks",
    width: "100",
    format: "C2",
    textAlign: "Center",
  },
  {
    field: "Budget",
    headerText: "Budget",
    width: "100",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "Location",
    headerText: "Location",
    width: "150",
    textAlign: "Center",
  },

  {
    field: "id",
    headerText: "Customer ID",
    width: "120",
    textAlign: "Center",
    isPrimaryKey: true,
  },
];

export const employeesGrid = [
  {
    headerText: "Employee",
    width: "150",
    template: gridEmployeeProfile,
    textAlign: "Center",
  },
  { field: "Name", headerText: "", width: "0", textAlign: "Center" },
  {
    field: "Title",
    headerText: "Designation",
    width: "170",
    textAlign: "Center",
  },
  {
    headerText: "Country",
    width: "120",
    textAlign: "Center",
    template: gridEmployeeCountry,
  },

  {
    field: "HireDate",
    headerText: "Hire Date",
    width: "135",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "ReportsTo",
    headerText: "Reports To",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "id",
    headerText: "Employee ID",
    width: "125",
    textAlign: "Center",
  },
];

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "ecommerce",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "orders",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "employees",
        icon: <IoMdContacts />,
      },
      {
        name: "customers",
        icon: <RiContactsLine />,
      },
      {
        name: "products",
        icon: <MdOutlineProductionQuantityLimits />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "kanban",
        icon: <BsKanban />,
      },
      {
        name: "color-picker",
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock />,
      },
      {
        name: "area",
        icon: <AiOutlineAreaChart />,
      },

      {
        name: "bar",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "pie",
        icon: <FiPieChart />,
      },

      {
        name: "color-mapping",
        icon: <BsBarChart />,
      },
    ],
  },
];

export const cartData = [
  {
    image: "Images/product5.jpg",
    name: "butterscotch ice-cream",
    category: "Milk product",
    price: "250",
  },
  {
    image: "Images/product6.jpg",
    name: "Supreme fresh tomato",
    category: "Vegetable Item",
    price: "450",
  },
  {
    image: "Images/product7.jpg",
    name: "Red color candy",
    category: "Food Item",
    price: "190",
  },
];

export const chatData = [
  {
    image: "Images/avatar2.jpg",
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: "Images/avatar3.png",
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: "Images/avatar4.jpg",
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: "Images/avatar.jpg",
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "39,354",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,396",
    percentage: "+23%",
    title: "Products",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
  {
    icon: <FiBarChart />,
    amount: "423,39",
    percentage: "+38%",
    title: "Sales",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",
  },
  {
    icon: <HiOutlineRefresh />,
    amount: "39,354",
    percentage: "-12%",
    title: "Refunds",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: "+350",
    title: "Paypal Transfer",
    desc: "Money Added",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "green-600",
  },
  {
    icon: <BsShield />,
    amount: "-560",
    desc: "Bill Payment",
    title: "Wallet",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
  {
    icon: <FiCreditCard />,
    amount: "+350",
    title: "Credit Card",
    desc: "Money reversed",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",

    pcColor: "green-600",
  },
  {
    icon: <TiTick />,
    amount: "+350",
    title: "Bank Transfer",
    desc: "Money Added",

    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",
    pcColor: "green-600",
  },
  {
    icon: <BsCurrencyDollar />,
    amount: "-50",
    percentage: "+38%",
    title: "Refund",
    desc: "Payment Sent",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: "-560",
    title: "Top Sales",
    desc: "Johnathan Doe",
    iconBg: "#FB9678",
    pcColor: "red-600",
  },
  {
    icon: <FiStar />,
    amount: "-560",
    title: "Best Seller",
    desc: "MaterialPro Admin",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "red-600",
  },
  {
    icon: <BsChatLeft />,
    amount: "+560",
    title: "Most Commented",
    desc: "Ample Admin",
    iconBg: "#00C292",
    pcColor: "green-600",
  },
];

export const productsPerformance = [
  {
    image: "Images/product5.jpg",
    title: "Is it good butterscotch ice-cream?",
    desc: "Ice-Cream, Milk, Powder",
    rating: "Good",
    itemSold: "65%",
    earningAmount: "546,000",
  },
  {
    image: "Images/product6.jpg",
    title: "Supreme fresh tomato available",
    desc: "Market, Mall",
    rating: "Excellent",
    itemSold: "98%",
    earningAmount: "780,000",
  },
  {
    image: "Images/product7.jpg",
    title: "Red color candy from Gucci",
    desc: "Chocolate, Yummy",
    rating: "Average",
    itemSold: "46%",
    earningAmount: "457,000",
  },
  {
    image: "Images/product4.jpg",
    title: "Stylish night lamp for night",
    desc: "Electric, Wire, Current",
    rating: "Poor",
    itemSold: "23%",
    earningAmount: "123,000",
  },
];

export const medicalproBranding = {
  data: [
    {
      title: "Due Date",
      desc: "Oct 23, 2021",
    },
    {
      title: "Budget",
      desc: "98,500",
    },
    {
      title: "Expense",
      desc: "63,000",
    },
  ],
  teams: [
    {
      name: "Bootstrap",
      color: "orange",
    },
    {
      name: "Angular",
      color: "#FB9678",
    },
  ],
  leaders: [
    {
      image: "Images/avatar2.jpg",
    },
    {
      image: "Images/avatar3.png",
    },
    {
      image: "Images/avatar2.jpg",
    },
    {
      image: "Images/avatar4.jpg",
    },
    {
      image: "Images/avatar.jpg",
    },
  ],
};

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];

export const ordersGrid = [
  {
    headerText: "Image",
    template: gridOrderImage,
    textAlign: "Center",
    width: "120",
  },
  {
    field: "OrderItems",
    headerText: "Item",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "CustomerName",
    headerText: "Customer Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "TotalAmount",
    headerText: "Total Amount",
    format: "C2",
    textAlign: "Center",
    editType: "numericedit",
    width: "150",
  },
  {
    headerText: "Status",
    template: gridOrderStatus,
    field: "OrderItems",
    textAlign: "Center",
    width: "120",
  },
  {
    field: "OrderID",
    headerText: "Order ID",
    width: "120",
    textAlign: "Center",
  },

  {
    field: "Location",
    headerText: "Location",
    width: "150",
    textAlign: "Center",
  },
];

export const customersData = [
  {
    id: 1001,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: "Images/avatar2.jpg",
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "2.4k",
    Location: "India",
  },
  {
    id: 1002,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: "Images/avatar3.png",

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "3.9k",
    Location: "India",
  },
  {
    id: 1003,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: "Images/avatar4.jpg",
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "24.5k",
    Location: "USA",
  },
  {
    id: 1004,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: "Images/avatar.jpg",
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1005,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: "Images/avatar2.jpg",
    StatusBg: "red",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1006,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: "Images/avatar2.jpg",
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "2.4k",
    Location: "India",
  },
  {
    id: 1007,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: "Images/avatar3.png",

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "3.9k",
    Location: "India",
  },
  {
    id: 1008,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: "Images/avatar4.jpg",
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "24.5k",
    Location: "USA",
  },
  {
    id: 1009,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: "Images/avatar.jpg",
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1010,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: "Images/avatar2.jpg",
    StatusBg: "red",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1011,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: "Images/avatar2.jpg",
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "2.4k",
    Location: "India",
  },
  {
    id: 1012,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: "Images/avatar3.png",

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "3.9k",
    Location: "India",
  },
  {
    id: 1013,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: "Images/avatar4.jpg",
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "24.5k",
    Location: "USA",
  },
  {
    id: 1014,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: "Images/avatar.jpg",
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1015,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: "Images/avatar2.jpg",
    StatusBg: "red",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1016,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: "Images/avatar2.jpg",
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "2.4k",
    Location: "India",
  },
  {
    id: 1017,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: "Images/avatar3.png",

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "3.9k",
    Location: "India",
  },
  {
    id: 1018,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: "Images/avatar4.jpg",
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "24.5k",
    Location: "USA",
  },
  {
    id: 1019,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: "Images/avatar.jpg",
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1020,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: "Images/avatar2.jpg",
    StatusBg: "red",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1021,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: "Images/avatar2.jpg",
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "2.4k",
    Location: "India",
  },
  {
    id: 1022,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: "Images/avatar3.png",

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "3.9k",
    Location: "India",
  },
  {
    id: 1023,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: "Images/avatar4.jpg",
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "24.5k",
    Location: "USA",
  },
  {
    id: 1024,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: "Images/avatar.jpg",
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1025,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: "Images/avatar2.jpg",
    StatusBg: "red",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1026,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: "Images/avatar2.jpg",
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "2.4k",
    Location: "India",
  },
  {
    id: 1027,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: "Images/avatar3.png",

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "3.9k",
    Location: "India",
  },
  {
    id: 1028,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: "Images/avatar4.jpg",
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "24.5k",
    Location: "USA",
  },
  {
    id: 1029,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: "Images/avatar.jpg",
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1030,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: "Images/avatar2.jpg",
    StatusBg: "red",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1031,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: "Images/avatar2.jpg",
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "2.4k",
    Location: "India",
  },
  {
    id: 1032,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: "Images/avatar3.png",

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "3.9k",
    Location: "India",
  },
  {
    id: 1033,
    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: "Images/avatar4.jpg",
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "24.5k",
    Location: "USA",
  },
  {
    id: 1034,
    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: "Images/avatar.jpg",
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1035,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: "Images/avatar2.jpg",
    StatusBg: "red",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1036,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: "Images/avatar2.jpg",
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "2.4k",
    Location: "India",
  },
  {
    id: 1037,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: "Images/avatar3.png",

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "3.9k",
    Location: "India",
  },
  {
    id: 1038,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: "Images/avatar4.jpg",
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "24.5k",
    Location: "USA",
  },
  {
    id: 1039,
    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: "Images/avatar.jpg",
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
  {
    id: 1040,
    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: "Images/avatar2.jpg",
    StatusBg: "red",
    Weeks: "34",
    Budget: "16.5k",
    Location: "USA",
  },
];

export const employeesData = [
  {
    id: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar3.png",
  },
  {
    id: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar3.png",
  },
  {
    id: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar4.jpg",
  },
  {
    id: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar3.png",
  },
  {
    id: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar4.jpg",
  },
  {
    id: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar3.png",
  },
  {
    id: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar4.jpg",
  },
  {
    id: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar3.png",
  },
  {
    id: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar4.jpg",
  },
  {
    id: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar3.png",
  },
  {
    id: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar4.jpg",
  },
  {
    id: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar3.png",
  },
  {
    id: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar4.jpg",
  },
  {
    id: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar3.png",
  },
  {
    id: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar4.jpg",
  },
  {
    id: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar3.png",
  },
  {
    id: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar4.jpg",
  },
  {
    id: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar3.png",
  },
  {
    id: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar4.jpg",
  },
  {
    id: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
  {
    id: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar.jpg",
  },
  {
    id: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "Images/avatar2.jpg",
  },
];

export const ordersData = [
  {
    id: 110248,
    customerName: "Vinet",
    totalAmount: 32.38,
    orderItems: "Fresh Tomato",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    productImage: "Images/product6.jpg",
  },
  {
    id: 3456535,
    customerName: "Carson Darrin",
    totalAmount: 56.34,
    orderItems: "Butter Scotch",
    location: "Delhi",
    status: "complete",
    statusBg: "#8BE78B",
    productImage: "Images/product5.jpg",
  },
  {
    id: 3904574,
    customerName: "Fran Perez",
    totalAmount: 93.31,
    orderItems: "Candy Gucci",
    location: "New York",
    status: "active",
    statusBg: "#03C9D7",
    productImage: "Images/product7.jpg",
  },
  {
    id: 8934864,
    customerName: "Anika Viseer",
    totalAmount: 93.31,
    orderItems: "Night Lamp",
    location: "Germany",
    status: "canceled",
    statusBg: "#FF5C8E",
    productImage: "Images/product4.jpg",
  },
  {
    id: 7489754,
    customerName: "Miron Vitold",
    totalAmount: 23.99,
    orderItems: "Healthcare Erbology",
    location: "Spain",
    status: "rejected",
    statusBg: "red",
    productImage: "Images/product1.jpg",
  },
  {
    id: 947574,
    customerName: "Omar Darobe",
    totalAmount: 95.99,
    orderItems: "Makeup Lancome Rouge",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    productImage: "Images/product2.jpg",
  },
  {
    id: 9448954,
    customerName: "Lulia albu",
    totalAmount: 17.99,
    orderItems: "Skincare",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    productImage: "Images/product3.jpg",
  },
  {
    id: 8459556,
    customerName: "Penjani",
    totalAmount: 59.99,
    orderItems: "Headphone",
    location: "USA",
    status: "complete",
    statusBg: "#8BE78B",
    productImage: "Images/product4.jpg",
  },
  {
    id: 8459557,
    customerName: "Jie Yan",
    totalAmount: 87.99,
    orderItems: "Shoes",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    productImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    id: 8745346,
    customerName: "Danai",
    totalAmount: 122.99,
    orderItems: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 384892,
    customerName: "Miron",
    totalAmount: 87.99,
    orderItems: "Ice Cream",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    productImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    id: 245461,
    customerName: "Frank",
    totalAmount: 84.99,
    orderItems: "Pan Cake",
    location: "Delhi",
    status: "complete",
    statusBg: "#8BE78B",
    productImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    id: 8745347,
    customerName: "Danai",
    totalAmount: 122.99,
    orderItems: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 210248,
    customerName: "Vinet",

    totalAmount: 32.38,
    orderItems: "Fresh Tomato",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    productImage: "Images/product6.jpg",
  },
  {
    id: 3456531,
    customerName: "Carson Darrin",
    totalAmount: 56.34,
    orderItems: "Butter Scotch",
    location: "Delhi",
    status: "complete",
    statusBg: "#8BE78B",
    productImage: "Images/product5.jpg",
  },
  {
    id: 3904571,
    customerName: "Fran Perez",
    totalAmount: 93.31,
    orderItems: "Candy Gucci",
    location: "New York",
    status: "active",
    statusBg: "#03C9D7",
    productImage: "Images/product7.jpg",
  },
  {
    id: 8934861,
    customerName: "Anika Viseer",
    totalAmount: 93.31,
    orderItems: "Night Lamp",
    location: "Germany",
    status: "canceled",
    statusBg: "#FF5C8E",
    productImage: "Images/product4.jpg",
  },
  {
    id: 7489751,
    customerName: "Miron Vitold",
    totalAmount: 23.99,
    orderItems: "Healthcare Erbology",
    location: "Spain",
    status: "rejected",
    statusBg: "red",
    productImage: "Images/product1.jpg",
  },
  {
    id: 947571,
    customerName: "Omar Darobe",
    totalAmount: 95.99,
    orderItems: "Makeup Lancome Rouge",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    productImage: "Images/product2.jpg",
  },
  {
    id: 9448951,
    customerName: "Lulia albu",
    totalAmount: 17.99,
    orderItems: "Skincare",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    productImage: "Images/product3.jpg",
  },
  {
    id: 8459558,
    customerName: "Penjani",
    totalAmount: 59.99,
    orderItems: "Headphone",
    location: "USA",
    status: "complete",
    statusBg: "#8BE78B",
    productImage: "Images/product4.jpg",
  },
  {
    id: 8459559,
    customerName: "Jie Yan",
    totalAmount: 87.99,
    orderItems: "Shoes",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    productImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    id: 8745348,
    customerName: "Danai",
    totalAmount: 122.99,
    orderItems: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 384893,
    customerName: "Miron",
    totalAmount: 87.99,
    orderItems: "Ice Cream",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    productImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    id: 245462,
    customerName: "Frank",
    totalAmount: 84.99,
    orderItems: "Pan Cake",
    location: "Delhi",
    status: "complete",
    statusBg: "#8BE78B",
    productImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    id: 874534,
    customerName: "Danai",
    totalAmount: 122.99,
    orderItems: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 310248,
    customerName: "Vinet",

    totalAmount: 32.38,
    orderItems: "Fresh Tomato",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    productImage: "Images/product6.jpg",
  },
  {
    id: 3456533,
    customerName: "Carson Darrin",
    totalAmount: 56.34,
    orderItems: "Butter Scotch",
    location: "Delhi",
    status: "complete",
    statusBg: "#8BE78B",
    productImage: "Images/product5.jpg",
  },
  {
    id: 3904572,
    customerName: "Fran Perez",
    totalAmount: 93.31,
    orderItems: "Candy Gucci",
    location: "New York",
    status: "active",
    statusBg: "#03C9D7",
    productImage: "Images/product7.jpg",
  },
  {
    id: 8934862,
    customerName: "Anika Viseer",
    totalAmount: 93.31,
    orderItems: "Night Lamp",
    location: "Germany",
    status: "canceled",
    statusBg: "#FF5C8E",
    productImage: "Images/product4.jpg",
  },
  {
    id: 7489752,
    customerName: "Miron Vitold",
    totalAmount: 23.99,
    orderItems: "Healthcare Erbology",
    location: "Spain",
    status: "rejected",
    statusBg: "red",
    productImage: "Images/product1.jpg",
  },
  {
    id: 947572,
    customerName: "Omar Darobe",
    totalAmount: 95.99,
    orderItems: "Makeup Lancome Rouge",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    productImage: "Images/product2.jpg",
  },
  {
    id: 9448952,
    customerName: "Lulia albu",
    totalAmount: 17.99,
    orderItems: "Skincare",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    productImage: "Images/product3.jpg",
  },
  {
    id: 8459560,
    customerName: "Penjani",
    totalAmount: 59.99,
    orderItems: "Headphone",
    location: "USA",
    status: "complete",
    statusBg: "#8BE78B",
    productImage: "Images/product4.jpg",
  },
  {
    id: 8459561,
    customerName: "Jie Yan",
    totalAmount: 87.99,
    orderItems: "Shoes",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    productImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    id: 8745349,
    customerName: "Danai",
    totalAmount: 122.99,
    orderItems: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 384891,
    customerName: "Miron",
    totalAmount: 87.99,
    orderItems: "Ice Cream",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    productImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    id: 24546,
    customerName: "Frank",
    totalAmount: 84.99,
    orderItems: "Pan Cake",
    location: "Delhi",
    status: "complete",
    statusBg: "#8BE78B",
    productImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    id: 8745350,
    customerName: "Danai",
    totalAmount: 122.99,
    orderItems: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 410248,
    customerName: "Vinet",

    totalAmount: 32.38,
    orderItems: "Fresh Tomato",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    productImage: "Images/product6.jpg",
  },
  {
    id: 3456534,
    customerName: "Carson Darrin",
    totalAmount: 56.34,
    orderItems: "Butter Scotch",
    location: "Delhi",
    status: "complete",
    statusBg: "#8BE78B",
    productImage: "Images/product5.jpg",
  },
  {
    id: 3904573,
    customerName: "Fran Perez",
    totalAmount: 93.31,
    orderItems: "Candy Gucci",
    location: "New York",
    status: "active",
    statusBg: "#03C9D7",
    productImage: "Images/product7.jpg",
  },
  {
    id: 8934863,
    customerName: "Anika Viseer",
    totalAmount: 93.31,
    orderItems: "Night Lamp",
    location: "Germany",
    status: "canceled",
    statusBg: "#FF5C8E",
    productImage: "Images/product4.jpg",
  },
  {
    id: 7489753,
    customerName: "Miron Vitold",
    totalAmount: 23.99,
    orderItems: "Healthcare Erbology",
    location: "Spain",
    status: "rejected",
    statusBg: "red",
    productImage: "Images/product1.jpg",
  },
  {
    id: 947573,
    customerName: "Omar Darobe",
    totalAmount: 95.99,
    orderItems: "Makeup Lancome Rouge",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    productImage: "Images/product2.jpg",
  },
  {
    id: 9448953,
    customerName: "Lulia albu",
    totalAmount: 17.99,
    orderItems: "Skincare",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    productImage: "Images/product3.jpg",
  },
  {
    id: 8459562,
    customerName: "Penjani",
    totalAmount: 59.99,
    orderItems: "Headphone",
    location: "USA",
    status: "complete",
    statusBg: "#8BE78B",
    productImage: "Images/product4.jpg",
  },
];
export const orderColumns = [
  {
    field: "productImage",
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
    field: "orderItems",
    headerName: "Items",
    flex: 1,
  },
  {
    field: "customerName",
    headerName: "Customer Name",
    flex: 1,
  },
  {
    field: "totalAmount",
    headerName: "Total Amount",
    type: "number",
    headerAlign: "left",
    align: "left",
    flex: 1,
  },

  {
    field: "status",
    headerName: "Status",
    type: "singleSelect",
    flex: 1,
    headerAlign: "center",
    align: "center",
    editable: true,
    valueOptions: ["complete", "active", "rejected", "canceled", "pending"],
    renderCell: (params) => (
      <h3
        className={`rounded-2xl text-center text-white p-1 w-[5rem] cursor-pointer ${
          params.value === "complete"
            ? "bg-[#8BE78B]"
            : params.value === "active"
            ? "bg-[#03C9D7]"
            : params.value === "rejected"
            ? "bg-red-500"
            : params.value === "pending"
            ? "bg-[#FB9678]"
            : "bg-[#FF5C8E]"
        }`}
      >
        {params.value}
      </h3>
    ), // renderCell will render the component
  },
  {
    field: "location",
    headerName: "Location",
    flex: 1,
  },
  { field: "id", headerName: "Order ID", flex: 1 },
];
export const productsData = [
  {
    id: 110248,
    totalAmount: 32.38,
    productName: "Fresh Tomato",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product6.jpg",
  },
  {
    id: 3456535,
    totalAmount: 56.34,
    productName: "Butter Scotch",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product5.jpg",
  },
  {
    id: 3904574,
    totalAmount: 93.31,
    productName: "Candy Gucci",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product7.jpg",
  },
  {
    id: 8934864,
    totalAmount: 93.31,
    productName: "Night Lamp",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product4.jpg",
  },
  {
    id: 7489754,
    totalAmount: 23.99,
    productName: "Healthcare Erbology",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product1.jpg",
  },
  {
    id: 947574,
    totalAmount: 95.99,
    productName: "Makeup Lancome Rouge",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product2.jpg",
  },
  {
    id: 9448954,
    totalAmount: 17.99,
    productName: "Skincare",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product3.jpg",
  },
  {
    id: 8459556,
    totalAmount: 59.99,
    productName: "Headphone",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product4.jpg",
  },
  {
    id: 8459557,
    totalAmount: 87.99,
    productName: "Shoes",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    id: 8745346,
    totalAmount: 122.99,
    productName: "Watch",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 384892,
    totalAmount: 87.99,
    productName: "Ice Cream",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    id: 245461,
    totalAmount: 84.99,
    productName: "Pan Cake",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    id: 8745347,
    totalAmount: 122.99,
    productName: "Watch",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 210248,

    totalAmount: 32.38,
    productName: "Fresh Tomato",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product6.jpg",
  },
  {
    id: 3456531,
    totalAmount: 56.34,
    productName: "Butter Scotch",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product5.jpg",
  },
  {
    id: 3904571,
    totalAmount: 93.31,
    productName: "Candy Gucci",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product7.jpg",
  },
  {
    id: 8934861,
    totalAmount: 93.31,
    productName: "Night Lamp",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product4.jpg",
  },
  {
    id: 7489751,
    totalAmount: 23.99,
    productName: "Healthcare Erbology",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product1.jpg",
  },
  {
    id: 947571,
    totalAmount: 95.99,
    productName: "Makeup Lancome Rouge",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product2.jpg",
  },
  {
    id: 9448951,
    totalAmount: 17.99,
    productName: "Skincare",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product3.jpg",
  },
  {
    id: 8459558,
    totalAmount: 59.99,
    productName: "Headphone",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product4.jpg",
  },
  {
    id: 8459559,
    totalAmount: 87.99,
    productName: "Shoes",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    id: 8745348,
    totalAmount: 122.99,
    productName: "Watch",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 384893,
    totalAmount: 87.99,
    productName: "Ice Cream",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    id: 245462,
    totalAmount: 84.99,
    productName: "Pan Cake",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    id: 874534,
    totalAmount: 122.99,
    productName: "Watch",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 310248,

    totalAmount: 32.38,
    productName: "Fresh Tomato",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product6.jpg",
  },
  {
    id: 3456533,
    totalAmount: 56.34,
    productName: "Butter Scotch",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product5.jpg",
  },
  {
    id: 3904572,
    totalAmount: 93.31,
    productName: "Candy Gucci",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product7.jpg",
  },
  {
    id: 8934862,
    totalAmount: 93.31,
    productName: "Night Lamp",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product4.jpg",
  },
  {
    id: 7489752,
    totalAmount: 23.99,
    productName: "Healthcare Erbology",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product1.jpg",
  },
  {
    id: 947572,
    totalAmount: 95.99,
    productName: "Makeup Lancome Rouge",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product2.jpg",
  },
  {
    id: 9448952,
    totalAmount: 17.99,
    productName: "Skincare",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product3.jpg",
  },
  {
    id: 8459560,
    totalAmount: 59.99,
    productName: "Headphone",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product4.jpg",
  },
  {
    id: 8459561,
    totalAmount: 87.99,
    productName: "Shoes",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    id: 8745349,
    totalAmount: 122.99,
    productName: "Watch",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 384891,
    totalAmount: 87.99,
    productName: "Ice Cream",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    id: 24546,
    totalAmount: 84.99,
    productName: "Pan Cake",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    id: 8745350,
    totalAmount: 122.99,
    productName: "Watch",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 410248,
    totalAmount: 32.38,
    productName: "Fresh Tomato",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product6.jpg",
  },
  {
    id: 3456534,
    totalAmount: 56.34,
    productName: "Butter Scotch",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product5.jpg",
  },
  {
    id: 3904573,
    totalAmount: 93.31,
    productName: "Candy Gucci",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product7.jpg",
  },
  {
    id: 8934863,
    totalAmount: 93.31,
    productName: "Night Lamp",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product4.jpg",
  },
  {
    id: 7489753,
    totalAmount: 23.99,
    productName: "Healthcare Erbology",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product1.jpg",
  },
  {
    id: 947573,
    totalAmount: 95.99,
    productName: "Makeup Lancome Rouge",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product2.jpg",
  },
  {
    id: 9448953,
    totalAmount: 17.99,
    productName: "Skincare",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product3.jpg",
  },
  {
    id: 8459562,
    totalAmount: 59.99,
    productName: "Headphone",
    price: "50",
    category: "categoryName",
    description:
      "Product Description Product Description Product Description Product Description Product Description Product Description Product Product Description Description iption",
    productImage: "Images/product4.jpg",
  },
];
export const productsColumns = [
  {
    field: "productImage",
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
    field: "productName",
    headerName: "Items",
    flex: 1,
  },
  {
    field: "price",
    headerName: "Price",
    flex: 1,
  },
  {
    field: "totalAmount",
    headerName: "Total Amount",
    type: "number",
    headerAlign: "left",
    align: "left",
    flex: 1,
  },

  { field: "id", headerName: "Product ID", flex: 1 },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: "Explosion of Betelgeuse Star",
    Location: "Space Center USA",
    StartTime: "2021-01-10T04:00:00.000Z",
    EndTime: "2021-01-10T05:30:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 2,
    Subject: "Thule Air Crash Report",
    Location: "Newyork City",
    StartTime: "2021-01-11T06:30:00.000Z",
    EndTime: "2021-01-11T08:30:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 3,
    Subject: "Blue Moon Eclipse",
    Location: "Space Center USA",
    StartTime: "2021-01-12T04:00:00.000Z",
    EndTime: "2021-01-12T05:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 4,
    Subject: "Meteor Showers in 2021",
    Location: "Space Center USA",
    StartTime: "2021-01-13T07:30:00.000Z",
    EndTime: "2021-01-13T09:00:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 5,
    Subject: "Milky Way as Melting pot",
    Location: "Space Center USA",
    StartTime: "2021-01-14T06:30:00.000Z",
    EndTime: "2021-01-14T08:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 6,
    Subject: "Mysteries of Bermuda Triangle",
    Location: "Bermuda",
    StartTime: "2021-01-14T04:00:00.000Z",
    EndTime: "2021-01-14T05:30:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 7,
    Subject: "Glaciers and Snowflakes",
    Location: "Himalayas",
    StartTime: "2021-01-15T05:30:00.000Z",
    EndTime: "2021-01-15T07:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 8,
    Subject: "Life on Mars",
    Location: "Space Center USA",
    StartTime: "2021-01-16T03:30:00.000Z",
    EndTime: "2021-01-16T04:30:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 9,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-18T05:30:00.000Z",
    EndTime: "2021-01-18T07:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 10,
    Subject: "Wildlife Galleries",
    Location: "Africa",
    StartTime: "2021-01-20T05:30:00.000Z",
    EndTime: "2021-01-20T07:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 11,
    Subject: "Best Photography 2021",
    Location: "London",
    StartTime: "2021-01-21T04:00:00.000Z",
    EndTime: "2021-01-21T05:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 12,
    Subject: "Smarter Puppies",
    Location: "Sweden",
    StartTime: "2021-01-08T04:30:00.000Z",
    EndTime: "2021-01-08T06:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 13,
    Subject: "Myths of Andromeda Galaxy",
    Location: "Space Center USA",
    StartTime: "2021-01-06T05:00:00.000Z",
    EndTime: "2021-01-06T07:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 14,
    Subject: "Aliens vs Humans",
    Location: "Research Center of USA",
    StartTime: "2021-01-05T04:30:00.000Z",
    EndTime: "2021-01-05T06:00:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 15,
    Subject: "Facts of Humming Birds",
    Location: "California",
    StartTime: "2021-01-19T04:00:00.000Z",
    EndTime: "2021-01-19T05:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 16,
    Subject: "Sky Gazers",
    Location: "Alaska",
    StartTime: "2021-01-22T05:30:00.000Z",
    EndTime: "2021-01-22T07:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 17,
    Subject: "The Cycle of Seasons",
    Location: "Research Center of USA",
    StartTime: "2021-01-11T00:00:00.000Z",
    EndTime: "2021-01-11T02:00:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 18,
    Subject: "Space Galaxies and Planets",
    Location: "Space Center USA",
    StartTime: "2021-01-11T11:30:00.000Z",
    EndTime: "2021-01-11T13:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 19,
    Subject: "Lifecycle of Bumblebee",
    Location: "San Fransisco",
    StartTime: "2021-01-14T00:30:00.000Z",
    EndTime: "2021-01-14T02:00:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 20,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-14T10:30:00.000Z",
    EndTime: "2021-01-14T12:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 21,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-10T08:30:00.000Z",
    EndTime: "2021-01-10T10:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 22,
    Subject: "The Cycle of Seasons",
    Location: "Research Center of USA",
    StartTime: "2021-01-12T09:00:00.000Z",
    EndTime: "2021-01-12T10:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 23,
    Subject: "Sky Gazers",
    Location: "Greenland",
    StartTime: "2021-01-15T09:00:00.000Z",
    EndTime: "2021-01-15T10:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 24,
    Subject: "Facts of Humming Birds",
    Location: "California",
    StartTime: "2021-01-16T07:00:00.000Z",
    EndTime: "2021-01-16T09:00:00.000Z",
    CategoryColor: "#7fa900",
  },
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];
export const dropdownData = [
  {
    Id: "1",
    Time: "March 2021",
  },
  {
    Id: "2",
    Time: "April 2021",
  },
  {
    Id: "3",
    Time: "May 2021",
  },
];
export const SparklineAreaData = [
  {
    id: "Profit",
    data: [
      {
        x: "Jan",
        y: 60,
      },
      {
        x: "Feb",
        y: 28,
      },
      {
        x: "Mar",
        y: 55,
      },
      {
        x: "Apr",
        y: 40,
      },
      {
        x: "May",
        y: 76,
      },
      {
        x: "Jun",
        y: 34,
      },
    ],
  },
];

export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: "x",
    yName: "y",
    name: "Germany",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[1],
    xName: "x",
    yName: "y",
    name: "England",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[2],
    xName: "x",
    yName: "y",
    name: "India",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },
];

export const pieChartData = [
  { x: "Labour", y: 18, text: "18%" },
  { x: "Legal", y: 8, text: "8%" },
  { x: "Production", y: 15, text: "15%" },
  { x: "License", y: 11, text: "11%" },
  { x: "Facilities", y: 18, text: "18%" },
  { x: "Taxes", y: 14, text: "14%" },
  { x: "Insurance", y: 16, text: "16%" },
];

export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];

export const ecomPieChartData = [
  { x: "2018", y: 18, text: "35%" },
  { x: "2019", y: 18, text: "15%" },
  { x: "2020", y: 18, text: "25%" },
  { x: "2021", y: 18, text: "25%" },
];

export const stackedChartData = [
  {
    country: "AD",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const kanbanData = [
  {
    id: "Task 1",
    Title: "Task - 29001",
    Status: "Open",
    Summary: "Analyze the new requirements gathered from the customer.",
    Type: "Story",
    Priority: "Low",
    Tags: "Analyze,Customer",
    Estimate: 3.5,
    Assignee: "Nancy Davloio",
    RankId: 1,
    Color: "#02897B",
    ClassName: "e-story, e-low, e-nancy-davloio",
  },
  {
    id: "Task 2",
    Title: "Task - 29002",
    Status: "In Progress",
    Summary: "Improve application performance",
    Type: "Improvement",
    Priority: "Normal",
    Tags: "Improvement",
    Estimate: 6,
    Assignee: "Andrew Fuller",
    RankId: 1,
    Color: "#673AB8",
    ClassName: "e-improvement, e-normal, e-andrew-fuller",
  },
  {
    id: "Task 3",
    Title: "Task - 29003",
    Status: "Open",
    Summary: "Arrange a web meeting with the customer to get new requirements.",
    Type: "Others",
    Priority: "Critical",
    Tags: "Meeting",
    Estimate: 5.5,
    Assignee: "Janet Leverling",
    RankId: 2,
    Color: "#1F88E5",
    ClassName: "e-others, e-critical, e-janet-leverling",
  },
  {
    id: "Task 4",
    Title: "Task - 29004",
    Status: "In Progress",
    Summary: "Fix the issues reported in the IE browser.",
    Type: "Bug",
    Priority: "Critical",
    Tags: "IE",
    Estimate: 2.5,
    Assignee: "Janet Leverling",
    RankId: 2,
    Color: "#E64A19",
    ClassName: "e-bug, e-release, e-janet-leverling",
  },
  {
    id: "Task 5",
    Title: "Task - 29005",
    Status: "Review",
    Summary: "Fix the issues reported by the customer.",
    Type: "Bug",
    Priority: "Low",
    Tags: "Customer",
    Estimate: "3.5",
    Assignee: "Steven walker",
    RankId: 1,
    Color: "#E64A19",
    ClassName: "e-bug, e-low, e-steven-walker",
  },
  {
    id: "Task 6",
    Title: "Task - 29007",
    Status: "Validate",
    Summary: "Validate new requirements",
    Type: "Improvement",
    Priority: "Low",
    Tags: "Validation",
    Estimate: 1.5,
    Assignee: "Robert King",
    RankId: 1,
    Color: "#673AB8",
    ClassName: "e-improvement, e-low, e-robert-king",
  },
  {
    id: "Task 7",
    Title: "Task - 29009",
    Status: "Review",
    Summary: "Fix the issues reported in Safari browser.",
    Type: "Bug",
    Priority: "Critical",
    Tags: "Fix,Safari",
    Estimate: 1.5,
    Assignee: "Nancy Davloio",
    RankId: 2,
    Color: "#E64A19",
    ClassName: "e-bug, e-release, e-nancy-davloio",
  },
  {
    id: "Task 8",
    Title: "Task - 29010",
    Status: "Close",
    Summary: "Test the application in the IE browser.",
    Type: "Story",
    Priority: "Low",
    Tags: "Review,IE",
    Estimate: 5.5,
    Assignee: "Margaret hamilt",
    RankId: 3,
    Color: "#02897B",
    ClassName: "e-story, e-low, e-margaret-hamilt",
  },
  {
    id: "Task 9",
    Title: "Task - 29011",
    Status: "Validate",
    Summary: "Validate the issues reported by the customer.",
    Type: "Story",
    Priority: "High",
    Tags: "Validation,Fix",
    Estimate: 1,
    Assignee: "Steven walker",
    RankId: 1,
    Color: "#02897B",
    ClassName: "e-story, e-high, e-steven-walker",
  },
  {
    id: "Task 10",
    Title: "Task - 29015",
    Status: "Open",
    Summary: "Show the retrieved data from the server in grid control.",
    Type: "Story",
    Priority: "High",
    Tags: "Database,SQL",
    Estimate: 5.5,
    Assignee: "Margaret hamilt",
    RankId: 4,
    Color: "#02897B",
    ClassName: "e-story, e-high, e-margaret-hamilt",
  },
  {
    id: "Task 11",
    Title: "Task - 29016",
    Status: "In Progress",
    Summary: "Fix cannot open user’s default database SQL error.",
    Priority: "Critical",
    Type: "Bug",
    Tags: "Database,Sql2008",
    Estimate: 2.5,
    Assignee: "Janet Leverling",
    RankId: 4,
    Color: "#E64A19",
    ClassName: "e-bug, e-critical, e-janet-leverling",
  },
  {
    id: "Task 12",
    Title: "Task - 29017",
    Status: "Review",
    Summary: "Fix the issues reported in data binding.",
    Type: "Story",
    Priority: "Normal",
    Tags: "Databinding",
    Estimate: "3.5",
    Assignee: "Janet Leverling",
    RankId: 4,
    Color: "#02897B",
    ClassName: "e-story, e-normal, e-janet-leverling",
  },
  {
    id: "Task 13",
    Title: "Task - 29018",
    Status: "Close",
    Summary: "Analyze SQL server 2008 connection.",
    Type: "Story",
    Priority: "Critical",
    Tags: "Grid,Sql",
    Estimate: 2,
    Assignee: "Andrew Fuller",
    RankId: 4,
    Color: "#02897B",
    ClassName: "e-story, e-release, e-andrew-fuller",
  },
  {
    id: "Task 14",
    Title: "Task - 29019",
    Status: "Validate",
    Summary: "Validate databinding issues.",
    Type: "Story",
    Priority: "Low",
    Tags: "Validation",
    Estimate: 1.5,
    Assignee: "Margaret hamilt",
    RankId: 1,
    Color: "#02897B",
    ClassName: "e-story, e-low, e-margaret-hamilt",
  },
  {
    id: "Task 15",
    Title: "Task - 29020",
    Status: "Close",
    Summary: "Analyze grid control.",
    Type: "Story",
    Priority: "High",
    Tags: "Analyze",
    Estimate: 2.5,
    Assignee: "Margaret hamilt",
    RankId: 5,
    Color: "#02897B",
    ClassName: "e-story, e-high, e-margaret-hamilt",
  },
  {
    id: "Task 16",
    Title: "Task - 29021",
    Status: "Close",
    Summary: "Stored procedure for initial data binding of the grid.",
    Type: "Others",
    Priority: "Critical",
    Tags: "Databinding",
    Estimate: 1.5,
    Assignee: "Steven walker",
    RankId: 6,
    Color: "#1F88E5",
    ClassName: "e-others, e-release, e-steven-walker",
  },
  {
    id: "Task 17",
    Title: "Task - 29022",
    Status: "Close",
    Summary: "Analyze stored procedures.",
    Type: "Story",
    Priority: "Critical",
    Tags: "Procedures",
    Estimate: 5.5,
    Assignee: "Janet Leverling",
    RankId: 7,
    Color: "#02897B",
    ClassName: "e-story, e-release, e-janet-leverling",
  },
  {
    id: "Task 18",
    Title: "Task - 29023",
    Status: "Validate",
    Summary: "Validate editing issues.",
    Type: "Story",
    Priority: "Critical",
    Tags: "Editing",
    Estimate: 1,
    Assignee: "Nancy Davloio",
    RankId: 1,
    Color: "#02897B",
    ClassName: "e-story, e-critical, e-nancy-davloio",
  },
  {
    id: "Task 19",
    Title: "Task - 29024",
    Status: "Review",
    Summary: "Test editing functionality.",
    Type: "Story",
    Priority: "Normal",
    Tags: "Editing,Test",
    Estimate: 0.5,
    Assignee: "Nancy Davloio",
    RankId: 5,
    Color: "#02897B",
    ClassName: "e-story, e-normal, e-nancy-davloio",
  },
  {
    id: "Task 20",
    Title: "Task - 29025",
    Status: "Open",
    Summary: "Enhance editing functionality.",
    Type: "Improvement",
    Priority: "Low",
    Tags: "Editing",
    Estimate: 3.5,
    Assignee: "Andrew Fuller",
    RankId: 5,
    Color: "#673AB8",
    ClassName: "e-improvement, e-low, e-andrew-fuller",
  },
  {
    id: "Task 21",
    Title: "Task - 29026",
    Status: "In Progress",
    Summary: "Improve the performance of the editing functionality.",
    Type: "Epic",
    Priority: "High",
    Tags: "Performance",
    Estimate: 6,
    Assignee: "Nancy Davloio",
    RankId: 5,
    Color: "#e91e64",
    ClassName: "e-epic, e-high, e-nancy-davloio",
  },
  {
    id: "Task 22",
    Title: "Task - 29027",
    Status: "Open",
    Summary: "Arrange web meeting with the customer to show editing demo.",
    Type: "Others",
    Priority: "High",
    Tags: "Meeting,Editing",
    Estimate: 5.5,
    Assignee: "Steven walker",
    RankId: 6,
    Color: "#1F88E5",
    ClassName: "e-others, e-high, e-steven-walker",
  },
  {
    id: "Task 23",
    Title: "Task - 29029",
    Status: "Review",
    Summary: "Fix the editing issues reported by the customer.",
    Type: "Bug",
    Priority: "Low",
    Tags: "Editing,Fix",
    Estimate: "3.5",
    Assignee: "Janet Leverling",
    RankId: 6,
    Color: "#E64A19",
    ClassName: "e-bug, e-low, e-janet-leverling",
  },
  {
    id: "Task 24",
    Title: "Task - 29030",
    Status: "Testing",
    Summary: "Fix the issues reported by the customer.",
    Type: "Bug",
    Priority: "Critical",
    Tags: "Customer",
    Estimate: "3.5",
    Assignee: "Steven walker",
    RankId: 1,
    Color: "#E64A19",
    ClassName: "e-bug, e-critical, e-steven-walker",
  },
  {
    id: "Task 25",
    Title: "Task - 29031",
    Status: "Testing",
    Summary: "Fix the issues reported in Safari browser.",
    Type: "Bug",
    Priority: "Critical",
    Tags: "Fix,Safari",
    Estimate: 1.5,
    Assignee: "Nancy Davloio",
    RankId: 2,
    Color: "#E64A19",
    ClassName: "e-bug, e-release, e-nancy-davloio",
  },
];
export const kanbanGrid = {
  Open: {
    headerText: "To Do",
    keyField: "Open",
    items: kanbanData.filter((item) => item.Status === "Open"),
  },

  InProgress: {
    headerText: "In Progress",
    keyField: "In Progress",
    items: kanbanData.filter((item) => item.Status === "In Progress"),
  },

  Testing: {
    headerText: "Testing",
    keyField: "Testing",
    items: kanbanData.filter((item) => item.Status === "Testing"),
    isExpanded: false,
  },

  Close: {
    headerText: "Done",
    keyField: "Close",
    items: kanbanData.filter((item) => item.Status === "Close"),
  },
};

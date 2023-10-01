import React from "react";
import {
  SparklineAreaData,
  earningData,
  stackedChartData,
} from "../Data/dummy";
import { GoPrimitiveDot } from "react-icons/go";
import SparkLine from "../Components/Charts/SparkLine";
import Stacked from "../Components/Charts/Stacked";
import { useStateContext } from "../Context/ContextProvider";

const Ecommerce = () => {
  const { mainColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-hero-pattern bg-no-repeat bg-contain h-44 bg-top
        bg-white dark:bg-secondary-dark-bg  
        dark:text-gray-200 w-full lg:w-[80%] p-8 pt-9 m-3 rounded-lg"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$6,457.86</p>
            </div>
          </div>
          <div className="mt-6">
            <button
              style={{ backgroundColor: mainColor }}
              className="font-md text-[white] rounded-[10px] p-2 hover:drop-shadow-xl"
            >
              Download
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-1 m-3">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
              md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                className="text-2xl rounded-full p-4 hover:drop-shadow-lg"
                style={{
                  backgroundColor: `${item.iconBg}`,
                  color: `${item.iconColor}`,
                }}
              >
                {item.icon}
              </button>
              <p className="mt-3 text-lg font-semibold">
                <span>{item.amount}</span>
                <span
                  className={`text-sm font-normal ml-2 
                  ${
                    item.percentage[0] == "-"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm mt-1 text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-[80%] w-full">
          <div className="flex justify-between items-center flex-wrap">
            <h2 className="font-semibold md:text-xl text-l">Revenue Updates</h2>
            <div className="flex items-center gap-5">
              <p className="flex items-center gap-2">
                <GoPrimitiveDot />
                Expense
              </p>
              <p className="flex items-center gap-2 text-green-400">
                <GoPrimitiveDot />
                Budget
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10 gap-10 flex-wrap">
            <div className="border-r-1">
              <div>
                <p>
                  <span className="text-xl font-bold mt-3">$74.468</span>
                  <span
                    className="font-normal ml-2 rounded-full text-white bg-green-400
                    p-1.5 text-xs
                  "
                  >
                    23%
                  </span>
                </p>
                <p className="mt-1 text-gray-400 text-sm">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-xl font-bold mt-3">$35.653</span>
                </p>
                <p className="mt-1 text-gray-400 text-sm">Expense</p>
              </div>
              <div className="w-[250px] h-[100px] m-[1rem] ml-0">
                <SparkLine data={SparklineAreaData} />
              </div>
              <div>
                <button
                  className="font-md text-[white] rounded-[10px] p-2 hover:drop-shadow-xl mt-3"
                  style={{ backgroundColor: mainColor }}
                >
                  Download Report
                </button>
              </div>
            </div>
            <div className="h-[320px] w-full sm:w-[360px]">
              <Stacked data={stackedChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;

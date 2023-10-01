import React, { useState } from "react";
import { Link } from "react-router-dom";
import UploadImg from "../Components/UploadImg";

const AddProduct = () => {
  let [productName, setProductName] = useState("");
  let [productPrice, setProductprice] = useState("");
  let [productDescription, setProductDescription] = useState("");
  let [productAmount, setProductAmount] = useState("");
  let [productCategory, setProductCategory] = useState("");
  let [productImage, setProductImage] = useState("");
  return (
    <div className="m-2 md:m-10 p-5 md:p-10 mt-14 pt-8 bg-white rounded-3xl">
      <Link
        className="mb-4 text-red-500 block border-b-1 border-red-500 w-[5rem]"
        to={-1}
      >
        {"<---Back"}
      </Link>
      <div className="mb-7 flex float-right">
        <button
          className="w-[7rem] h-[2rem] text-white rounded-xl bg-green-400 
            hover:bg-green-300 "
        >
          Add
        </button>
      </div>
      <div className="flex items-start justify-center gap-10 flex-wrap ">
        <div className="">
          <UploadImg />
        </div>
        <div className="mt-1 w-[50%]">
          <h2 className="font-bold text-xl">
            <input
              onChange={(e) => setProductName(e.target.value)}
              className="text-green-600 placeholder:text-[1rem] placeholder:font-normal 
              placeholder:text-gray-400 w-[fit-content] ml-1 pt-1 outline-none border-b-1 border-gray-400"
              value={productName}
              placeholder="Product name"
            />
          </h2>
          <textarea
            className="text-gray-400 text-sm mt-2 leading-6 w-full
             ml-1 pt-1 outline-none border-b-1 border-gray-400"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Product description"
          />
          <p className="mt-3 font-bold">
            Price: $
            <input
              type="number"
              onChange={(e) => setProductprice(e.target.value)}
              className="text-green-600 placeholder:text-[1rem] placeholder:font-normal 
              placeholder:text-gray-400 w-[fit-content] ml-1 pt-1 outline-none border-b-1 border-gray-400 align-text-bottom"
              value={productPrice}
              placeholder="Product price"
            />
          </p>
          <p className="mt-3 font-bold">
            Category:{" "}
            <input
              type="text"
              onChange={(e) => setProductCategory(e.target.value)}
              className="text-green-600 placeholder:text-[1rem] placeholder:font-normal 
              placeholder:text-gray-400 w-[fit-content] ml-1 pt-1 outline-none border-b-1 border-gray-400 align-text-bottom"
              value={productCategory}
              placeholder="Product Category"
            />
          </p>
          <p className="mt-3 font-bold">
            Amount:{" "}
            <input
              type="number"
              onChange={(e) => setProductAmount(e.target.value)}
              className="text-green-600 placeholder:text-[1rem] placeholder:font-normal 
              placeholder:text-gray-400 w-[fit-content] ml-1 pt-1 outline-none border-b-1 border-gray-400 align-text-bottom"
              value={productAmount}
              placeholder="Product amount"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AddPage = () => {
  const [name, setAddName] = useState("");
  const [price, setAddPrice] = useState(0);
  const [quantity, setAddQuantity] = useState(0);
  const router = useRouter();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !quantity) {
      setError("please complete all edit data");
      return;
    }
    try {
      const res = await axios.post(
        `https://cpall-sever-test.onrender.com/add`,
        {
          name: name,
          price: price,
          quantity: quantity,
        }
      );
      if (res) {
        setError("");

        console.log("add successfull");
        router.push("/");
      } else {
        console.log("add fail");
      }
    } catch (error) {
      console.log("error during add", editerror);
    }
  };
  return (
    <div className="flex-col justify-center items-center">
      <h1 className="text-3xl flex justify-center my-5">Add Product</h1>
      <form className="flex-col justify-center" onSubmit={handleSubmit}>
        <div className="flex-col">
          <div className="flex items-center text-xl gap-x-5">
            <div className="px-10 w-48">Product name :</div>
            <div>
              <input
                onChange={(e) => setAddName(e.target.value)}
                className="block bg-gray-200 p-2 my-2 rounded-md"
                type="text"
                placeholder="product name"
              />
            </div>
          </div>
          <div className="flex items-center text-xl gap-x-5">
            <div className="px-10 w-48">Product price :</div>
            <div>
              <input
                onChange={(e) => setAddPrice(Number(e.target.value))}
                className="block bg-gray-200 p-2 my-2 rounded-md"
                type="Number"
                placeholder="product price"
              />
            </div>
          </div>
          <div className="flex items-center text-xl gap-x-5">
            <div className="px-10 w-52"> Product quantity :</div>
            <div>
              <input
                onChange={(e) => setAddQuantity(Number(e.target.value))}
                className="block bg-gray-200 p-2 my-2 rounded-md"
                type="Number"
                placeholder="product quantity"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center m-5">
          <button
            type="submit"
            className="bg-blue-500 flex p-2 rounded-md text-white"
          >
            add
          </button>
        </div>
      </form>
      <div className="flex justify-center">
        <Link
          className=" flex justify-center p-2 rounded-md text-white w-14"
          href="/"
        >
          back
        </Link>
      </div>
    </div>
  );
};
export default AddPage;

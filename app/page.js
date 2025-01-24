"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import ProductList from "./components/productList";
import Link from "next/link";
export default function Home() {
  const [data, setData] = useState([]);
  const calldata = async () => {
    const response = await axios.get(
      "https://cpall-sever-test.onrender.com/home"
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    calldata();
  }, []);
  return (
    <main className="">
      <Navbar />
      <div className="flex justify-center bg-cyan-600 mx-auto my-5 p-5 w-24 rounded-lg hover:bg-teal-300">
        <Link href="/add">+Add product</Link>
      </div>

      <div className=" flex-col">
        <ProductList dataList={data} />
      </div>
    </main>
  );
}

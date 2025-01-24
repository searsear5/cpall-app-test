"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const EditPage = ({ params }) => {
  const [id, setId] = useState(null);
  const [name, setEditName] = useState("");
  const [price, setEditPrice] = useState(0);
  const [quantity, setEditQuantity] = useState(0);
  const [editerror, setError] = useState("");
  const router = useRouter();
  //console.log(id);
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id); 
      console.log(id);
    };
    resolveParams();
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !quantity) {
      setError("please complete all edit data");
      return;
    }
    try {
      const res = await axios.put(
        `https://cpall-sever-test.onrender.com/edit/${id}`,
        {
          name: name,
          price: price,
          quantity: quantity,
        }
      );
      if (res) {
        setError("");

        console.log("edit successfull");
        router.push("/");
      } else {
        console.log("edit fail");
      }
    } catch (error) {
      console.log("error during edit", editerror);
    }
  };
  return (
    <div className="flex-col justify-center items-center">
      <h1 className="text-3xl flex justify-center my-5">Edit Product</h1>
      <form className="flex-col justify-center" onSubmit={handleSubmit}>
        <div className="flex-col">
          <div className="flex items-center text-xl gap-x-5">
            <div className="px-10 w-48">edit name :</div>
            <div>
              <input
                onChange={(e) => setEditName(e.target.value)}
                className="block bg-gray-200 p-2 my-2 rounded-md"
                type="text"
                placeholder="product name"
              />
            </div>
          </div>
          <div className="flex items-center text-xl gap-x-5">
            <div className="px-10 w-48">edit price :</div>
            <div>
              <input
                onChange={(e) => setEditPrice(Number(e.target.value))}
                className="block bg-gray-200 p-2 my-2 rounded-md"
                type="Number"
                placeholder="product price"
              />
            </div>
          </div>
          <div className="flex items-center text-xl gap-x-5">
            <div className="px-10 w-52"> edit quantity :</div>
            <div>
              <input
                onChange={(e) => setEditQuantity(Number(e.target.value))}
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
            Save
          </button>
        </div>
      </form>
      <div className="flex justify-center">
        <Link
          className="bg-red-500 flex justify-center p-2 rounded-md text-white w-14"
          href="/"
        >
          back
        </Link>
      </div>
    </div>
  );
};
export default EditPage;

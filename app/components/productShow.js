import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

function ProductShow({ data }) {
  const router = useRouter();
  const deleteHandle = async () => {
    try {
      const resdel = await axios.delete(
        `https://cpall-sever-test.onrender.com/delete/${data.id}`
      );
      location.reload();
    } catch (error) {
      console.log("error during edit", editerror);
    }
  };

  return (
    <div className="flex px-5">
      <div className="flex items-center bg-yellow-600 border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl ">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/box.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Product name : {data.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Product price : {data.price}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Product quantity : {data.quantity}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <Link
              className="flex text-xl text-white bg-slate-500 py-2 px-5 rounded-lg w-24 hover:bg-yellow-300"
              href={`/edit/${data.id}`}
            >
              edit
            </Link>
            <button
              onClick={deleteHandle}
              className="flex text-xl text-white bg-slate-500 py-2 px-5 my-1 rounded-lg hover:bg-yellow-300"
            >
              delete
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProductShow;

import { Link } from "react-router-dom";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className="dark:bg-black dark:text-gray-300 h-screen text-center py-80"
    >
      <p className="text-2xl font-medium">Oops!</p>
      <p className="italic mt-1 mb-8">An unexpected error occurred!</p>
      <Link
        to="/"
        className="w-64 py-2 mx-auto text-xl flex justify-center space-x-2 items-center bg-orange-500 text-white hover:shadow-lg"
      >
        <HiOutlineArrowSmallLeft className="font-semibold" />
        <p>Back to home</p>
      </Link>
    </div>
  );
}

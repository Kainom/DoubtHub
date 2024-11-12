import { LuAlertOctagon } from "react-icons/lu";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const NotFound = () => {
  return (
    <main className="flex  justify-center items-center flex-col  bg-slate-100 w-full h-screen">

    <div className="shadow-2xl  rounded-3xl mx-auto mt-0 bg-brandWhite max-w-screen-sm	text-black px-5 py-5 ">
        <span className="flex justify-center" >
        <LuAlertOctagon className="text-red-700 w-16 h-16 mb-5"/>
        </span>
      <div className="text-center tex-b">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-black text-xl text-center">
        Oops! It seems you ve ventured into the dark corners of our site. The page you re looking for doesn t exist.
        </p>
      </div>
      <div className="flex justify-center mt-7">
      <button className="bg-brandLight hover:bg-brandDark p-1 border rounded-md ">
        <Link className="flex items-center gap-2 p-1" to="/">
        <IoHomeOutline className="w-5 h-5" />
        Return to Home
        </Link>
      </button>
      </div>
     
    </div>
    </main>
  );
};

export default NotFound;

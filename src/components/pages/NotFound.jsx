import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen text-white">
        <div className="text-center px-4 py-10">
          {/* 404 Message */}
          <h1 className="text-[230px] leading-none font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s text-primary">
            404
          </h1>
          
          {/* Description */}
          <p className="text-2xl mb-6 animate__animated animate__fadeIn animate__delay-2s text-primary/60">
            Oops! The page you’re looking for doesn’t exist.
          </p>
          
          {/* Go Back Home Button */}
          <Link
            to="/"
            className="btn-primary mt-3 inline-block transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;

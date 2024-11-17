import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.username) {
      errors.username = "Username is required";
    }
    if (!data.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
      {/* Top-left Back button */}
      <div className="absolute top-[30px] left-[30px]">
        <Link to="/" className="text-[28px] font-bold text-[#218ace] hover:underline focus:outline-none">
          Back
        </Link>
      </div>

      {/* Top-right image */}
      <img
        className="absolute top-[-30px] right-0 w-[150px] sm:w-[200px] h-auto"
        src="./assets/login1.png"
        alt="Top Decoration"
      />

      {/* Main Login Container */}
      <div className="flex flex-col items-center w-full max-w-[800px] p-[20px] sm:p-[40px]">
        {/* Header */}
        <div className="text-center mb-[20px] sm:mb-[40px]">
          <h1 className="text-[36px] sm:text-[50px] font-bold">
            <span className="text-[#218ace]">Welcome</span>{" "}
            <span className="text-black">Back</span>
          </h1>
        </div>

        {/* Form */}
        <form className="w-full" onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="w-full mb-[20px] sm:mb-[30px]">
            <input
              className="w-full px-[16px] sm:px-[20px] py-[16px] sm:py-[20px] text-[18px] sm:text-[24px] bg-[#f2f2f2] border border-gray-300 rounded-[8px] sm:rounded-[12px] focus:outline-none focus:border-[#218ace]"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={formData.username}
            />
            {errors.username && (
              <span className="text-red-500 text-sm">{errors.username}</span>
            )}
          </div>

          {/* Password Input */}
          <div className="w-full mb-[20px] sm:mb-[30px]">
            <input
              className="w-full px-[16px] sm:px-[20px] py-[16px] sm:py-[20px] text-[18px] sm:text-[24px] bg-[#f2f2f2] border border-gray-300 rounded-[8px] sm:rounded-[12px] focus:outline-none focus:border-[#218ace]"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>

          {/* Login Button */}
          <div className="w-full mb-[20px] sm:mb-[30px]">
            <button
              type="submit"
              className="w-full px-[16px] sm:px-[20px] py-[16px] sm:py-[20px] text-[24px] sm:text-[32px] font-bold text-white bg-[#34afff] rounded-[8px] sm:rounded-[12px] transition-colors duration-300 ease-in-out hover:bg-[#218ace]"
            >
              Login
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-[20px] sm:mt-[30px]">
          <p className="text-[16px] sm:text-[20px] text-gray-400 mb-[10px] sm:mb-[20px]">
            Forgotten password?
          </p>
          <div className="flex justify-center items-center text-[18px] sm:text-[22px]">
            <span className="text-black mr-[10px]">Don’t have an account?</span>
            <button className="text-[#218ace] font-bold hover:underline focus:outline-none">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Bottom-left image */}
      <img
        className="absolute bottom-[-30px] left-0 w-[150px] sm:w-[200px] h-auto"
        src="./assets/login2.png"
        alt="Bottom Decoration"
      />
    </div>
  );
};

export default Login;

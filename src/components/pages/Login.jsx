import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const apiUrl = import.meta.env.VITE_LOGIN_API_URL;

const Login = () => {
	const navigate = useNavigate(); // useNavigate to redirect after login
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		// Validate fields
		if (!formData.email || !formData.password) {
			toast.error("Please fill in both email and password.");
			return;
		}

		const requestData = {
			email: formData.email,
			password: formData.password,
		};

		try {
			const response = await fetch(
				apiUrl,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(requestData),
				}
			);

			if (!response.ok) {
				const errorData = await response.json();
				toast.error(`${errorData.message}`);
			} else {
				const result = await response.json();
				localStorage.setItem("username", result.data.username);
				localStorage.setItem("token", result.token);
				toast.success("Login successful!");
				navigate("/");
			}
		} catch (error) {
			console.log("error: ", error);
			toast.error("An error occurred while logging in.");
		}
	};

	return (
		<div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
			{/* Top-left Back button */}
			<div className="absolute top-[30px] left-[30px]">
				<Link
					to="/"
					className="text-[28px] font-bold text-primary hover:underline focus:outline-none"
				>
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
						<span className="text-primary">W</span>elcome
						<span className="text-primary"> B</span>ack
					</h1>
				</div>

				{/* Form */}
				<form className="w-full" onSubmit={handleLogin} autoComplete="off">
					{/* Username Input */}
					<div className="w-full mb-[20px] sm:mb-[30px]">
						<input
							className="w-full px-[16px] sm:px-[36px] py-[12px] sm:py-[16px] text-[18px] sm:text-[22px] placeholder:text-black bg-[#f2f2f2] border rounded-[8px] sm:rounded-[12px] focus:outline-none"
							type="email"
							name="email"
							placeholder="Email"
							onChange={handleInputChange}
							value={formData.email}
						/>
					</div>

					{/* Password Input */}
					<div className="w-full mb-[20px] sm:mb-[30px]">
						<input
							className="w-full px-[16px] sm:px-[36px] py-[12px] sm:py-[16px] text-[18px] sm:text-[22px] placeholder:text-black bg-[#f2f2f2] border rounded-[8px] sm:rounded-[12px] focus:outline-none"
							type="password"
							name="password"
							placeholder="Password"
							onChange={handleInputChange}
							value={formData.password}
						/>
					</div>

					{/* Login Button */}
					<div className="w-full mb-[20px] sm:mb-[30px]">
						<button type="submit" className="btn-primary w-full text-[24px]">
							Login
						</button>
					</div>
				</form>

				{/* Footer */}
				<div className="text-center mt-[10px]">
					<Link to={"/forget-password"} className="text-[16px] sm:text-[20px] text-gray-400 mb-[10px] block sm:mb-[20px]">
						Forgotten password?
					</Link>
					<div className="flex justify-center items-center text-[18px] sm:text-[22px]">
						<span className="text-black mr-[10px]">Don’t have an account?</span>
						<Link
							to="/register"
							className="text-primary font-bold hover:underline focus:outline-none"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</div>

			{/* Bottom-left image */}
			<img
				className="absolute bottom-[-30px] left-0 w-[150px] sm:w-[200px] h-auto"
				src="./assets/login2.png"
				alt="Bottom Decoration"
			/>
			<ToastContainer />
		</div>
	);
};

export default Login;

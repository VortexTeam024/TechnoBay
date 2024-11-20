import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const apiUrl = import.meta.env.VITE_REGISTER_API_URL;

const Register = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		passwordConfirm: "",
	});

	const navigate = useNavigate(); // Initialize navigate hook

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleRegister = async (e) => {
		e.preventDefault();

		if (formData.password !== formData.passwordConfirm) {
			toast.error("Passwords do not match!");
			return;
		}

		const requestData = {
			username: formData.username,
			email: formData.email,
			password: formData.password,
			passwordConfirm: formData.passwordConfirm,
		};

		console.log("Data being sent:", requestData);

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
				console.error("Error from server:", errorData);

				if (errorData.errors && errorData.errors.length > 0) {
					errorData.errors.forEach((error) => {
						toast.error(`${error.msg}`);
					});
				} else {
					toast.error("Registration failed: Unknown error occurred.");
				}
			} else {
				const result = await response.json();
				localStorage.setItem("username", result.data.username);
				toast.success("Registration successful!");

				// Navigate to home page after successful registration
				navigate("/login");
			}
		} catch (error) {
			console.error("Error during registration:", error);
			toast.error("An error occurred while registering.");
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
						<span className="text-primary">C</span>reate
						<span className="text-primary"> A</span>ccount
					</h1>
				</div>

				{/* Form */}
				<form className="w-full" onSubmit={handleRegister} autoComplete="off">
					{/* Username Input */}
					<div className="w-full mb-[10px] sm:mb-[15px]">
						<input
							className="w-full px-[16px] sm:px-[36px] py-[12px] sm:py-[16px] text-[18px] sm:text-[22px] placeholder:text-black bg-[#f2f2f2] border rounded-[8px] sm:rounded-[12px] focus:outline-none"
							type="text"
							name="username"
							placeholder="Username"
							onChange={handleInputChange}
							value={formData.username}
						/>
					</div>

					{/* Email Input */}
					<div className="w-full mb-[10px] sm:mb-[15px]">
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
					<div className="w-full mb-[10px] sm:mb-[15px]">
						<input
							className="w-full px-[16px] sm:px-[36px] py-[12px] sm:py-[16px] text-[18px] sm:text-[22px] placeholder:text-black bg-[#f2f2f2] border rounded-[8px] sm:rounded-[12px] focus:outline-none"
							type="password"
							name="password"
							placeholder="Password"
							onChange={handleInputChange}
							value={formData.password}
						/>
					</div>

					{/* Confirm Password Input */}
					<div className="w-full mb-[10px] sm:mb-[15px]">
						<input
							className="w-full px-[16px] sm:px-[36px] py-[12px] sm:py-[16px] text-[18px] sm:text-[22px] placeholder:text-black bg-[#f2f2f2] border rounded-[8px] sm:rounded-[12px] focus:outline-none"
							type="password"
							name="passwordConfirm"
							placeholder="Confrim Password"
							onChange={handleInputChange}
							value={formData.passwordConfirm}
						/>
					</div>

					{/* Login Button */}
					<div className="w-full mb-[10px] sm:mb-[15px]">
						<button type="submit" className="btn-primary w-full text-[24px]">
							Sign Up
						</button>
					</div>
				</form>

				{/* Footer */}
				<div className="text-center mt-[20px] sm:mt-[30px]">
					<div className="flex justify-center items-center text-[18px] sm:text-[22px]">
						<span className="text-black mr-[10px]">
							Do you have an account?
						</span>
						<Link
							to="/login"
							className="text-primary font-bold hover:underline focus:outline-none"
						>
							Login
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

export default Register;

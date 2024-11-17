import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
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
		if (!data.email) {
			errors.username = "Username is required";
		}
		if (!data.password) {
			errors.password = "Password is required";
		}
		if (!data.confirmPassword || data.password === data.confirmPassword) {
			errors.password = "Password is required";
		}
		return errors;
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
				<form className="w-full" onSubmit={handleSubmit}>
					{/* Username Input */}
					<div className="w-full mb-[10px] sm:mb-[15px]">
						<input
							className="w-full px-[16px] sm:px-[36px] py-[12px] sm:py-[16px] text-[18px] sm:text-[22px] placeholder:text-black bg-[#f2f2f2] border rounded-[8px] sm:rounded-[12px] focus:outline-none"
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

					{/* Email Input */}
					<div className="w-full mb-[10px] sm:mb-[15px]">
						<input
							className="w-full px-[16px] sm:px-[36px] py-[12px] sm:py-[16px] text-[18px] sm:text-[22px] placeholder:text-black bg-[#f2f2f2] border rounded-[8px] sm:rounded-[12px] focus:outline-none"
							type="email"
							name="email"
							placeholder="Email"
							onChange={handleChange}
							value={formData.email}
						/>
						{errors.email && (
							<span className="text-red-500 text-sm">{errors.email}</span>
						)}
					</div>

					{/* Password Input */}
					<div className="w-full mb-[10px] sm:mb-[15px]">
						<input
							className="w-full px-[16px] sm:px-[36px] py-[12px] sm:py-[16px] text-[18px] sm:text-[22px] placeholder:text-black bg-[#f2f2f2] border rounded-[8px] sm:rounded-[12px] focus:outline-none"
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

					{/* Confirm Password Input */}
					<div className="w-full mb-[10px] sm:mb-[15px]">
						<input
							className="w-full px-[16px] sm:px-[36px] py-[12px] sm:py-[16px] text-[18px] sm:text-[22px] placeholder:text-black bg-[#f2f2f2] border rounded-[8px] sm:rounded-[12px] focus:outline-none"
							type="password"
							name="confirmPassword"
							placeholder="Confrim Password"
							onChange={handleChange}
							value={formData.confirmPassword}
						/>
						{errors.confirmPassword && (
							<span className="text-red-500 text-sm">
								{errors.confirmPassword}
							</span>
						)}
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
		</div>
	);
};

export default Register;

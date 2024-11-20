import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const apiUrl = import.meta.env.VITE_FORGET_PASSWORD_API_URL;


const ForgetPassword = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");

	const handleInputChange = (e) => {
		setEmail(e.target.value);
	};

	const handleResetPassword = async (e) => {
		e.preventDefault();

		// Validate email field
		if (!email) {
			toast.error("Please enter your email.");
			return;
		}

		const requestData = {
			email: email,
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
				console.log("Error response:", errorData);
				toast.error(`Password reset failed: ${errorData.message}`);
			} else {
				const result = await response.json();
				toast.success(
					result.message || "Check your email for password reset instructions."
				);
				localStorage.setItem("resetEmail", email);
				navigate("/verify-code");
			}
		} catch (error) {
			console.log("error: ", error);
			toast.error("An error occurred while requesting password reset.");
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
						<span className="text-primary">F</span>orget
						<span className="text-primary"> P</span>assword
					</h1>
				</div>

				{/* Form */}
				<form className="w-full" onSubmit={handleResetPassword}>
					{/* Username Input */}
					<div className="w-full mb-[20px] sm:mb-[30px]">
						<input
							className="w-full px-[16px] sm:px-[36px] py-[12px] sm:py-[16px] text-[18px] sm:text-[22px] placeholder:text-black bg-[#f2f2f2] border rounded-[8px] sm:rounded-[12px] focus:outline-none"
							type="email"
							name="email"
							placeholder="Email"
							onChange={handleInputChange}
							value={email}
						/>
					</div>

					{/* Login Button */}
					<div className="w-full mb-[20px] sm:mb-[30px]">
						<button type="submit" className="btn-primary w-full text-[24px]">
							Send
						</button>
					</div>
				</form>

				{/* Footer */}
				<div className="text-center mt-[20px] sm:mt-[30px]">
					<div className="flex justify-center items-center text-[18px] sm:text-[22px]">
						<span className="text-black mr-[10px]">Remembered your password?</span>
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

export default ForgetPassword;

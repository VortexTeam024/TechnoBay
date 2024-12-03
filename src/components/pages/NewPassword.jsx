import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const apiUrl = import.meta.env.VITE_RESET_PASSWORD_API_URL;

const NewPassword = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	useEffect(() => {
		const storedEmail = localStorage.getItem("resetEmail");
		setEmail(storedEmail);
	}, []);
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		if (name === "password") setPassword(value);
		if (name === "confirmPassword") setConfirmPassword(value);
	};

	const handleResetPassword = async (e) => {
		e.preventDefault();

		// Validate input fields
		if (!email || !password || !confirmPassword) {
			toast.error("Please fill in all fields.");
			return;
		}

		if (password !== confirmPassword) {
			toast.error("Passwords do not match.");
			return;
		}

		const requestData = {
			email: email,
			newPassword: password,
		};

		try {
			const response = await fetch(
				apiUrl,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(requestData),
				}
			);

			if (!response.ok) {
				const errorData = await response.json();
				console.log("Error response:", errorData);
				toast.error(`Reset password failed: ${errorData.message}`);
			} else {
				const result = await response.json();
				toast.success(
					result.message || "Password reset successfully. Please log in."
				);
				localStorage.removeItem("resetEmail");
				setEmail("");
				navigate("/login"); // Redirect to login page after success
			}
		} catch (error) {
			console.log("error: ", error);
			toast.error("An error occurred while resetting the password.");
		}
	};

	return (
		<div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">

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
						<span className="text-primary">N</span>ew
						<span className="text-primary"> P</span>assword
					</h1>
				</div>

				{/* Form */}
				<form className="w-full" onSubmit={handleResetPassword}>
					{/* Password Input */}
					<div className="w-full mb-[10px] sm:mb-[15px]">
						<input
							className="w-full px-[16px] sm:px-[36px] py-[12px] sm:py-[16px] text-[18px] sm:text-[22px] placeholder:text-black bg-[#f2f2f2] border rounded-[8px] sm:rounded-[12px] focus:outline-none"
							type="password"
							name="password"
							placeholder="Password"
							onChange={handleInputChange}
							value={password}
						/>
					</div>

					{/* Confirm Password Input */}
					<div className="w-full mb-[10px] sm:mb-[15px]">
						<input
							className="w-full px-[16px] sm:px-[36px] py-[12px] sm:py-[16px] text-[18px] sm:text-[22px] placeholder:text-black bg-[#f2f2f2] border rounded-[8px] sm:rounded-[12px] focus:outline-none"
							type="password"
							name="confirmPassword"
							placeholder="Confrim Password"
							onChange={handleInputChange}
							value={confirmPassword}
						/>
					</div>

					{/* Login Button */}
					<div className="w-full mb-[20px] sm:mb-[30px]">
						<button type="submit" className="btn-primary w-full text-[24px]">
							Submit
						</button>
					</div>
				</form>
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

export default NewPassword;

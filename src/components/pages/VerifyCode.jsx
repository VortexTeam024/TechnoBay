import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const apiUrl = import.meta.env.VITE_VERIFY_CODE_API_URL;

const VerifyCode = () => {
	const navigate = useNavigate();
	const [code, setCode] = useState("");

	const handleInputChange = (e) => {
		setCode(e.target.value);
	};

	const handleVerifyCode = async (e) => {
		e.preventDefault();

		// Validate code field
		if (!code) {
			toast.error("Please enter the verification code.");
			return;
		}

		const requestData = {
			resetCode: code,
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
				toast.error(`Code verification failed: ${errorData.message}`);
			} else {
				const result = await response.json();
				toast.success(result.message || "Code verified successfully.");
				navigate("/reset-password"); // Redirect to reset password page after successful verification
			}
		} catch (error) {
			console.log("error: ", error);
			toast.error("An error occurred while verifying the code.");
		}
	};

	return (
		<div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
			{/* Top-left Back button */}
			<div className="absolute top-[30px] left-[30px]">
				<Link
					to="/forget-password"
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
						<span className="text-primary">V</span>erify
						<span className="text-primary"> C</span>ode
					</h1>
				</div>

				{/* Form */}
				<form className="w-full" onSubmit={handleVerifyCode}>
					{/* Username Input */}
					<div className="w-full mb-[20px] sm:mb-[30px]">
						<input
							className="w-full px-[16px] sm:px-[36px] py-[12px] sm:py-[16px] text-[18px] sm:text-[22px] placeholder:text-black bg-[#f2f2f2] border rounded-[8px] sm:rounded-[12px] focus:outline-none"
							type="text"
							name="code"
							placeholder="Verify Code"
							onChange={handleInputChange}
							value={code}
						/>
					</div>

					{/* Login Button */}
					<div className="w-full mb-[20px] sm:mb-[30px]">
						<button type="submit" className="btn-primary w-full text-[24px]">
							Submit
						</button>
					</div>
				</form>

				{/* Footer */}
				<div className="text-center mt-[20px] sm:mt-[30px]">
					<div className="flex justify-center items-center text-[18px] sm:text-[22px]">
						<span className="text-black mr-[10px]">Didn&apos;t receive the code?</span>
						<Link
							to="/forget-password"
							className="text-primary font-bold hover:underline focus:outline-none"
						>
							Resend
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

export default VerifyCode;

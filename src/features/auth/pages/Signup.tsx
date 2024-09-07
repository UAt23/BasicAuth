import React from "react";
import Wrapper from "../components/Wrapper";
import SignupForm from "../components/SignupForm";

const Signup: React.FC = () => {
	return (
		<Wrapper>
		<div className="grid grid-cols-2 grid-rows-1 w-full px-24 py-4 bg-white rounded-lg shadow-lg">
			{/* Left */}
			<div className="col-start-1 flex items-center">
				<SignupForm />
			</div>
			{/* Right */}
			<div className="col-start-2 flex flex-1 items-start self-stretch">
				<img src="../../../../public/img/sign-up.jpg" alt="Sign In Photo" className="flex-1 self-stretch object-cover" />
			</div>
		</div>
	</Wrapper>
);
};

export default Signup;

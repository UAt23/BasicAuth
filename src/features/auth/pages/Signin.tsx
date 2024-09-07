import React from "react";
import Wrapper from "../components/Wrapper";
import SigninForm from "../components/SigninForm";

const Signin: React.FC = () => {
	return (
		<Wrapper>
			<div className="grid grid-cols-2 grid-rows-1 w-full px-24 py-4 bg-white rounded-lg shadow-lg">
				{/* Left */}
				<div className="col-start-1 flex items-center">
					<SigninForm />
				</div>
				{/* Right */}
				<div className="col-start-2 flex flex-1 items-start self-stretch">
					<img src="../../../../public/img/sign-in.jpg" alt="Sign In Photo" className="flex-1 self-stretch object-fit" />
				</div>
			</div>
		</Wrapper>
	);
};

export default Signin;

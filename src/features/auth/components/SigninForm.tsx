import React, { FC } from "react";
import CustomInput from "./common/CustomInput";
import CustomButton from "./common/CustomButton";

const SigninForm: FC = () => {
	return (
		<div className="grid grid-cols-5 gap-y-6 w-full">
			<p className="row-span-1 col-start-2 col-end-5 text-3xl text-neutral-900 font-semibold ">Log in to your account</p>
         <div className="row-span-1 col-start-2 col-end-5 flex flex-col gap-6 w-full">
				<CustomInput label="Email" type="text" placeholder="john@example.com" />
				<CustomInput label="Password" type="password" placeholder="**********" />
			</div>
			<CustomButton style="col-start-2 col-end-5" label="Submit" />
			<p className="col-start-2 col-end-5 justify-self-center font-medium">Don’t have an account? <span className="text-indigo-700 font-medium">Sign up</span></p>
		</div>
	);
};

export default SigninForm;

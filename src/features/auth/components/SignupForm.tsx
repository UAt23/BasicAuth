import React, { FC } from "react";
import CustomInput from "./common/CustomInput";
import CustomButton from "./common/CustomButton";
import CustomCheckbox from "./common/CustomCheckbox";
import RequirementItem from "./RequirementItem";

const requirementsArray = [
   "8 - 64 characters",
   "One uppercase letter",
   "One lowercase letter",
   "One number",
   "One special character (e.g., ! @ # $ % ^ & *)"
]

const SignupForm: FC = () => {
	return (
		<div className="grid grid-cols-5 gap-y-6 w-full">
			<p className="row-span-1 col-start-2 col-end-5 text-3xl text-neutral-900 font-semibold ">Create your account</p>
         <div className="row-span-1 col-start-2 col-end-5 flex flex-col gap-6 w-full">
				<CustomInput label="Email" type="text" placeholder="john@example.com" />
				<CustomInput label="Password" type="password" placeholder="**********" />
			</div>
         <div className="row-span-1 col-start-2 col-end-5 flex flex-col gap-3">
            {
               requirementsArray.map((label, index) => {
                  return <RequirementItem key={index} label={label}/>
               })
            }
         </div>
         <CustomCheckbox label="I agree with CodePulse" span="Terms of Service" style="row-span-1 col-start-2 col-end-5 "/>
			<CustomButton style="col-start-2 col-end-5" label="Create account" />
			<p className="col-start-2 col-end-5 justify-self-center font-medium">Already have an account? <span className="text-indigo-700 font-medium">Sign in</span></p>
		</div>
	);
};

export default SignupForm;

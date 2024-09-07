import React, { FC } from "react";

interface CustomInputProps {
	label: string;
	type: React.HTMLInputTypeAttribute;
	placeholder: string;
}

const CustomInput: FC<CustomInputProps> = ({ label, type, placeholder }) => {
	return (
		<div className="flex flex-col gap-1.5 w-full">
			<label className="text-sm text-neutral-70 font-medium">
				{label}
			</label>
			<input
				type={type}
				placeholder={placeholder}
				className="w-full bg-neutral-50 px-3.5 py-2.5 text-neutral-900 placeholder:text-neutral-500 font-normal rounded-[4px] focus:outline-none focus:ring-offset-0 focus:ring-2  focus:ring-indigo-300"
			/>
		</div>
	);
};

export default CustomInput;

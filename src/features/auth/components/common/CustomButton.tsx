import React, { FC } from "react";

interface CustomButtonProps {
	label: string;
	bgColor?: string;
   textColor?: string;
	width?: string;
	height?: string;
	style?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
	label,
	bgColor = "bg-indigo-700",
   textColor = '',
	width = "100%",
	height = "40px",
	style,
}) => {
	return (
		<button
			className={`${bgColor} w-[${width}] h-[${height}] ${style} ${textColor ? textColor : "text-white"} px-3.5 py-2.5 text-sm rounded-s flex justify-center items-center focus:outline-none focus:ring-offset-2 focus:ring-2  focus:ring-indigo-300`}
		>
			{label}
		</button>
	);
};

export default CustomButton;

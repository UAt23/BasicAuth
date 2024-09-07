import React, { FC } from "react";

interface CustomCheckboxProps {
	label: string;
   span?: string;
	style?: string;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({ label, span, style }) => {
	return (
		<div className={`flex items-start gap-3 ${style}`}>
			<input
				type="checkbox"
				id="some_id"
				className="
               relative peer shrink-0
               appearance-none w-4 h-4 mt-1 border-2 border-neutral-300 rounded-[4px] bg-transparent
               checked:bg-blue-600 checked:border-0
               focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-indigo-100
               disabled:border-steel-400 disabled:bg-steel-400
            "
			/>
			<label htmlFor="some_id" className="font-normal">
				{label} <span className="text-indigo-700">{span}</span>
			</label>
			<svg
				className="
               absolute 
               w-4 h-4 mt-1 p-0.5
               hidden peer-checked:block
               pointer-events-none"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="white"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="20 6 9 17 4 12"></polyline>
			</svg>
		</div>
	);
};

export default CustomCheckbox;

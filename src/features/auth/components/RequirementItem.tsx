import React, { FC } from "react";

interface RequirementItemProps {
	label: string;
   checked?: boolean;
	span?: string;
	style?: string;
}

const RequirementItem: FC<RequirementItemProps> = ({ label, checked = false, span, style }) => {
	return (
		<div className={`flex items-center gap-3 ${style}`}>
			<div
				id="some_id"
				className={`
               relative w-4 h-4 rounded-full ${checked ? "bg-green-700" : "bg-neutral-400"}
            `}
			></div>
			<label htmlFor="some_id" className="text-neutral-600 text-sm font-normal">
				{label} <span className="text-indigo-700">{span}</span>
			</label>
			<svg
				className="
               absolute 
               w-4 h-4 p-0.5
               pointer-events-none"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="white"
				stroke-width="4"
			>
				<polyline points="20 6 9 17 4 12"></polyline>
			</svg>
		</div>
	);
};

export default RequirementItem;

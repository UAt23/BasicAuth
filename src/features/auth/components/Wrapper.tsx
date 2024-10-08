import React from "react";

interface WrapperProps {
	children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	return <div className="flex w-full h-screen p-4 rounded-lg">{children}</div>;
};

export default Wrapper;

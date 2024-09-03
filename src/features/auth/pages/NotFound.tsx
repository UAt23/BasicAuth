import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700">
			<h1 className="text-9xl font-bold text-blue-600">404</h1>
			<h2 className="text-2xl md:text-4xl font-medium mt-4">
				Page Not Found
			</h2>
			<p className="text-base md:text-lg mt-2 text-gray-600">
				Sorry, the page you're looking for doesn't exist.
			</p>
			<Link
				to="/"
				className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
			>
				Go Home
			</Link>
		</div>
	);
};

export default NotFound;

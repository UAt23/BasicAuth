import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signin from "../features/auth/pages/Signin";
import Signup from "../features/auth/pages/Signup";
import NotFound from "../features/auth/pages/NotFound";
import { useAuth } from "../hooks/useAuth";

const AppRouter = () => {
	const { isAuthenticated } = useAuth();

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						isAuthenticated ? (
							<Navigate to="/dashboard" replace />
						) : (
							<Navigate to="/login" replace />
						)
					}
				/>

				{/* Auth Routes */}
				<Route path="/login" element={<Signin />} />
				<Route path="/register" element={<Signup />} />
				{/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}

				{/* Dashboard Routes */}
				{/* <Route
					path="/dashboard"
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/> */}

				{/* Fallback Route */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "../features/auth/pages/Signin";
import Signup from "../features/auth/pages/Signup";
import NotFound from "../features/auth/pages/NotFound";

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				{/* Auth Routes */}
				<Route path="/login" element={<Signin />} />
				<Route path="/register" element={<Signup />} />
				{/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}

				{/* Dashboard Routes */}
				

				{/* Fallback Route */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;

import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./routes/AppRoutes";

function App() {

	return <div className="">
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	</div>;
}

export default App;

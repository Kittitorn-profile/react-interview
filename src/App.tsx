import { HeaderMenu, Footer } from "./layout";
import CarList from "./components/carList";
import "./App.css";

const App = () => {
	return (
		<div>
			<HeaderMenu />
			<div>
				<div>Cart Header</div>
				<div>
					<CarList />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default App;

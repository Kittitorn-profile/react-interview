import { HeaderMenu, Footer } from "./layout";
import CarList from "./components/carList";
import Input from "./components/input";
import "./App.css";

const App = () => {
	return (
		<div>
			<HeaderMenu />
			<div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						padding: "16px 10%",
					}}
				>
					<div style={{ fontSize: 36, fontWeight: 600 }}>Car Available</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: 10,
						}}
					>
						<Input value={""} placeholder="Search Car" />
						<Input value={""} placeholder="Search Car" />
					</div>
				</div>
				<div>
					<CarList />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default App;

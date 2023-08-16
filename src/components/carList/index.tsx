import React from "react";
import CardItemCar from "./cardItemCar";
import "./car.css";

const item = [
	{ title: "Toyota Yaris", price: 1200 },
	{ title: "Toyota Yaris", price: 1200 },
	{ title: "Toyota Yaris", price: 1200 },
	{ title: "Toyota Yaris", price: 1200 },
	{ title: "Toyota Yaris", price: 1200 },
	{ title: "Toyota Yaris", price: 1200 },
	{ title: "Toyota Yaris", price: 1200 },
	{ title: "Toyota Yaris", price: 1200 },
];
const CarList: React.FC = () => {
	return (
		<div className="car">
			<div className="grid-container">
				{item.map((items) => (
					<CardItemCar data={items} />
				))}
			</div>
		</div>
	);
};
export default CarList;

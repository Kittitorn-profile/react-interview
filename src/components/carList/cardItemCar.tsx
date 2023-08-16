import React from "react";
import "./car.css";

interface CarItem {
	data?: any;
}

const CarList: React.FC<CarItem> = ({ data }) => {
	const { title, price } = data;

	return (
		<div className="cardItem">
			<img src={"assets/toyota-yaris.png"} alt={title} />
			<div className="card-detail">
				<div>
					<div>{title}</div>
					<div>{price}</div>
				</div>
				<div className="button-add">Add</div>
			</div>
		</div>
	);
};
export default CarList;

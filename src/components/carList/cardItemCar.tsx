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
					<div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>
						{title}
					</div>
					<div>{`${price} THB/Day`}</div>
				</div>
				<div className="button-add">Add to cart</div>
			</div>
		</div>
	);
};
export default CarList;

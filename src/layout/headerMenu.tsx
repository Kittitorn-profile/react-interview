import React from "react";

const HeaderMenu: React.FC = () => {
	return (
		<div className="app-header">
			<div>
				<img src={"assets/logo.svg"} alt="logo" style={{ height: 32 }} />
			</div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<img
					src={"assets/iconCart.svg"}
					alt="iconCart"
					style={{ width: 24, height: 24, marginRight: 6 }}
				/>
				<div>Cart(0)</div>
			</div>
		</div>
	);
};
export default HeaderMenu;

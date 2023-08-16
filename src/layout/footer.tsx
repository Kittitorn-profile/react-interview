import React from "react";

const FooterMenu: React.FC = () => {
	return (
		<div className="app-footer">
			<div style={{ textAlign: "start" }}>
				<div style={{ fontSize: 16, fontWeight: 700 }}>Drivehub Co.,Ltd</div>
				<div style={{ fontSize: 12, fontWeight: 400, marginTop: 6 }}>
					193-195 Lake Rajada Office Complex,Ratchadapisek road, Khlong Toei,
					Bangkok
				</div>
			</div>
			<div style={{ fontSize: 12, fontWeight: 400, marginTop: 6 }}>
				© Drivehub 2023
			</div>
		</div>
	);
};
export default FooterMenu;

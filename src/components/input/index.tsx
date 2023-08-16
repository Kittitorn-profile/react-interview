import React from "react";
import "./input.css";

interface InputProps {
	value?: any;
	placeholder?: string;
	onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

const Input: React.FC<InputProps> = ({ value, placeholder, onChange }) => {
	return (
		<div className="box-input">
			<input value={value} placeholder={placeholder} onChange={onChange} />
		</div>
	);
};
export default Input;

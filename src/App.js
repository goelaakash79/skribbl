import React, { useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { GithubPicker } from "react-color";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	const [color, setColor] = useState("#424242");
	const [displayColorPicker, toggleDisplayColorPicker] = useState(false);

	const handleChangeComplete = color => {
		setColor(color.hex);
	};

	const handleClick = () => {
		toggleDisplayColorPicker(!displayColorPicker);
	};

	const handleClose = () => {
		toggleDisplayColorPicker(false);
	};
	const popover = {
		position: "absolute",
		zIndex: "2"
	};
	const cover = {
		position: "fixed",
		top: "0px",
		right: "0px",
		bottom: "0px",
		left: "0px"
	};
	return (
		<div className="container mt-5">
			<div className="card">
				<CanvasDraw
					brushRadius={4}
					canvasWidth="100%"
					canvasHeight={420}
					brushColor={color}
				/>
			</div>

			<button
				className="mt-4 btn btn-primary btn-sm"
				onClick={handleClick}
			>
				Pick Color
			</button>
			{displayColorPicker ? (
				<div style={popover}>
					<div style={cover} onClick={handleClose} />
					<GithubPicker onChange={handleChangeComplete} />
				</div>
			) : null}
		</div>
	);
}

export default App;

import React, { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import { GithubPicker } from "react-color";
import { FaEraser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	const [color, setColor] = useState("#424242");
	const [displayColorPicker, toggleDisplayColorPicker] = useState(false);

	const drawRef = useRef();

	const handleClick = () => {
		toggleDisplayColorPicker(!displayColorPicker);
	};

	const handleClose = () => {
		toggleDisplayColorPicker(false);
	};

	const handleChangeComplete = color => {
		setColor(color.hex);
		handleClose();
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
			<h2 className="header-title">Skribbl</h2>

			<div className="row">
				<div className="col-md-9">
					<div className="card">
						<CanvasDraw
							style={{
								borderRadius: 8,
								boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
							}}
							ref={drawRef}
							hideGrid={true}
							brushRadius={8}
							canvasWidth="100%"
							canvasHeight={520}
							brushColor={color}
						/>
					</div>

					<button className="mt-4 button" onClick={handleClick}>
						Pick Color
					</button>

					<FaEraser
						className="eraser"
						onClick={() => drawRef.current.clear()}
					/>
					{displayColorPicker ? (
						<div style={popover}>
							<div style={cover} onClick={handleClose} />
							<GithubPicker onChange={handleChangeComplete} />
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default App;

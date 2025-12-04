// react imports
import * as React from "react";

// mui imports
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// image & color imports
import { basePalette } from "../ColorPalettes";
import happyIcon from "../assets/images/sample icons/happy.png";
import relaxedIcon from "../assets/images/sample icons/relaxed.png";
import angryIcon from "../assets/images/sample icons/angry.png";
import tenseIcon from "../assets/images/sample icons/tense.png";
import excitedIcon from "../assets/images/sample icons/excited.png";
import boredIcon from "../assets/images/sample icons/bored.png";
import depressedIcon from "../assets/images/sample icons/depressed.png";
import sadIcon from "../assets/images/sample icons/sad.png";

function DayTray() {
	const [emotions, setEmotions] = React.useState<string[]>(() => []);

	//   const handleSelect = (
	//     event: React.MouseEvent<HTMLElement>,
	//     newEmotions: string[] | null,
	//   ) => {
	//     setEmotions(newEmotions || []);
	//   };

	return (
		<ToggleButtonGroup
			value={emotions}
			// onChange={handleSelect}
			sx={{
				display: "flex",
				flexWrap: "wrap",
				gap: 1,
				"& .MuiToggleButton-root": {
					flex: "1 1 calc(25% - 8px)",
				},
                marginInline: 2,
			}}
		>
				<ToggleButton value="happy">
					<img
						src={happyIcon}
						alt="happy"
						style={{ width: 50, height: 50 }}
					/>
				</ToggleButton>
				<ToggleButton value="relaxed">
					<img
						src={relaxedIcon}
						alt="relaxed"
						style={{ width: 50, height: 50 }}
					/>
				</ToggleButton>
				<ToggleButton value="excited">
					<img
						src={excitedIcon}
						alt="excited"
						style={{ width: 50, height: 50 }}
					/>
				</ToggleButton>
				<ToggleButton value="angry">
					<img
						src={angryIcon}
						alt="angry"
						style={{ width: 50, height: 50 }}
					/>
				</ToggleButton>
				<ToggleButton value="sad">
					<img
						src={sadIcon}
						alt="sad"
						style={{ width: 50, height: 50 }}
					/>
				</ToggleButton>
				<ToggleButton value="depressed">
					<img
						src={depressedIcon}
						alt="depressed"
						style={{ width: 50, height: 50 }}
					/>
				</ToggleButton>
				<ToggleButton value="tense">
					<img
						src={tenseIcon}
						alt="tense"
						style={{ width: 50, height: 50 }}
					/>
				</ToggleButton>
				<ToggleButton value="bored">
					<img
						src={boredIcon}
						alt="bored"
						style={{ width: 50, height: 50 }}
					/>
				</ToggleButton>
		</ToggleButtonGroup>
	);
}

export default DayTray;

// react imports
import * as React from "react";

// mui imports
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

// color palette import
import { basePalette } from "../ColorPalettes";

// buttons import
import emotionButtons from "../EmotionButtons";

function DayTray() {
	const [emotions, setEmotions] = React.useState<string[]>(() => []);

	//   const handleSelect = (
	//     event: React.MouseEvent<HTMLElement>,
	//     newEmotions: string[] | null,
	//   ) => {
	//     setEmotions(newEmotions || []);
	//   };

	const buttonStyling = {
		flexDirection: "column",
		gap: "5px",
		color: "white",
	};

	return (
		<>
            {/* Emotion Buttons */}
			<ToggleButtonGroup
				value={emotions}
				// onChange={handleSelect}
				sx={{
					display: "flex",
					flexWrap: "wrap",
					marginInline: 2,
				}}
			>
				{Object.entries(emotionButtons).map(([emotion, icon]) => (
					<ToggleButton
						value={emotion}
						sx={buttonStyling}
						key={emotion}
					>
						<img
							src={icon}
							alt={emotion}
							style={{ width: 50, height: 50 }}
						/>
						{emotion}
					</ToggleButton>
				))}
			</ToggleButtonGroup>

            {/* Comments Text Field */}
			<TextField
				id="outlined-multiline-static"
				label="Comments"
				multiline
				rows={3}
				defaultValue="Why did you feel this way today? (Optional)"
				sx={{
					margin: 2,
					width: "calc(100% - 32px)",
					"& .MuiInputBase-input": { color: "white" },
					"& .MuiInputLabel-root": { color: "white" },
					"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
						{ borderColor: "white" },
				}}
			/>

            {/* Save & Clear Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 16px 16px 16px' }}>
                <Button variant="contained" color="primary">
                    Save
                </Button>
                <Button variant="outlined" color="secondary">
                    Clear
                </Button>
            </div>
		</>
	);
}

export default DayTray;

{
	/* <ToggleButton value="happy" sx={buttonStyling}>
					<img
						src={happyIcon}
						alt="happy"
						style={{ width: 50, height: 50 }}
					/>
					Happy
				</ToggleButton>
				<ToggleButton value="relaxed" sx={buttonStyling}>
					<img
						src={relaxedIcon}
						alt="relaxed"
						style={{ width: 50, height: 50 }}
					/>
					Relaxed
				</ToggleButton>
				<ToggleButton value="excited" sx={buttonStyling}>
					<img
						src={excitedIcon}
						alt="excited"
						style={{ width: 50, height: 50 }}
					/>
					Excited
				</ToggleButton>
				<ToggleButton value="angry" sx={buttonStyling}>
					<img
						src={angryIcon}
						alt="angry"
						style={{ width: 50, height: 50 }}
					/>
					Angry
				</ToggleButton>
				<ToggleButton value="sad" sx={buttonStyling}>
					<img
						src={sadIcon}
						alt="sad"
						style={{ width: 50, height: 50 }}
					/>
					Sad
				</ToggleButton>
				<ToggleButton value="depressed" sx={buttonStyling}>
					<img
						src={depressedIcon}
						alt="depressed"
						style={{ width: 50, height: 50 }}
					/>
					Depressed
				</ToggleButton>
				<ToggleButton value="tense" sx={buttonStyling}>
					<img
						src={tenseIcon}
						alt="tense"
						style={{ width: 50, height: 50 }}
					/>
					Tense
				</ToggleButton>
				<ToggleButton value="bored" sx={buttonStyling}>
					<img
						src={boredIcon}
						alt="bored"
						style={{ width: 50, height: 50 }}
					/>
					Bored
				</ToggleButton> */
}

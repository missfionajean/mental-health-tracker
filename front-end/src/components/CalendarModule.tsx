import { DateCalendar } from "@mui/x-date-pickers";

function CalendarModule() {
	return (
		<DateCalendar
			sx={{
				// calendar background
				backgroundColor: "#000000ff",

				// header (month + arrows)
				"& .MuiPickersCalendarHeader-label": {
					color: "white",
					fontWeight: 600,
				},
				"& .MuiPickersArrowSwitcher-button": {
					color: "white",
				},

				// weekday labels (Mon, Tue, etc.)
				"& .MuiDayCalendar-weekDayLabel": {
					color: "#9a9a9aff",
					fontWeight: 600,
				},

				// day numbers
				"& .MuiPickersDay-root": {
					color: "#858585ff",
				},

				// selected day
				"& .MuiPickersDay-root.Mui-selected": {
					backgroundColor: "#1976d2",
					color: "white",
				},

				// today's date
				"& .MuiPickersDay-today": {
					border: "1px solid #1976d2",
				},

				// hover
				"& .MuiPickersDay-root:hover": {
					backgroundColor: "#e3f2fd",
				},
			}}
		/>
	);
}

export default CalendarModule;

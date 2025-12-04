import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CalendarModule from './components/CalendarModule';

import DayTray from './components/DayTray';

export default function DateCalendarReferenceDate() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CalendarModule />
        <DayTray />
    </LocalizationProvider>
  );
}

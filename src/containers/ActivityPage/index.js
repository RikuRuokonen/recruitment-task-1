import styled from "styled-components";
import { DateTime } from "luxon";
import ActivityCalendar from "../../components/ActivityCalendar";
import {
  getCurrentMonth,
  getPaddingForFullWeek,
} from "../../utils/calendarUtils";

const Container = styled.div`
  padding: 1rem;
`;

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ActivityPage = () => {
  const calendarValues = [];
  const currentMonthObject = getCurrentMonth();
  console.log(currentMonthObject);
  console.log(new Date(currentMonthObject.firstDayOfMonth).getDay());
  //0-6, sun-sat

  const sizeOfCalendarGrid =
    currentMonthObject.daysInMonth +
    getPaddingForFullWeek(currentMonthObject.firstDayOfMonth);

  console.log(sizeOfCalendarGrid);
  let helper = 0;
  for (let i = 0; i <= sizeOfCalendarGrid; i++) {
    calendarValues.push({
      date: new Date(currentMonthObject.firstDayOfMonth + 1),
      weekday: weekdays[helper],
    });
    helper === 6 ? (helper = 0) : helper++;
  }

  console.log(calendarValues);

  return (
    <Container>
      <ActivityCalendar calendarValues={calendarValues} />
    </Container>
  );
};

export default ActivityPage;

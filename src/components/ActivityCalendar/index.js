import styled from "styled-components";

const DayView = styled.div`
  width: 60px;
`;

const ActivityCalendar = ({ calendarValues }) => (
  <div>
    <h2>test</h2>
    {calendarValues.map((val) => (
      <DayView>
        <span>{val.number}</span>
      </DayView>
    ))}
  </div>
);

export default ActivityCalendar;

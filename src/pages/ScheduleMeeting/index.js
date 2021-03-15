import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const CalendarSchedule = lazy(() => import("../../components/CalendarSchedule"));

const ScheduleMeeting = ({location}) => {
  return <Container>
    <ScrollToTop />
    <CalendarSchedule/>
  </Container>
}

export default ScheduleMeeting

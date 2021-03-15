import { lazy } from "react";
import "./meeting.styles.css";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const CalendarSchedule = lazy(() => import("../../components/CalendarSchedule"));

const ScheduleMeeting = ({location}) => {
  return(
      <div>
          <div className="menu-bar">
            <h3 style={{ paddingTop: "3rem" , color:"#E7E7E7"}}>Schedule Meeting</h3>
        </div>
        <Container>
        <ScrollToTop />
            <CalendarSchedule/>
        </Container>
      </div>
  
  )
}

export default ScheduleMeeting

const routes = [
    {
      path: ["/", "/home"],
      exact: true,
      component: "Home",
    },
    {
      path: ["/register"],
      exact: true,
      component: "Register"
    },
    {
      path: ["/mentors"],
      component: "Mentors"
    },
    {
      path: ["/dashboard"],
      component: "Dashboard"
    },
    {
      path: ["/scheduleMeeting"],
      component: ["ScheduleMeeting"]
    },
    {
      path: ["/meetingConfirmed"],
      component: ["MeetingConfirmed"]
    }
  ];
  
  export default routes;
  
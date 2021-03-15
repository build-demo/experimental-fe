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
    }
  ];
  
  export default routes;
  
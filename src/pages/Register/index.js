import { lazy } from "react";

import "./Profile.styles.css";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const RegisterForm = lazy(() => import("../../components/RegisterForm"));

const Profile = ({location}) => {
  return <Container>
    <ScrollToTop />
    <RegisterForm/>
  </Container>
}

export default Profile;

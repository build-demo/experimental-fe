import { useEffect, useState } from "react";
import MentorCard from "./MentorCard.component";
import { getAllMentors } from "../../api/api";

import "./Mentors.styles.css";
import { getParameterByName } from "../../lib/utils";

const Mentors = (props) => {
  const { search } = props.location;
  const [mentors, setMentors] = useState([{}, {}, {}, {}, {},{},{}, {}]);

  const updateInfo = (info) => {
    console.log(info)
    setMentors(info)
  }

  useEffect(() => {
    const fetchMentors = async () => {
      let email = getParameterByName("email")
      let proficientLanguages = [getParameterByName("language")]
      const { data } = await getAllMentors(email, proficientLanguages);
      data && updateInfo(data);
    };
    fetchMentors();
  }, [search]);

  return (
    <>
    <div className="menu-bar">
      <h3 style={{ paddingTop: "3rem" , color:"#E7E7E7"}}> Pick your Mentor</h3>
    </div>
    <div className="grid-container" >
      {mentors && mentors.length ? (
        mentors.map((mentor) => {
          return(
          <div key={mentor.email} style={{ margin: "3rem 0" }}>
            <MentorCard mentorProfile={mentor}/>
          </div>
        )})
      ) : (
        <div>There are no mentors</div>
      )}
    </div>
    </>
  );
};

export default Mentors;

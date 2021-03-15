import { useEffect, useState } from "react";
import MentorCard from "./MentorCard.component";
import { getAllMentors } from "../../api/api";

import "./Mentors.styles.css";

const Mentors = (props) => {
  const { search } = props.location;
  const [mentors, setMentors] = useState([{}, {}, {}, {}, {},{},{}, {}]);

  useEffect(() => {
    const fetchMentors = async () => {
      const { data } = await getAllMentors(search);
      data && setMentors(data.users);
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
        mentors.map((mentor) => (
          <div key={mentor._id} style={{ margin: "3rem 0" }}>
            <MentorCard mentorProfile={mentor} />
          </div>
        ))
      ) : (
        <div>There are no mentors</div>
      )}
    </div>
    </>
  );
};

export default Mentors;

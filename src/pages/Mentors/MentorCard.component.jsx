import { config } from "../../config";
import { getParameterByName } from "../../lib/utils";
import "./mentorcard.styles.css";

const MentorCard = (mentorProfile) => {
  console.log(mentorProfile['mentorProfile'])
  let email = getParameterByName("email")
  const calLink = "/scheduleMeeting?email:"+email+"&mentorEmail:"+mentorProfile['mentorProfile'].email
  const toMeeting = () => {
    // eslint-disable-next-line no-restricted-globals
    location.href =calLink
  }
  return (
    <div className="our-team">
      <div className="picture">
        <img
          alt=""
          className="img-fluid"
          src={mentorProfile['mentorProfile'].profilepicture}
        />
      </div>
      <div className="team-content">
        <h3 className="name">{mentorProfile['mentorProfile'].name}r</h3>
        <h4 className="title">MLH Mentor</h4>
      </div>
      <button className="btn" onClick={toMeeting}>Calendar</button>
      <ul className="social">
        <li>
          <a
            href="https://codepen.io/collection/XdWJOQ/"
            class="fa fa-facebook"
            aria-hidden="true"
          >
            <i class="devicon-python-plain"></i>
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/collection/XdWJOQ/"
            class="fa fa-twitter"
            aria-hidden="true"
          >
            <i class="devicon-javascript-plain"></i>
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/collection/XdWJOQ/"
            class="fa fa-google-plus"
            aria-hidden="true"
          >
            <i class="devicon-ruby-plain"></i>
          </a>
        </li>
        {/* <li>
          <a
            href="https://codepen.io/collection/XdWJOQ/"
            class="fa fa-linkedin"
            aria-hidden="true"
          ></a>
        </li> */}
      </ul>
    </div>
  );
};

export default MentorCard;

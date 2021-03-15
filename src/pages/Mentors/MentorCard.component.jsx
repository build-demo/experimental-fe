import "./mentorcard.styles.css";

const MentorCard = ({ mentorProfile }) => {
  const { javascript, ruby, python } = mentorProfile;
  return (
    <div className="content">
      <div className="mentor-card">
        <div className="firstinfo">
          <img src="https://i.ibb.co/Rv1Tg53/unblockme.png" alt="now" />
          <div className="profileinfo">
            <h1>{mentorProfile.name}</h1>
            <h3>{}</h3>
            <p className="bio">
              {mentorProfile.bio ||
                "MLH mentor and a Programming Ninja. Bio will be updated shortly"}
            </p>
            <a href={mentorProfile.calendar}>click to access Calender</a>
          </div>
        </div>
      </div>
      <div className="badgescard">
        {" "}
        <i className="devicon-ruby-plain colored"></i>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-python-plain-wordmark colored"></i>
        <span className="devicons devicons-django"></span>
        <span className="devicons devicons-python"> </span>
        <span className="devicons devicons-codepen"></span>
        <span className="devicons devicons-javascript_badge"></span>
        <span className="devicons devicons-gulp"></span>
        <span className="devicons devicons-angular"></span>
        <span className="devicons devicons-sass"> </span>
      </div>
    </div>
  );
};

export default MentorCard;

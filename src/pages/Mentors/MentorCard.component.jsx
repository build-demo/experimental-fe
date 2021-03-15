import "./mentorcard.styles.css";

const MentorCard = ({ mentorProfile }) => {
  const { javascript, ruby, python } = mentorProfile;
  return (
    // <div className="content">
    //   <div className="mentor-card">
    //     <div className="firstinfo">
    //       <img src="https://i.ibb.co/Rv1Tg53/unblockme.png" alt="now" />
    //       <div className="profileinfo">
    //         <h1>{mentorProfile.name}</h1>
    //         <h3>{}</h3>
    //         <p className="bio">
    //           {mentorProfile.bio ||
    //             "MLH mentor and a Programming Ninja. Bio will be updated shortly"}
    //         </p>
    //         <a href={mentorProfile.calendar}>click to access Calender</a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="badgescard">
    //     {" "}
    //     <i className="devicon-ruby-plain colored"></i>
    //     <i className="devicon-javascript-plain colored"></i>
    //     <i className="devicon-python-plain-wordmark colored"></i>
    //     <span className="devicons devicons-django"></span>
    //     <span className="devicons devicons-python"> </span>
    //     <span className="devicons devicons-codepen"></span>
    //     <span className="devicons devicons-javascript_badge"></span>
    //     <span className="devicons devicons-gulp"></span>
    //     <span className="devicons devicons-angular"></span>
    //     <span className="devicons devicons-sass"> </span>
    //   </div>
    // </div>
    <div className="our-team">
      <div className="picture">
        <img
          alt=""
          className="img-fluid"
          src="https://picsum.photos/130/130?image=1027"
        />
      </div>
      <div className="team-content">
        <h3 className="name">Michele Miller</h3>
        <h4 className="title">Web Developer</h4>
      </div>
      <ul className="social">
        <li>
          <a
            href="https://codepen.io/collection/XdWJOQ/"
            class="fa fa-facebook"
            aria-hidden="true"
          ></a>
        </li>
        <li>
          <a
            href="https://codepen.io/collection/XdWJOQ/"
            class="fa fa-twitter"
            aria-hidden="true"
          ></a>
        </li>
        <li>
          <a
            href="https://codepen.io/collection/XdWJOQ/"
            class="fa fa-google-plus"
            aria-hidden="true"
          ></a>
        </li>
        <li>
          <a
            href="https://codepen.io/collection/XdWJOQ/"
            class="fa fa-linkedin"
            aria-hidden="true"
          ></a>
        </li>
      </ul>
    </div>
  );
};

export default MentorCard;

import "./mentorcard.styles.css";

const MentorCard = ({ mentorProfile }) => {
  const { javascript, ruby, python } = mentorProfile;
  return (
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
        <h4 className="title">MLH Mentor</h4>
      </div>
      <button className="btn"> calendar</button>
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

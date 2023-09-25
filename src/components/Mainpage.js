import "./Mainpage.css";
import profile from "../media/profile.jpg";
import { Container } from "react-bootstrap";

function Mainpage() {
  return (
    <div className="main-wrapper container">
      <section className="profile-section">
        <div className="profile-photo justify-self-center;">
          <img className="profile-picture" src={profile} alt="hero-photo"></img>
        </div>
        <div className="profile-text">
          <p className="big-text">
            Helping businnesses develop in the<br></br> digital world.
          </p>
          <p className="small-text">
            Innovative frameworks for more systematic and faster websites. For
            more predictable growth and successful products.
          </p>
          <button className="btn btn-primary">Start</button>
        </div>
      </section>
      <section className="company-grid">
        <i class="fa-brands fa-angular"></i>
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-vuejs"></i>
        <i class="fa-brands fa-html5"></i>
        <i class="fa-solid fa-code"></i>
        <i class="fa-brands fa-css3"></i>
        <i class="fa-brands fa-sass"></i>
        <i class="fa-brands fa-bootstrap"></i>
        <i class="fa-brands fa-wordpress"></i>
        <i class="fa-brands fa-square-js"></i>
      </section>
      <section className="packages-grid">
        <div className="package-card"></div>
      </section>
    </div>
  );
}

export default Mainpage;

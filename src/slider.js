import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import video from "./assets/Video.mp4";

const register_page = "./register";
const login_page = "./login";

export function Slider() {
  return (
    <section className="slider">
      <div className="sliderDesktop">
        <video
          className="bgVideo"
          playsInline
          autoPlay
          loop
          muted
          src={video}
          type="video/mp4"
        ></video>
        <div className="sliderOverlayText">
          <h1 className="sliderHead">Welcome to Astro-Learn!</h1>
          <p className="sliderText" align="center">
            Start a free and fun way to learn different topics. Make an account
            to start playing today!
            <br></br>
            <Button className="button" variant="light" size="lg">
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={register_page}
              >
                REGISTER
              </Link>
            </Button>
            <Button className="button" variant="light" size="lg">
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={login_page}
              >
                LOGIN
              </Link>
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Slider;

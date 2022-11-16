import video from "./assets/Video.mp4";

export function Slider() {
  return (
    <section class="slider">
      <div class="sliderDesktop">
        <video
          class="bgVideo"
          playsInline
          autoPlay
          loop
          muted
          src={video}
          type="video/mp4"
        >
        </video>
        <div class="sliderOverlayText">
            <h1 class="sliderHead">Welcome to Astro-Learn!</h1>
            <p class="sliderText" align="center">
              Start a free and fun way to learn different topics. Make an
              account to start playing today!
              <br></br>
              <a href="#tutorial" class="button">
                SIGNUP
              </a>
              <a href="#tutorial" class="button">
                LOGIN
              </a>
            </p>
          </div>
      </div>
    </section>
  );
}
export default Slider;

import video from "../assets/pexels-dan-cristian-pădureț-4828773-1920x1080-50fps.mp4";
import Navbar from "./Navbar";


const Landing = () => {

    const styles = {
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        };

    const overlayStyles = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        // height: "100%",
        background: "transparent"
    };

  return (
    <div style={styles}>
  <video
    style={{
      width: "100%",
      height: "102vh",
      objectFit: "cover",
    }}
    src={video}
    autoPlay
    loop
    muted
  />
  <div style={overlayStyles}>
    <Navbar />
  </div>
</div>
  );
};

export default Landing;

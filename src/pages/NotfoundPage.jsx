import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";

import image404 from "../assets/imgs/theme/404.png";

const BlankPage = () => {
  return (
    <>
      <div className="screen-overlay"></div>
      <Aside />
      <main className="main-wrap">
        <Header />
        <section className="content-main" style={notFoundStyle}>
          <h1>404</h1>
          <h4>Page not found</h4>
          <img src={image404} alt="" style={imgstyle} />

          <h2>Oops! It looks like you&apos;ve taken a wrong step.</h2>
          <p>
            Don&apos;t worry, even the most stylish shoes can occasionally lead
            you off the path. <br /> Let&apos;s redirect you back to our
            stunning collection of ladies&apos; footwear. <br /> Click here to
            start shopping and step back into fashion!
          </p>
        </section>
        <Footer />
      </main>
    </>
  );
};

const notFoundStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
};

const imgstyle = {
  width: "200px",
  height: "200px",
  margin: "20px 0",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "50%",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  border: "1px solid #e5e5e5",
};

export default BlankPage;

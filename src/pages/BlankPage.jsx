import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";


const BlankPage = () => {
  return (
    <>
      <div className="screen-overlay"></div>
      <Aside />
      <main className="main-wrap">
        <Header />
        <section className="content-main">
          <h1>BlankPage</h1>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default BlankPage;

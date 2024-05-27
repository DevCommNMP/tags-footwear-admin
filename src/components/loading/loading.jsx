import loaderImg from "../../assets/imgs/loader/loader.gif"
const LoaderImg = () => {
  return (
    <>
      <div className="loaderContainer">
        <img src={loaderImg} className="img-fluid" alt="loading" style={{ maxWidth: "100px" }} />
      </div>
    </>
  );
};

export default LoaderImg;

import MyDropzone from "./myDropzone";

const ProductMainImage = ({ setProductImage }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4>Main Image</h4>
        </div>
        <MyDropzone setProductImage={setProductImage} />
      </div>
    </>
  );
};

export default ProductMainImage;

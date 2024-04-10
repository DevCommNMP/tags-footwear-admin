import MyDropzone from "./myDropzone";

const ProductMainImage = ({setUpdatedProductImage}) => {
  return (
    <>
      <MyDropzone setUpdatedProductImage={setUpdatedProductImage}/>
    </>
  );
};

export default ProductMainImage;

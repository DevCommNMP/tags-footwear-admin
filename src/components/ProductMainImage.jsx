import MyDropzone from "./myDropzone";

const ProductMainImage = ({setProductImage}) => {
  return (
    <>
      <MyDropzone setProductImage={setProductImage}/>
    </>
  );
};

export default ProductMainImage;

import MultipleUploadDropzone from "./MultipleUploadDropzone"

const ProductSubImages = ({setUpdatedProductSubImage}) => {
  return (
    <div>
      <MultipleUploadDropzone setUpdatedProductSubImage={setUpdatedProductSubImage} />
    </div>
  )
}

export default ProductSubImages
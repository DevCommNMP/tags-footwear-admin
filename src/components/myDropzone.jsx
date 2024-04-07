import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import placeholderImg from "../assets/imgs/theme/add_image.svg";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { updateProductImage } from "../redux/actions/product/productActions";

const MyDropzone = () => {
  const [selectedFiles, setSelectedFiles] = useState([0]);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const dispatch = useDispatch();

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      )
    );
    setPlaceholderVisible(false);
  }, []);

  const removeFile = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
    if (newFiles.length === 0) {
      setPlaceholderVisible(true);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5242880,
    multiple: false,
    className: "dropzone",
    activeClassName: "dropzone-active",
  });

  const uploadFiles = async () => {
    const id = "66092732579e90fb6cf26c38";
    const formData = new FormData();
    formData.append('image', selectedFiles[0].file);
    // selectedFiles.forEach((file) => {
    //   formData.append('image', file);
    // });

    dispatch(updateProductImage({ id, image:selectedFiles[0] }));
  };

  // console.log(selectedFiles)
  const renderSelectedFiles = () => {
    return (
      <div>
        {selectedFiles.map((file, index) => (
          <div key={index} className="selected-file">
            <img
              src={file.preview}
              alt={`Preview ${file.name}`}
              className="img-fluid"
            />
            <p>{file.name}</p>
            <div className="d-flex justify-content-around">
              <button className="btn btn-dark justify-center text-center" style={{ width: '100%' }} onClick={() => removeFile(index)}>Replace</button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h4>Main Image</h4>
      </div>
      <div {...getRootProps()} className="card-body">
        <input {...getInputProps()} />
        {placeholderVisible ? (
          <div className="placeholder">
            <p>Drag &apos;N&apos; drop some files here, or click to select files</p>
            <img
              src={placeholderImg}
              alt="Placeholder"
              className="img-fluid"
            />
          </div>
        ) : null}
        {renderSelectedFiles()}
      </div>
      {selectedFiles.length > 0 && (
        <div className="mx-3 mb-15">
          <button className="btn btn-danger mt-5 justify-center" style={{ width: '100%' }} onClick={uploadFiles}>Upload Selected</button>
        </div>
      )}
    </div>
  );
};


console.log("french fries");

console.log();
export default MyDropzone;

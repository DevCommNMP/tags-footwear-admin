import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { updateProductSubImage } from "../redux/actions/product/productActions";

const MultipleUploadDropzone = () => {
  const dispatch = useDispatch();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const uploadImageHandler = () => {
    const id = "66092732579e90fb6cf26c38"; // Example id
    if (selectedFiles.length > 0) {
      dispatch(updateProductSubImage({ id, image: selectedFiles }));
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (selectedFiles.length + acceptedFiles.length <= 10) {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    } else {
      console.log("Maximum number of files exceeded");
    }
  }, [selectedFiles]);

  const removeFile = (fileIndex) => {
    const updatedFiles = selectedFiles.filter(
      (file, index) => index !== fileIndex
    );
    setSelectedFiles(updatedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
    className: "dropzone",
    activeClassName: "dropzone-active",
  });

  const renderSelectedFiles = () => {
    return (
      <div>
        {selectedFiles.map((file, index) => (
          <div key={index} style={multipleImgStyle}>
            <button className="btn btn-dark" onClick={() => removeFile(index)}>
              &#10005;
            </button>
            <img
              src={file.preview}
              alt={`Preview ${file.name}`}
              style={{
                maxWidth: "100px",
                maxHeight: "100px",
                margin: "2px 8px",
              }}
            />
            <p>{file.name}</p>
          </div>
        ))}
      </div>
    );
  };

  const multipleImgStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className="card">
      <div className="card-header">
        <h4>Sub Images</h4>
      </div>

      <div className="card-body">
        {renderSelectedFiles()}
        <div {...getRootProps()} className="flex-items-center">
          <input {...getInputProps()} />
          <p>
            <div className="btn btn-outline-danger mb-5">+</div>
          </p>
        </div>
        <button className="btn btn-danger mt-5 justify-center" style={{ width: '100%' }} onClick={uploadImageHandler}>Upload Selected</button>
      </div>
    </div>
  );
};

export default MultipleUploadDropzone;

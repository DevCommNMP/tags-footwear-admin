import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { updateProductSubImage } from "../redux/actions/product/productActions";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";

const MultipleUploadDropzone = ({ setUpdatedProductSubImage }) => {
  const dispatch = useDispatch();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const { id } = useParams();

  const uploadImageHandler = async () => {
    if (selectedFiles.length > 0) {
      setLoading(true);
      try {
        const action = await dispatch(updateProductSubImage({ id, image: selectedFiles }));
        
        if (action.payload.success) {
          setMessage("Product image updated successfully !");
          setAlertType("success");
          setSelectedFiles([]);
          // Ensure setUpdatedProductSubImage is invoked as a function
          setUpdatedProductSubImage(true); // Assuming it should be set to true
        } else {
          setMessage("Error occurred while updating product image !");
          setAlertType("error");
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage("Error occurred while updating product image !");
        setAlertType("error");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [message]);

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
    const updatedFiles = selectedFiles.filter((file, index) => index !== fileIndex);
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
        {message && (
          <Alert variant={alertType} onClose={() => setMessage("")}>
            <p>{message}</p>
          </Alert>
        )}
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
        <button className="btn btn-danger mt-5 justify-center" style={{ width: "100%" }} onClick={uploadImageHandler} disabled={loading}>
          {loading ? "Loading..." : "Upload Selected"}
        </button>
      </div>
    </div>
  );
};

export default MultipleUploadDropzone;

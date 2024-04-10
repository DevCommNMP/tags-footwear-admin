import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import placeholderImg from "../assets/imgs/theme/add_image.svg";
import { useDispatch } from "react-redux";
import { updateProductImage } from "../redux/actions/product/productActions";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";

const MyDropzone = ({ setUpdatedProductImage }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage(false);
      setErrorMessage(false);
      setMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [successMessage, errorMessage]);

  const uploadFiles = async () => {
    const formData = new FormData();
    formData.append("image", selectedFiles[0]);
    setLoading(true);
    try {
      const action = await dispatch(updateProductImage({ id, image: selectedFiles[0] }));
      if (action.payload.status) {
        setSuccessMessage(true);
        setErrorMessage(false); // Reset error message state
        setMessage("Product image updated successfully !");
        setSelectedFiles([]);
        setPlaceholderVisible(true);
        setUpdatedProductImage(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(true);
      setSuccessMessage(false); // Reset success message state
      setMessage("Error occurred while updating product image !");
    }
    setLoading(false);
  };

  const renderSelectedFiles = () => {
    return (
      <div>
        {successMessage && (
          <Alert variant="success" onClose={() => setSuccessMessage(false)}>
            <Alert.Heading>{message}</Alert.Heading>
          </Alert>
        )}
        {errorMessage && (
          <Alert variant="danger" onClose={() => setErrorMessage(false)}>
            <Alert.Heading>{message}</Alert.Heading>
           
          </Alert>
        )}
        {selectedFiles.map((file, index) => (
          <div key={index} className="selected-file">
            <img src={file.preview} alt={`Preview ${file.name}`} className="img-fluid" />
            <p>{file.name}</p>
            <div className="d-flex justify-content-around">
              <button className="btn btn-dark justify-center text-center" style={{ width: "100%" }} onClick={() => removeFile(index)}>
                Replace
              </button>
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
            <p>Drag 'N' drop some files here, or click to select files</p>
            <img src={placeholderImg} alt="Placeholder" className="img-fluid" />
          </div>
        ) : null}
        {renderSelectedFiles()}
      </div>
      {selectedFiles.length > 0 && (
        <div className="mx-3 mb-15">
          <button className="btn btn-danger mt-5 justify-center" style={{ width: "100%" }} onClick={uploadFiles} disabled={loading}>
            {loading ? "Loading ...." : "Upload Selected"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MyDropzone;

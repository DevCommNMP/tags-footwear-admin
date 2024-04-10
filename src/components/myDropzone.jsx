import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import placeholderImg from "../assets/imgs/theme/add_image.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateProductImage } from "../redux/actions/product/productActions";
import { useParams } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import Alert from "react-bootstrap/Alert";

const MyDropzone = ({ setProductImage }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);
  const [imageCount, setimageCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);
  const [message, setMessage] = useState("");
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
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  const uploadFiles = async () => {
    const formData = new FormData();
    formData.append("image", selectedFiles[0]);

    dispatch(updateProductImage({ id, image: selectedFiles[0] }))
      .then((action) => {
        if (action.payload.status) {
          setSuccessMessage(true);
          setMessage("Product image updated successfully !");
          setSelectedFiles([]);
          setPlaceholderVisible(true);
          setProductImage(true);
        }
      })
      .catch((error) => {
        setErrorMessage(true);
        setMessage("Error occurred while updating product image !");
        console.error("Error:", error);
      });
  };

  const renderSelectedFiles = () => {
    return (
      <div>
        {successMessage && message && (
          <Alert variant="success" onClose={() => setSuccessMessage(false)}>
            <Alert.Heading>Success!</Alert.Heading>
            <p>{message}</p>
          </Alert>
        )}
        {errorMessage && message && (
          <Alert variant="danger" onClose={() => setErrorMessage(false)}>
            <Alert.Heading>Error!</Alert.Heading>
            <p>{message}</p>
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
    <>
      {" "}
      <div {...getRootProps()} className="card-body">
        <input {...getInputProps()} />
        {placeholderVisible ? (
          <div className="placeholder">
            <p>Drag &apos;N&apos; drop some files here, or click to select files</p>
            <img src={placeholderImg} alt="Placeholder" className="img-fluid" />
          </div>
        ) : null}
        {renderSelectedFiles()}
      </div>
      {selectedFiles.length > 0 && (
        <div className="mx-3 mb-15">
          <button className="btn btn-danger mt-5 justify-center" style={{ width: "100%" }} onClick={uploadFiles}>
            Upload Selected
          </button>
        </div>
      )}
    </>
  );
};

export default MyDropzone;

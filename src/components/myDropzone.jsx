import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import placeholderImg from "../assets/imgs/theme/add_image.svg";

const MyDropzone = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  const onDrop = useCallback((acceptedFiles) => {
    // Process the dropped files
    setSelectedFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    setPlaceholderVisible(false); // Hide placeholder image when file is selected
  }, []);

  const removeFile = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
    if (newFiles.length === 0) {
      setPlaceholderVisible(true); // Show placeholder image if no files are selected
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5242880, // 5 MB
    multiple: false, // Allow only one file to be uploaded at a time
    className: "dropzone",
    activeClassName: "dropzone-active",
  });

  const renderSelectedFiles = () => {
    return (
      <div>
        {selectedFiles.map((file, index) => (
          <div key={index} className="selected-file" >
            <img
              src={file.preview}
              alt={`Preview ${file.name}`}
              className="img-fluid"
            />
            <p>{file.name}</p>
            <div className="d-flex justify-content-around">
            <button className="btn btn-dark" onClick={() => removeFile(index)}>Replace</button>
            <button className="btn btn-danger" onClick={() => removeFile(index)}>Upload</button>
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
    </div>
  );
};

export default MyDropzone;

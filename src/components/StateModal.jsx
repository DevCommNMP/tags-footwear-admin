import { useState, useEffect } from "react";

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.classList.contains("cModal")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <h1>Modal Example</h1>
      <button onClick={toggleModal}>Toggle Modal</button>

      <div className={`cModal${isOpen ? " open" : ""}`}>
        <div className="cModalContent">
          <span className="close" onClick={toggleModal}>
            &times;
          </span>
          <h2>Modal Title</h2>
          <p>This is the content of the modal.</p>
        </div>
      </div>
    </div>
  );
}

export default ModalExample;

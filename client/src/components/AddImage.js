import React, { useState } from "react";
import AddImageModal from "./AddImageModal";
const AddImage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button
        onClick={openModal}
        style={{
          position: "fixed",
          right: "5%",
          bottom: "7%",
          background: "#6F2CF4",
          color: "#fff",
          height: "50px",
          width: "50px",
          border: 0,
          borderRadius: "50%",
          boxShadow: "0 0 6px rgba(0, 0, 0, 0.47)",
          fontSize: "1.5rem",
          zIndex: 10,
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
      <AddImageModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default AddImage;

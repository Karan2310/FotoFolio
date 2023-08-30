import React from "react";
import { Modal, Button } from "@mantine/core";
import { CloseButton } from "@mantine/core";

const ImageModal = ({ opened, setOpened, image }) => {
  const downloadImage = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", image, true);
    xhr.responseType = "blob";

    xhr.onload = function () {
      const blob = xhr.response;
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "downloaded_image.jpg";
      a.click();

      URL.revokeObjectURL(url);
    };

    xhr.send();
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      size="xl"
      title={null}
      centered
      withCloseButton={false}
      hideOverlay
      sx={{
        ".mantine-Modal-content": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: 0,
        },
        ".mantine-Modal-body": {
          padding: 0,
        },
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <img
          src={image}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />

        <Button
          title="download"
          variant="filled"
          size="xs"
          style={{
            position: "absolute",
            zIndex: 1,
            top: "10px",
            left: "10px",
            height: "28px",
            width: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff",
          }}
          onClick={downloadImage}
        >
          <i
            className="fa-solid fa-download"
            style={{ color: "#000", fontSize: "0.9rem" }}
          ></i>
        </Button>

        <CloseButton
          variant="default"
          title="Close "
          size="md"
          iconSize={20}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 1,
          }}
          onClick={() => setOpened(false)}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;

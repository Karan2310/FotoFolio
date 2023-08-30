import React from "react";
import { Modal, Button } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { CloseButton, Group } from "@mantine/core";

const ImageModal = ({ opened, setOpened, image }) => {
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
          srcSet=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />

        <CloseButton
          variant="default"
          title="Close popover"
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

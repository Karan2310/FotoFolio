import React, { useState } from "react";
import {
  TextInput,
  Button,
  Group,
  Box,
  Modal,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useCookies } from "react-cookie";
import ImageDropzone from "./ImageDropzone";

const AddImageModal = ({ isModalOpen, setIsModalOpen }) => {
  const theme = useMantineTheme();
  const [cookies, removeCookie] = useCookies(["token", "userId"]);
  const [previewImage, setPreviewImage] = useState(null);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const form = useForm({
    initialValues: {
      userId: cookies.userId,
      title: "",
      path: previewImage,
    },

    validate: {
      title: (value) => (value.trim().length < 2 ? "Title is too short" : null),
      previewImage: (file) => (!previewImage ? "Add Image" : null),
    },
  });

  return (
    <Modal
      opened={isModalOpen}
      onClose={closeModal}
      title="Upload Image"
      centered
    >
      <Box mx="auto">
        <form
          onSubmit={form.onSubmit((values) => {
            form.setFieldValue("image", previewImage);
            console.log(values);
            form.reset();
            setPreviewImage(null);
            closeModal();
          })}
        >
          <TextInput
            withAsterisk
            label="Title"
            placeholder="Enter your Title"
            {...form.getInputProps("title")}
          />

          <div className="mt-3">
            <ImageDropzone
              previewImage={previewImage}
              setPreviewImage={setPreviewImage}
            />
          </div>

          <Group position="right" mt="md">
            <Button
              type="submit"
              disabled={!form.isValid || !previewImage}
              color={theme.colorScheme === "dark" ? "dark" : "blue"}
            >
              Upload
            </Button>
          </Group>
        </form>
      </Box>
    </Modal>
  );
};

export default AddImageModal;

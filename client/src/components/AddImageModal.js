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
import { useSelector } from "react-redux";
import axios from "axios";
import { SERVER_URL } from "../config";

const AddImageModal = ({ isModalOpen, setIsModalOpen }) => {
  const theme = useMantineTheme();
  const [cookies, removeCookie] = useCookies(["token", "userId"]);
  const [previewImage, setPreviewImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const userRed = useSelector((state) => state.user);
  axios.defaults.maxBodyLength = 10000000; // Increase the limit
  axios.defaults.maxContentLength = 10000000; // Increase the limit

  const userName = userRed.name;
  const userId = userRed.id;

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const form = useForm({
    initialValues: {
      title: "",
      path: previewImage,
      authorId: userRed.userId,
      authorName: userRed.name,
    },

    validate: {
      title: (value) => (value.trim().length < 2 ? "Title is too short" : null),
      previewImage: (file) => (!previewImage ? "Add Image" : null),
    },
  });

  const handleSubmit = async (values) => {
    try {
      const val = {
        title: values.title,
        path: previewImage,
        authorId: userId,
        authorName: userName,
      };
      setUploading(true);
      const response = await axios.post(`${SERVER_URL}/post/upload`, val);
      form.reset();
      setPreviewImage(null);
      closeModal();

      return response.data;
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };
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
            handleSubmit(values);
            // form.reset();
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
              uploading={uploading}
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

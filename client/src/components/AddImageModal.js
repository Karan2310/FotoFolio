import React, { useState } from "react";
import { TextInput, Checkbox, Button, Group, Box, Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useCookies } from "react-cookie";

const AddImageModal = ({ isModalOpen, setIsModalOpen }) => {
  const [cookies, removeCookie] = useCookies(["token", "userId"]);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const form = useForm({
    initialValues: {
      userId: cookies.userId,
      title: "",
    },

    validate: {
      title: (value) => (value.length < 2 ? "Invalid Title" : null),
    },
  });
  return (
    <>
      <Modal
        opened={isModalOpen}
        onClose={closeModal}
        title="Upload Image"
        centered
      >
        <Box mx="auto">
          <form
            onSubmit={form.onSubmit((values) => {
              console.log(values);
              form.reset();
            })}
          >
            <TextInput
              withAsterisk
              label="Title"
              placeholder="Enter your Title"
              {...form.getInputProps("title")}
            />

            <Group position="right" mt="md">
              <Button type="submit">Upload</Button>
            </Group>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default AddImageModal;

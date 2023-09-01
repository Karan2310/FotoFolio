import React from "react";
import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

const ImageDropzone = ({ previewImage, setPreviewImage, uploading }) => {
  const theme = useMantineTheme();

  const handleDrop = (files) => {
    console.log("accepted files", files);
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <Dropzone
      loading={uploading}
      onDrop={handleDrop}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={3 * 1024 ** 2}
      accept={`${IMAGE_MIME_TYPE}, image/heic, image/heif`}
      maxFiles={1}
    >
      <Group
        position="center"
        spacing="xl"
        style={{ minHeight: rem(220), pointerEvents: "none" }}
      >
        <Dropzone.Accept>
          <IconUpload
            size="3.2rem"
            stroke={1.5}
            color={
              theme.colors[theme.primaryColor][
                theme.colorScheme === "dark" ? 4 : 6
              ]
            }
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            size="3.2rem"
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto size="3.2rem" stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag an image here or click to select a file
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach a file, it should not exceed 5mb
          </Text>
        </div>

        {previewImage && (
          <img
            src={previewImage}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        )}
      </Group>
    </Dropzone>
  );
};

export default ImageDropzone;

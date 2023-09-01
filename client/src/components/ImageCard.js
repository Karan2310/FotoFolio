import { IconEye, IconMessageCircle } from "@tabler/icons-react";
import {
  Card,
  Text,
  Group,
  Center,
  createStyles,
  getStylesRef,
  rem,
  ActionIcon,
} from "@mantine/core";
import ImageModal from "./ImageModal";
import React, { useState } from "react";
import { SERVER_URL } from "../config.js";
import axios from "axios";
import { useSelector } from "react-redux";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    height: rem(280),
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    [`&:hover .${getStylesRef("image")}`]: {
      transform: "scale(1.1)",
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef("image"),
    backgroundSize: "cover",
    transition: "transform 500ms ease",
    backgroundPosition: "center",
  },

  overlay: {
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
  },

  content: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: rem(5),
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  author: {
    color: theme.colors.dark[2],
  },
}));

function ImageCard({
  id,
  image,
  title,
  author,
  views,
  comments,
  link,
  authorId,
  changeRefresh,
  setLoading,
}) {
  const { classes, theme } = useStyles();
  const [opened, setOpened] = useState(false);
  const user = useSelector((state) => state.user);
  const userId = user.id;

  const increaseView = async (id) => {
    try {
      const res = axios.post(`${SERVER_URL}/posts/view/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  function formatViewCount(views) {
    if (views >= 1000) {
      const thousands = views / 1000;
      if (thousands >= 10) {
        return Math.floor(thousands) + "k";
      } else {
        return (Math.round(thousands * 10) / 10).toFixed(1) + "k";
      }
    } else {
      return views.toString();
    }
  }
  const deletePost = async (id) => {
    setLoading(true);
    try {
      const confirmed = window.confirm("Are you sure you want to delete?");
      if (!confirmed) {
        return;
      }

      await axios.delete(`${SERVER_URL}/posts/${id}`);
      changeRefresh();
    } catch (error) {
      console.error("Error deleting post", error);
      alert("Error while deleting post");
    }
    setLoading(false);
  };

  return (
    <>
      <Card
        p="lg"
        shadow="lg"
        className={classes.card}
        radius="md"
        style={{ position: "relative" }}
        component="a"
      >
        {authorId === userId && (
          <ActionIcon
            className="post-delete-btn"
            variant="light"
            color="red"
            onClick={() => deletePost(id)}
          >
            <i class="fa-regular fa-trash-can"></i>
          </ActionIcon>
        )}
        <div
          onClick={() => {
            setOpened(true);
            increaseView(id);
          }}
          style={{ height: "100%" }}
        >
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className={classes.overlay} />

          <div className={classes.content}>
            <div>
              <Text size="lg" className={classes.title} weight={500}>
                {title}
              </Text>

              <Group position="apart" spacing="xs">
                <Text size="sm" className={classes.author}>
                  {author}
                </Text>

                <Group spacing="lg">
                  <Center>
                    <IconEye
                      size="1rem"
                      stroke={1.5}
                      color={theme.colors.dark[2]}
                    />
                    <Text size="sm" className={classes.bodyText} title={views}>
                      {formatViewCount(views)}
                    </Text>
                  </Center>
                  {/* <Center>
                  <IconMessageCircle
                    size="1rem"
                    stroke={1.5}
                    color={theme.colors.dark[2]}
                  />
                  <Text size="sm" className={classes.bodyText}>
                    {comments}
                  </Text>
                </Center> */}
                </Group>
              </Group>
            </div>
          </div>
        </div>
      </Card>
      <ImageModal
        opened={opened}
        setOpened={setOpened}
        image={image}
        title={title}
      />
    </>
  );
}

export default ImageCard;

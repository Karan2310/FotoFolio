import { Tabs } from "@mantine/core";
import ImageCard from "./ImageCard";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ScreenTabs = ({ changeRefresh, setLoading }) => {
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);
  const userId = user.id;
  const myUploads = posts.filter((post) => post.authorId === userId);

  return (
    <Tabs variant="pills" defaultValue="all" color="violet" className="mt-4">
      <Tabs.List
        grow
        position="center"
        sx={{
          backgroundColor: "#f4f4f4",
        }}
      >
        <Tabs.Tab
          value="all"
          sx={{
            fontWeight: "600",
            fontSize: "1rem",
            padding: "0.8rem",
            "&:hover": {
              backgroundColor: "#6f2cf41a",
            },
          }}
        >
          All Photos
        </Tabs.Tab>
        <Tabs.Tab
          value="my"
          // icon={<IconMessageCircle size="0.8rem" />}
          sx={{
            fontWeight: "600",
            fontSize: "1rem",
            padding: "0.8rem",
            "&:hover": {
              backgroundColor: "#6f2cf41a",
            },
          }}
        >
          My Uploads
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="all" pt="lg">
        <div className="container-fluid m-0 p-0">
          <div className="row">
            {posts.length <= 0 && (
              <>
                <h3 className="text-center mt-5" style={{ opacity: 0.3 }}>
                  No posts Uploaded
                </h3>
              </>
            )}
            {posts &&
              posts.map((post, index) => {
                const { _id, path, title, authorName, views, authorId } = post;
                return (
                  <>
                    <div className="col-md-6 col-lg-4 mt-4" key={index}>
                      <ImageCard
                        id={_id}
                        image={path.secure_url}
                        title={title}
                        author={authorName}
                        authorId={authorId}
                        views={views}
                        comments="5"
                        link={path.secure_url}
                        changeRefresh={changeRefresh}
                        setLoading={setLoading}
                      />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="my" pt="lg">
        <div className="container-fluid m-0 p-0">
          <div className="row">
            {myUploads.length <= 0 && (
              <>
                <h3 className="text-center mt-5" style={{ opacity: 0.3 }}>
                  You haven't shared any posts yet.{" "}
                </h3>
              </>
            )}
            {myUploads &&
              myUploads.map((post, index) => {
                const { path, title, authorName, views, authorId } = post;
                return (
                  <>
                    <div className="col-md-6 col-lg-4 mt-4" key={index}>
                      <ImageCard
                        image={path.secure_url}
                        title={title}
                        authorId={authorId}
                        author={authorName}
                        views={views}
                        comments="5"
                        link={path.secure_url}
                        changeRefresh={changeRefresh}
                        setLoading={setLoading}
                      />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </Tabs.Panel>
    </Tabs>
  );
};

export default ScreenTabs;

import { Tabs } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import ImageCard from "./ImageCard";

const ScreenTabs = () => {
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
          // icon={<IconPhoto size="0.8rem" />}
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
            <div className="col-md-6 col-lg-4 mt-4">
              <ImageCard
                image="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                title="Sample Title"
                author="John Doe"
                views="100"
                comments="5"
                link="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
              />
            </div>
            <div className="col-md-6 col-lg-4 mt-4">
              <ImageCard
                image="https://images.pexels.com/photos/1353126/pexels-photo-1353126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="Sample Title"
                author="John Doe"
                views="100"
                comments="5"
                link="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
              />
            </div>
            <div className="col-md-6 col-lg-4 mt-4">
              <ImageCard
                image="https://images.unsplash.com/photo-1682686581580-d99b0230064e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                title="Sample Title"
                author="John Doe"
                views="100"
                comments="5"
                link="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
              />
            </div>
            <div className="col-md-6 col-lg-4 mt-4">
              <ImageCard
                image="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                title="Sample Title"
                author="John Doe"
                views="100"
                comments="5"
                link="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
              />
            </div>
          </div>
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="my" pt="lg">
        <div className="container-fluid m-0 p-0">
          <div className="row">
            <div className="col-md-6 col-lg-4 mt-4">
              <ImageCard
                image="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                title="Sample Title"
                author="John Doe"
                views="100"
                comments="5"
                link="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
              />
            </div>
            <div className="col-md-6 col-lg-4 mt-4">
              <ImageCard
                image="https://images.pexels.com/photos/1353126/pexels-photo-1353126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="Sample Title"
                author="John Doe"
                views="100"
                comments="5"
                link="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
              />
            </div>
          </div>
        </div>
      </Tabs.Panel>
    </Tabs>
  );
};

export default ScreenTabs;

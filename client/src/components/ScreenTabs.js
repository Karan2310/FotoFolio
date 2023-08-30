import { Tabs } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";

const ScreenTabs = () => {
  return (
    <Tabs variant="pills" defaultValue="all" color="violet">
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
          My Photos
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="all" pt="lg">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="my" pt="lg">
        Messages tab content
      </Tabs.Panel>
    </Tabs>
  );
};

export default ScreenTabs;

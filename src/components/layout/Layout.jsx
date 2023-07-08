import { Fragment } from "react";
import { Box, Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <Fragment>
      <Flex>
        <div style={{ flexBasis: "auto" }}>
          <Sidebar />
        </div>
        <Box sx={{ flex: 1 }}>
          <Outlet />
        </Box>
      </Flex>
    </Fragment>
  );
};

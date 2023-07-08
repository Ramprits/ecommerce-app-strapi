import { Flex } from "@mantine/core";

const Header = ({ title }) => {
  return (
    <Flex
      mih={60}
      gap="md"
      px={20}
      justify="space-between"
      align="center"
      direction="row"
      w={"100%"}
      sx={{
        borderBottom: "1px solid #e8e9ea"
      }}
    >
      <h4>{title}</h4>
      <p>rampritsahani@gmail.com</p>
    </Flex>
  );
};
export default Header;

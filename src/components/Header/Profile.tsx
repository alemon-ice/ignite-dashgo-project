import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Rafael Dias</Text>
        <Text color="gray.300" fontSize="small">
          rafael@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Rafael Dias"
        // src="https://github.com/alemon-ice.png"
      />
    </Flex>
  );
}

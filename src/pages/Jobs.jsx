import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading as="h2" size="xl">Live Jobs</Heading>
        <Text>List of live jobs will be displayed here.</Text>
        <Button as={Link} to="/bid" colorScheme="teal" size="md">Place a Bid</Button>
      </VStack>
    </Box>
  );
};

export default Jobs;
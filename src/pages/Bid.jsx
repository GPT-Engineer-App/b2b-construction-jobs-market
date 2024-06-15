import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Bid = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading as="h2" size="xl">Place a Bid</Heading>
        <Text>Fill out the form below to place your bid.</Text>
        <FormControl id="job-id">
          <FormLabel>Job ID</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="bid-amount">
          <FormLabel>Bid Amount</FormLabel>
          <Input type="number" />
        </FormControl>
        <Button colorScheme="teal" size="md">Submit Bid</Button>
      </VStack>
    </Box>
  );
};

export default Bid;
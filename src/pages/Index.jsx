import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to B2B Jobs Marketplace</Heading>
        <Text fontSize="lg">Connecting construction businesses with subcontractors through an efficient e-tendering system.</Text>
        <Button as={Link} to="/jobs" colorScheme="teal" size="lg">View Jobs</Button>
      </VStack>
    </Container>
  );
};

export default Index;
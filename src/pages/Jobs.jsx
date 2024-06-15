import { useEffect, useState } from "react";
import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs from local storage
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading as="h2" size="xl">Live Jobs</Heading>
        {jobs.length === 0 ? (
          <Text>No jobs available.</Text>
        ) : (
          jobs.map((job, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" w="100%">
              <Heading as="h3" size="md">{job.title}</Heading>
              <Text>{job.description}</Text>
              <Text><strong>Location:</strong> {job.location}</Text>
              <Text><strong>Start Date:</strong> {job.startDate}</Text>
              <Button as={Link} to="/bid" colorScheme="teal" size="md" mt={2}>Submit Quote</Button>
            </Box>
          ))
        )}
        <Button as={Link} to="/bid" colorScheme="teal" size="md">Place a Bid</Button>
      </VStack>
    </Box>
  );
};

export default Jobs;
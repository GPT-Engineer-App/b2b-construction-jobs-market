import { Box, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [file, setFile] = useState(null);
  const toast = useToast();

  const navigate = useNavigate(); // Initialize useNavigate

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!jobTitle || !jobDescription || !jobLocation || !startDate) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    // Save job to local storage
    const newJob = { title: jobTitle, description: jobDescription, location: jobLocation, startDate };
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    storedJobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(storedJobs));
    toast({
      title: "Job Posted",
      description: "Your job has been posted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/jobs"); // Redirect to jobs page after successful submission
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading as="h2" size="xl">Post a Job</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="job-title" isRequired>
            <FormLabel>Job Title</FormLabel>
            <Input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          </FormControl>
          <FormControl id="job-description" isRequired>
            <FormLabel>Job Description</FormLabel>
            <Textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
          </FormControl>
          <FormControl id="job-location" isRequired>
            <FormLabel>Job Location</FormLabel>
            <Input type="text" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} />
          </FormControl>
          <FormControl id="start-date" isRequired>
            <FormLabel>Start Date</FormLabel>
            <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </FormControl>
          <FormControl id="file">
            <FormLabel>Attach File</FormLabel>
            <Input type="file" onChange={handleFileChange} />
          </FormControl>
          <Button colorScheme="teal" size="md" type="submit" mt={4}>Submit Job</Button>
        </form>
      </VStack>
    </Box>
  );
};

export default PostJob;
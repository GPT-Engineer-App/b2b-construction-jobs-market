import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">B2B Jobs Marketplace</Link>
        </Box>
        <Flex alignItems="center">
          <Button as={RouterLink} to="/jobs" colorScheme="teal" variant="ghost" color="white">Jobs</Button>
          <Button as={RouterLink} to="/bid" colorScheme="teal" variant="ghost" color="white">Place a Bid</Button>
          <Button as={RouterLink} to="/post-job" colorScheme="teal" variant="ghost" color="white">Post a Job</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
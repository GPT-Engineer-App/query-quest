import React, { useState } from "react";
import { Box, Input, Button, List, ListItem, Text, VStack, Heading } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // Example data
  const data = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];

  const handleSearch = () => {
    if (!searchTerm) {
      setResults([]);
      return;
    }
    const filteredData = data.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));
    setResults(filteredData);
  };

  return (
    <VStack spacing={4} p={5}>
      <Heading as="h1" size="xl">
        Simple Search Engine
      </Heading>
      <Box>
        <Input placeholder="Search for a fruit..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} size="lg" mr={2} />
        <Button onClick={handleSearch} leftIcon={<FaSearch />} colorScheme="blue" size="lg">
          Search
        </Button>
      </Box>
      <List spacing={3} w="100%">
        {results.map((item, index) => (
          <ListItem key={index} p={2} shadow="md">
            <Text fontSize="lg">{item}</Text>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;

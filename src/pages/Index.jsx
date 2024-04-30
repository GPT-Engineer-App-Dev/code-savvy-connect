import { Box, Flex, Input, Button, Text, Badge, VStack, HStack, useColorModeValue, IconButton, Image } from "@chakra-ui/react";
import { FaSearch, FaEnvelope, FaPlus } from "react-icons/fa";

const developers = [
  { id: 1, name: "John Doe", location: "New York, USA", technologies: ["React", "Node.js"] },
  { id: 2, name: "Jane Smith", location: "Berlin, Germany", technologies: [".NET", "Go"] },
  { id: 3, name: "Carlos Ruiz", location: "Madrid, Spain", technologies: ["JavaScript", "React"] },
  { id: 4, name: "Aisha Mohammed", location: "Lagos, Nigeria", technologies: ["Node.js", ".NET"] },
];

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.700");

  const handleSearch = (event) => {
    // Implement search functionality here
    console.log("Search:", event.target.value);
  };

  const sendMessage = (developer) => {
    // Implement send message functionality here
    console.log("Send message to:", developer.name);
  };

  return (
    <Box p={5}>
      <VStack spacing={5}>
        <Text fontSize="2xl" fontWeight="bold">
          Welcome to Particles
        </Text>
        <Text fontSize="md">A marketplace for software talent specialized in web technologies.</Text>
        <Flex w="full">
          <Input placeholder="Search developers by name, location or technology" onChange={handleSearch} />
          <IconButton aria-label="Search database" icon={<FaSearch />} ml={2} />
        </Flex>
        <VStack spacing={4} align="stretch">
          {developers.map((dev) => (
            <Flex key={dev.id} p={5} shadow="md" borderWidth="1px" bg={bg} align="center" justify="space-between">
              <Box>
                <Text fontWeight="bold">{dev.name}</Text>
                <Text>{dev.location}</Text>
                <HStack spacing={2}>
                  {dev.technologies.map((tech, index) => (
                    <Badge key={index} colorScheme="green">
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </Box>
              <Button leftIcon={<FaEnvelope />} colorScheme="blue" onClick={() => sendMessage(dev)}>
                Message
              </Button>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;

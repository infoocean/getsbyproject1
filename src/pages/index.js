import React from "react";
import Header from "../Templates/header";

import {
  Box,
  Center,
  ChakraProvider,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const IndexPage = () => {
  return (
    <ChakraProvider>
      {/*header part*/}
      <Header />
      <Container maxW={"7xl"} mt={8} mb={8}>
        <SimpleGrid columns={[1, null, 3]} spacing="40px">
          <Box>
            <Center py={6}>
              <Box
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
              >
                <Box h={"210px"} bg={"gray.100"}>
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    }
                    layout={"fill"}
                  />
                </Box>
                <Stack mt={5}>
                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    Boost your conversion rate
                  </Heading>
                  <Text color={"gray.500"}>Blue Checked</Text>
                  <Text color={"gray.500"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </Text>
                  <Text color={"gray.500"}>$2000</Text>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box bg="tomato" height="80px">
            gdfgdf
          </Box>
          <Box bg="tomato" height="80px">
            gdfdfg
          </Box>
          <Box bg="tomato" height="80px">
            dgfdfgd
          </Box>
          <Box bg="tomato" height="80px">
            dgfgdf
          </Box>
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

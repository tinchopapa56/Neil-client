import React from 'react'
import {Box, Text, Button, Flex, Stack, Image, Link} from "@chakra-ui/react";
import I1 from "../../../public/1.jpg"
import I4 from "../../../public/4.jpg"
import { useStore } from '../../app/stores/store';
// import { Link } from 'react-router-dom';

export default function HomePage() {

  const {generalStore} = useStore();

  

  return (
    <Flex h={"100vh"} color="white" justify={"center"} backgroundPosition="center" backgroundSize="cover" backgroundImage={I4}>
      <Box w={"30vw"} color="black" left="calc(7.5vw - 32px)" pr="32px" h="50vh" top="25vh" gap="32px" position="fixed">
        <Text color="white" as="h1" fontSize={"4xl"}>Bandify</Text>
        <Text color="white" pt={4}>Bandify is here to help multiply connectiones between bars & venus looking for artists and musicians looking for places to perform</Text>
        <Text color="white" pt={4}>This is app has no intention of profit other than to help musicians and club owners</Text>
        {generalStore.token ? (
          <Button m="0 auto" as={Link} href="/neil-client/activities">Go to events & Venues</Button>
          ):(
          <Stack pt={4} spacing={4} direction="row">
            <Button as={Link} href="/neil-client/login" w="50%">Log In</Button>
            <Button as={Link} href="/neil-client/register" w="50%">Register</Button>
          </Stack>
        )}
      </Box>
        <Box w={"35vw"} right="calc(7.5vw - 32px)" pr="32px" h="50vh" top="25vh" gap="32px" position="absolute" color="white">
          <Image objectFit="cover" src={I1} alt={'Interface Bandify'} />
          <Text color="white">Find a venue to perform in</Text>
        </Box>
        
    </Flex>
  )
}
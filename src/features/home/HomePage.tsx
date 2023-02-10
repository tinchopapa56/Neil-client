import React from 'react'
import {Box, Text, Button, Flex, Stack, Image, Link} from "@chakra-ui/react";
import I1 from "../../../public/1.jpg"
import I2 from "../../../public/2.jpg"
import I3 from "../../../public/3.jpg"
import I4 from "../../../public/4.jpg"
import { useStore } from '../../app/stores/store';
// import { Link } from 'react-router-dom';

export default function HomePage() {

  const {generalStore} = useStore();

  

  return (
    <Flex h={"88vh"} color="white" justify={"center"} backgroundPosition="center" backgroundSize="cover" backgroundImage={I4}>
      <Box w={"30vw"} color="black" left="calc(7.5vw - 32px)" pr="32px" h="50vh" top="25vh" gap="32px" position="fixed">
        <Text color="white" as="h1" fontSize={"4xl"}>Reactivities</Text>
        <Text color="white" pt={4}>Tasky simplifica la organización de proyectos en equipo, permitiendo la colaboración, priorización y el asignado de tareas.</Text>
        <Text color="white" pt={4}>Esta herramienta fue desarrollada para la aceleración de Alkemy en Front-End con React.</Text>
        <Text color="white" pt={4}>HOME</Text>
        {generalStore.token ? (
          <Button m="0 auto" as={Link} href="/activities">Go to activities</Button>
          ):(
          <Stack pt={4} spacing={4} direction="row">
            <Button as={Link} href="/login" w="50%">Log In</Button>
            <Button as={Link} href="/register" w="50%">Register</Button>
          </Stack>
        )}
      </Box>
      {/* <Stack overflow="auto"> */}
        <Box w={"35vw"} right="calc(7.5vw - 32px)" pr="32px" h="50vh" top="25vh" gap="32px" position="absolute" color="white">
          <Image objectFit="cover" src={I1} alt={'Interface Reactivities'} />
          <Text color="white">Ten todas las tareas de tu equipo en un solo lugar</Text>
        </Box>
        {/* <Box>
          <Image src={I2} alt={'Interface Reactivities'} />
          <Text>Puedes crear tareas y asignarlas a tus compañeros de equipo</Text>
        </Box>
        <Box>
          <Image src={I3} alt={'Interface Reactivities'} />
          <Text>Ten a mano la información de tu equipo</Text>
        </Box>
        <Box>
          <Image src={I4} alt={'Interface Reactivities'} />
          <Text>Puedes personalizar el fondo y los colores a tu gusto</Text>
        </Box> */}
      {/* </Stack> */}
        
    </Flex>
  )
}
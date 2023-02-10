import React from 'react'
import { Box, Flex, Heading, Image, Text, Divider, Stack, Button, Avatar, Grid, GridItem} from '@chakra-ui/react';
import { UserEvent } from '../../../../app/models/Interfaces';

interface Props {
  eventInfo: UserEvent
}

function EventCard({eventInfo}:Props) {
  return (
    <GridItem key={eventInfo.id} boxShadow="sm">
        {/* <Image src={ACT.image} /> */}
        <Box>
            <Text>{eventInfo.title}</Text>
            <Text>{eventInfo.category}</Text>
            <Text>{eventInfo.date2}</Text>
            {/* <Text>{eventInfo.date}</Text> */}
        </Box>
    </GridItem>
  )
}

export default EventCard
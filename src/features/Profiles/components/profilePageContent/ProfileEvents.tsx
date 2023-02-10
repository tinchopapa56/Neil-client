import { Box, Flex, Heading, Image, Text, Divider, Stack, Button, Avatar, Grid, GridItem} from '@chakra-ui/react';
import {CheckCircleIcon} from "@chakra-ui/icons"
import { observer } from 'mobx-react-lite';
import { Activity, Profile, UserEvent } from '../../../../app/models/Interfaces';
import { useStore } from '../../../../app/stores/store';
import EventCard from './EventCard';


function ProfileEvents() {

    const {profileStore} = useStore();

    return (
        <>
            <Stack align="center" p={4} bg="red.100" direction={"row"} justify="space-between" divider={<Divider />}>
                <Text>Your Events</Text>
                <CheckCircleIcon boxSize={8} color="green.300" />
            </Stack>
                {(profileStore.userEvents ? (
                    <Grid p={4} templateColumns='repeat(4, 1fr)' gap={6}>
                    {profileStore.userEvents.map(ACT => (
                        <EventCard eventInfo={ACT} />
                    ))}
                    </Grid>
                ):(<Text>No events yet</Text>)
            )}
        </>
        
      )
}

export default observer(ProfileEvents)


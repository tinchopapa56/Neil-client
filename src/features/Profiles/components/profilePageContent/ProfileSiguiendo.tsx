import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Box, Image, Heading, Button, Stack, Text, Icon, Divider, Grid, GridItem} from "@chakra-ui/react"
import {ArrowRightIcon} from "@chakra-ui/icons"
import { useStore } from '../../../../app/stores/store';
import ProfileCard from '../../ProfileCard';

interface Props{
    title: string
}

 const ProfileSiguiendo: React.FC<Props> = ({title}: Props) => {
    const {profileStore} = useStore()

    useEffect(() => {
        profileStore.listFollowings(title); //following o follower
    },[profileStore.listFollowings, profileStore.profile?.followingsCount, profileStore.profile?.followersCount])

  return (
    <>
      <Stack align="center" p={4} bg="red.100" direction={"row"} divider={<Divider />}>
          <Heading>Your {title}s...</Heading>
      </Stack>
      <Grid p={4} templateColumns='repeat(4, 1fr)' gap={6}>
        {profileStore.followings.map(seguidor => (
            <GridItem key={seguidor.username}>
                <ProfileCard profile={seguidor} />
            </GridItem>
        ))}
        </Grid>
    </>
  )
}

export default observer(ProfileSiguiendo)


// <GridItem key={seguidor.username}>
//                        <ProfileCard profile={seguidor} />
//                        <Text>ey</Text>
//                        <Text>{seguidor.username}</Text>
//                        {/* {profileStore.isCurrentUser && ( */}
//                        <Stack pt={4} justify="space-around" direction={"row"}>
//                        <Button 
//                        size={"sm"}
//                        colorScheme={"green"} 
//                        // isLoading={isUploading ? true : false}
//                        // isLoading={target === ph.id && profileStore.loading}
//                        > Set as Main 
//                        </Button>
//                    </Stack>
//                {/* )} */}
// </>
// ))}
// </GridItem> 
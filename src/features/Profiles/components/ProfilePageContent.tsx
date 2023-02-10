import React, { useEffect } from 'react'
import { Box, Flex, Heading, Text, Divider, Stack, Button, Avatar} from '@chakra-ui/react';
// import ProfileCard from "../../Profiles/ProfileCard";
import { useState } from "react";
import {CheckCircleIcon} from "@chakra-ui/icons"
import { Profile } from '../../../app/models/Interfaces';
import { observer } from 'mobx-react-lite';
import ProfilePhotos from './profilePageContent/ProfilePhotos';
import ProfileSiguiendo from './profilePageContent/ProfileSiguiendo';
import ProfileEvents from './profilePageContent/ProfileEvents';

interface Props {
    profile: Profile;
}
function ProfilePageContent({profile}: Props) {

  const[renderedComponent, setRenderedComponent] = useState<any>({
      About : true,
      Photos : false,
      Events : false,
      Followers : false,
      Following : false,
    })

  const handleRenderedComponent = (section: string) => {
    setRenderedComponent((prev: any) => {
      return {
        // ...prev,
        About : false,
        Photos : false,
        Events : false,
        Followers : false,
        Following : false,
        [section] : !prev[section],
        
      }
    })
  }

  return (
    <Stack direction="row" spacing={4}>
      {/* Selected section */}
      <Box flex="1">
        <Box bg="teal.100">
          
          {/* ABOUT */}
          {renderedComponent.About && 
            <>
              <Stack align="center" p={4} bg="red.100" direction={"row"} divider={<Divider />}>
                  <Heading>About</Heading>
                  <CheckCircleIcon boxSize={8} color="green.300" />
              </Stack>
              <Box>
                {profile?.bio || "Not much to say about me, i´m new here!"}
              </Box>
            </>
          }
          {renderedComponent.Following && <ProfileSiguiendo title="following" /> }
          {renderedComponent.Followers && <ProfileSiguiendo title="followers" /> }
          {renderedComponent.Photos && <ProfilePhotos photos={profile.photos!} /> }
          {renderedComponent.Events && <ProfileEvents /> }
          
        </Box>
      </Box>

      {/* {Selector} */}
      <Stack spacing={1} w={210}>
        {["About", "Photos", "Events", "Followers", "Following"].map( (section,i) => (
          <Box onClick={() => handleRenderedComponent(section)}
           key={i} p={2} bg="red.100" _hover={{ bg:"red.300" }}>
            <Text fontWeight={"semibold"} fontSize="md">{section}</Text>
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}

export default observer(ProfilePageContent)
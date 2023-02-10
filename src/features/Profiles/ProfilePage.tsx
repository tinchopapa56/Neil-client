import { observer } from "mobx-react-lite";
import {  Flex, Spinner} from '@chakra-ui/react';
import { useState } from "react";

import {Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverBody,PopoverFooter,PopoverArrow,PopoverCloseButton,PopoverAnchor, } from '@chakra-ui/react'
  import React, { useEffect } from 'react';
  import { useParams } from 'react-router-dom';
  import { useStore } from '../../app/stores/store';
import ProfilePageHeader from "./components/ProfilePageHeader";
import ProfilePageContent from "./components/ProfilePageContent";


const ProfilePage = () => {
    const {username} = useParams<{username: string}>();
    const {profileStore} = useStore();
    
   useEffect(() => {
    if(username){
      profileStore.loadProfile(username)
      const ver = profileStore.loadProfileEvents(username, "default")
      console.log(ver)
    }
    
   },[username, profileStore.loadProfile])


   if(profileStore.isloadingProfile == true) {
    return <Spinner size="xl" />
   }

    return (
        <Flex w="80%" m="2em auto" direction="column" gap={4}>
          
          <ProfilePageHeader profile={profileStore.profile!} />
          <ProfilePageContent profile={profileStore.profile!} />
        </Flex>
)}
    
export default observer(ProfilePage)
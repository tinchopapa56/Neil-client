import { Button } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent } from 'react'
import { Profile } from '../../../app/models/Interfaces'
import { useStore } from '../../../app/stores/store'
import UserStore from '../../../app/stores/UserStore'

interface Props{
    perfil: Profile
}

 function FollowButton({perfil}: Props) {

    const {profileStore, userStore} = useStore();

    const handleFollow = (e: SyntheticEvent, username: string) =>{
        e.preventDefault();
        perfil.following ? profileStore.updateFollowing(username, false) : profileStore.updateFollowing(username, true);
    }

    if(userStore.user?.username === profileStore.profile?.username) return null;

  return (
    <Button  mt={2} colorScheme={perfil?.following ? "teal": "red"} w="100%" 
        onClick={(e) => handleFollow(e, perfil.username) }
        _hover={{bg: perfil?.following ? "red": "teal" , variant: "ghost"}}
    >
        {perfil?.following ? "Following" : "Not Following"}
    </Button>
  )
}

export default observer(FollowButton);
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image,Text, Stack, Icon} from "@chakra-ui/react"
import {ArrowRightIcon} from "@chakra-ui/icons"
import { Profile } from '../../app/models/Interfaces';
import FollowButton from './components/FollowButton';
// import FollowButton from './FollowButton';

interface Props {
    profile: Profile;
}

export default observer(function ProfileCard({profile}: Props) {
    function truncate(str: string | undefined) {
        if (str) {
            return str.length > 40 ? str.substring(0, 37) + '...' : str;
        }
    }

    return (
        <Box>
            <Image w={10} src={profile.image || 'https://bit.ly/dan-abramov'} />
            <Box>
                <Box>Username: {profile.displayName}</Box>
                <Box>Bio: {profile.bio}</Box>
            </Box>
            <Stack align="center" direction ="row" spacing={2}>
                <ArrowRightIcon />
                <Text>{profile.followersCount || 6} followers</Text>
            </Stack>
            <FollowButton perfil={profile} />
        </Box>
    )
})
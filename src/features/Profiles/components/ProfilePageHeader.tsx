
import { Box, Flex, Grid, Icon, Heading, Link, Image, Text, Divider, Stack, Button, Avatar} from '@chakra-ui/react';
import { useStore } from '../../../app/stores/store';
import { Profile } from '../../../app/models/Interfaces';
import { observer } from 'mobx-react-lite';
import FollowButton from './FollowButton';

interface Props {
  profile: Profile;
  // renderedComponent: string;
}

function ProfilePageHeader({profile}: Props) {
    const {userStore} = useStore();
    const randomIMG = "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"

    return (
    <Stack align={"center"} p={4} bg="red.100" direction={"row"} justify="space-between">
            <Stack direction ="row" align={"center"}>
              <Image src={profile?.image ? profile.image : randomIMG}
                w={40} h={40} objectFit="cover" borderRadius={9999}
              />
              <Text>{profile?.displayName || "Name"}</Text>
            </Stack>
            <Box>
              <Stack spacing={2} textAlign={"center"} direction={"row"} justify="space-between" divider={<Divider />}>
                <Box >
                  <Text fontWeight={"semibold"} fontSize="3xl">{profile?.followersCount || 0}</Text>
                  <Text>FOLLOWERS</Text>
                </Box>
                <Box>
                  <Text fontWeight={"semibold"} fontSize="3xl">{profile?.followingsCount || 0}</Text>
                  <Text>FOLLOWING</Text>
                </Box>
              </Stack>
              <FollowButton perfil={profile} />
            </Box>
           </Stack>
  )
}
export default observer(ProfilePageHeader)
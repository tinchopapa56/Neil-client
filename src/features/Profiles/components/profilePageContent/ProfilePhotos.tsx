import React, { SyntheticEvent, useState } from 'react'
import { Box, Flex, Grid, Icon, Heading, GridItem, Link, Image, Text, Divider, Stack, Button, Avatar} from '@chakra-ui/react';
import { useStore } from '../../../../app/stores/store';
import { Photo, Profile } from '../../../../app/models/Interfaces';
import { observer } from 'mobx-react-lite';
import { object } from 'yup';
import {CheckCircleIcon} from "@chakra-ui/icons"
import ImageUpload from '../ImageUpload/ImageUpload';

interface Props {
    photos: Photo[]
}

 function ProfilePhotos({photos} : Props) {
    const {profileStore} = useStore();
    const [addPhotoMode, setAddPhotoMode] = useState<boolean>(false);
    const [target, setTarget] = useState<string>("");

    const handlePhUpload = (file: Blob) => {
        profileStore.uploadPhoto(file)
            .then(() => setAddPhotoMode(false));
    }

    const handleSetMainPH = (photo: Photo, e: SyntheticEvent<HTMLButtonElement>) => {
        setTarget(e.currentTarget.name);
        profileStore.setProfileMainPhoto(photo)
    }
    function handleDeletePhoto(photo: Photo, e: SyntheticEvent<HTMLButtonElement>) {
        setTarget(e.currentTarget.name);
        profileStore.deletePhoto(photo);
    }

  return (
    <>
        <Stack align="center" p={4} bg="red.100" direction={"row"} justify="space-between" divider={<Divider />}>
            <CheckCircleIcon boxSize={8} color="green.300" />
            {/* {profileStore.isCurrentUser && ( */}
            <Button onClick={() => setAddPhotoMode(!addPhotoMode)}>
                {addPhotoMode ? "Cancel":"Add Photo"}
            </Button>
            {/* )} */}
        </Stack>
        {addPhotoMode ? ((<ImageUpload uploadPhoto={handlePhUpload} isUploading={profileStore.uploading} />)
            ):(photos ? (
                <Grid p={4} templateColumns='repeat(4, 1fr)' gap={6}>
                {photos.map(ph => (
                    <GridItem key={ph.id}>
                        <Image src={ph.url} />
                        {/* {profileStore.isCurrentUser && ( */}
                            <Stack pt={4} justify="space-around" direction={"row"}>
                                <Button 
                                size={"sm"}
                                colorScheme={"green"} 
                                onClick={(e) => handleSetMainPH(ph, e)}
                                // isLoading={isUploading ? true : false}
                                isLoading={target === ph.id && profileStore.loading}
                                > Set as Main 
                                </Button>
                                <Button onClick={e => handleDeletePhoto(ph, e)} size={"sm"} colorScheme={"red"}>Delete</Button>
                            </Stack>
                        {/* )} */}
                    </GridItem>
                ))}
                </Grid>
            ):("No fotos")
        )}
    </>
    
  )
}

export default observer(ProfilePhotos)
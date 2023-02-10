import React, { useEffect, useState } from 'react'
import { Box, Flex, Grid, Icon, Heading, GridItem, Link, Image, Text, Divider, Stack, Button, Avatar} from '@chakra-ui/react';
import ImgDropzone from './ImgDropzone';
import ImgCropper from './ImgCropper';
// import { Cropper } from 'react-cropper';

interface Props {
    isUploading: boolean;
    uploadPhoto: (file: Blob) => void;
}

  function ImageUpload({isUploading, uploadPhoto}: Props) {

  const [files, setFiles] = useState<any>([]);
  const [cropper, setCropper] = useState<Cropper>();

  const onCrop = () => {
    if(cropper){
      cropper.getCroppedCanvas().toBlob(blob => {
        console.log(blob)
        uploadPhoto(blob!);
      });
    }
  }

  useEffect(() => {
    return () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview))
    }
  },[files])

  return (
    <Grid p={4} gap={4} templateColumns='repeat(3, 1fr)'>
            <GridItem w={"1fr"}>
                <Text> Add Photo:</Text>
                <ImgDropzone setFiles={setFiles} />
            </GridItem>
            <GridItem w={"1fr"}>
              <Text> Selected Photo...</Text>
              {files && files.length > 0 && (
                // <Image src={files[0].preview} />
                <ImgCropper setCropper={setCropper} imagePreview={files[0].preview} />
              )}
            </GridItem>
            <GridItem w={"3fr"}>
              <Text> Add Photo:</Text>
              <div className='img-preview' style={{height:"200px", overflow:"hidden"}} />
              {files && files.length > 0 && (
                <Stack w="100%" mt={2} pr={2} direction="row" justify={"space-between"}>
                  <Button isLoading={isUploading ? true : false} colorScheme="green" onClick={onCrop}>Crop</Button>
                  <Button colorScheme={"red"} onClick={()=> setFiles([])}>close</Button>
                </Stack>
              )}
              
            </GridItem>
    </Grid>
  )
}

export default ImageUpload
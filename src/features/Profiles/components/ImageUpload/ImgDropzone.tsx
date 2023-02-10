import React, {useCallback} from 'react'
import { Box } from '@chakra-ui/react'
import {useDropzone} from 'react-dropzone'

interface Props {
    setFiles: (files: any) => void;
}

function ImgDropzone({setFiles}: Props) {

  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    setFiles(acceptedFiles.map((file:any) => Object.assign(file, {
        preview: URL.createObjectURL(file)
    })))
  }, [setFiles])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <Box _hover={{borderColor: "blue.300"}} border={"2px dashed gray"} p={4} {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drag the files here ...</p> :
          <p>Drag the files here or click to select files</p>
      }
    </Box>
  )
}
export default ImgDropzone
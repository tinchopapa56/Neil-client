import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Activity } from '../../../app/models/Interfaces';

import { Input, Button,Stack,Box, Text,} from '@chakra-ui/react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const ActivityForm = () => {
  const navigate = useNavigate();
  const {activityStore} = useStore()

  const validationSchema = Yup.object({
    title: Yup.string().required('The activity title is required'),
    description: Yup.string().required('The activity description is required'),
    category: Yup.string().required(),
    date: Yup.string().required('Date is required').nullable(),
    venue: Yup.string().required(),
    city: Yup.string().required(),
})

  const formik = useFormik({
    initialValues: {
      id: "placeholder",
      title: "",
      description: "",
      category: "",
      date: "",
      venue: "",
      city: "",
      image:"nada",
      hostUsername: "nada",
      attendees: [],
    },
    validationSchema,
    onSubmit: async (values: Activity) => {
      try {
        console.log(values)
        const res = await activityStore.createACT(values) //Toast y res en userStoreMOBX
        console.log(res)

        if (res) navigate("/")
      } catch (error) {
        console.log(error);
      }
    },
  })

  const {errors, values, handleChange, handleSubmit, handleBlur} = formik
  
  return (
    <Box w={350} textAlign="center" m="0 auto" pt={16}>
      <form onSubmit={handleSubmit}>
        <Stack borderRadius={"xl"} p={4} spacing={8} boxShadow={"lg"}>
        
          <Text fontSize={"4xl"}>Create Activity</Text>
          <Box>
            <Text>Title</Text>
            <Input  name='title'  onChange={ handleChange }  value={ values.title }  onBlur={ handleBlur }  
              placeholder={activityStore.selectedACT ? "existing" : "title"} 
            />
            {errors.title && <Text color="red.300">{errors.title}</Text>}
          </Box>

          <Box mb={8}>
            <Text>Description</Text>
            <Input name='description' onChange={ handleChange } value={ values.description } onBlur={ handleBlur } maxLength={40} placeholder={'description'} 
            />
              {errors.description && <Text color="red.300">{errors.description}</Text>}
          </Box>
          <Box mb={8}>
            <Text>Category</Text>
            <Input name='category' onChange={ handleChange } value={ values.category } onBlur={ handleBlur } maxLength={40} placeholder={'category'} 
            />
              {errors.category && <Text color="red.300">{errors.category}</Text>}
          </Box>
          <Box mb={8}>
            <Text>venue</Text>
            <Input name='venue' onChange={ handleChange } value={ values.venue } onBlur={ handleBlur } maxLength={40} placeholder={'venue'} 
            />
              {errors.venue && <Text color="red.300">{errors.venue}</Text>}
          </Box>
          <Box mb={8}>
            <Text>city</Text>
            <Input name='city' onChange={ handleChange } value={ values.city } onBlur={ handleBlur } maxLength={40} placeholder={'city'} 
            />
              {errors.city && <Text color="red.300">{errors.city}</Text>}
          </Box>
          <Box mb={8}>
            <Text>Date</Text>
            <Input name='date' type="date" onChange={ handleChange } value={ values.date } onBlur={ handleBlur } maxLength={40} placeholder={"date"} 
            />
              {errors.date && <Text color="red.300">{errors.date}</Text>}
          </Box>

          <Stack pt={4} justify={"flex-end"} direction="row">
            <Button w="25%" p={4} bg={'red.300'} color={'white'} _hover={{   bg: "blue.500", }}>
              Cancel
            </Button>
            <Button type="submit" w="25%" p={4} bg={'green.300'} color={'white'} _hover={{   bg: 'green.500', }}>
             Create Act
            </Button>
          </Stack>

        </Stack>
      </form>
        
      
    </Box>
  )
}


export default observer(ActivityForm);

// import { useEffect } from 'react';
  
//   const ActivityForm = () => {

//     const {activityStore} = useStore();
//     const {loadActivity, selectedACT} = activityStore;

//     const {id} = useParams();

//     useEffect(() => {
//       if(id) loadActivity(id);
//     }, [id, loadActivity])

//     const handleCreate = () => {

//     }


//     return (
//       <Flex w={"100%"} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        
//         <Stack spacing={8} w="80%" py={12} px={6}>
//             <Heading fontSize={'4xl'}>Create/Edit activity</Heading>
//           <Box rounded={'md'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
            
//             <Stack spacing={2}>
//               <FormControl id="title">
//                 <FormLabel>Title</FormLabel>
//                 <Input placeholder={selectedACT?.title} />
//               </FormControl>
//               <FormControl id="password">
//                 <FormLabel>Description</FormLabel>
//                 <Input placeholder={selectedACT?.description} />
//               </FormControl>
//               <FormControl id="email">
//                 <FormLabel>Category</FormLabel>
//                 <Input placeholder={selectedACT?.category} />
//               </FormControl>
//               <FormControl id="email">
//                 <FormLabel>Date</FormLabel>
//                 <Input placeholder={selectedACT?.date} />
//               </FormControl>
//               <FormControl id="email">
//                 <FormLabel>City</FormLabel>
//                 <Input placeholder={selectedACT?.city} />
//               </FormControl>

//               <Stack pt={4} justify={"flex-end"} direction="row">
//                 <Button w="15%" p={4} bg={'red.300'} color={'white'} _hover={{   bg: "blue.500", }}>
//                   Cancel
//                 </Button>
//                 <Button w="15%" p={4} bg={'green.300'} color={'white'} _hover={{   bg: 'green.500', }}
//                   onClick={() => handleCreate()}>
//                   Create Act
//                 </Button>
//               </Stack>

//             </Stack>
//           </Box>
//         </Stack>
//       </Flex>
//     );
// }

// export default observer(ActivityForm)
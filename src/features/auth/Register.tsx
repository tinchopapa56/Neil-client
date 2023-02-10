import React, { useState } from 'react'
import { Input, FormControl, Button,Link,Stack,Box, Card,Spinner, Heading, Text,} from '@chakra-ui/react';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { observer } from 'mobx-react-lite';
import { Navigate, useNavigate } from 'react-router-dom'
import { useStore } from '../../app/stores/store';

const Register = () => {
  const navigate = useNavigate();
  const {userStore} = useStore()

  const validationSchema = yup.object().shape({
    email: 
    yup.string().email()
      .required('campo obligatorio')
      .min(4, 'mínimo 4 caracteres')
      .max(24, 'máximo 24 caracteres'),
    userName: 
    yup.string()
      .required('campo obligatorio')
      .min(4, 'mínimo 4 caracteres')
      .max(24, 'máximo 24 caracteres'),
    displayName: 
    yup.string()
      .required('campo obligatorio')
      .min(4, 'mínimo 4 caracteres')
      .max(24, 'máximo 24 caracteres'),
    password: 
    yup.string()
        .required('campo obligatorio'),
        
  })
  //userNNNName xq asi es la propr del ASP.net User = userName[mayuscula]
  const formik = useFormik({
    initialValues: {
      userName: "",
      displayName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values)
        const res = await userStore.register(values) //Toast y res en userStoreMOBX
        console.log(res, "obj o false")

        if (res) navigate("/")
      } catch (error) {
        console.log(error);
      }
    },
  })

  const {errors, values, handleChange, handleSubmit, handleBlur} = formik
  
  return (
    <Box w={320} textAlign="center" m="0 auto" pt={8}>
      <form onSubmit={handleSubmit}>
        <Stack borderRadius={"xl"} p={4} spacing={4} boxShadow={"lg"}>
          
        <Text fontSize={"4xl"}>REGISTER</Text>
          <Box>
            <Text>Username</Text>
            <Input name='userName'  onChange={ handleChange }  value={ values.userName }  onBlur={ handleBlur }  placeholder={'username'} 
            />
            {errors.userName && <Text color="red.300">{errors.userName}</Text>}
          </Box>
          <Box>
            <Text>Display name</Text>
            <Input name='displayName'  onChange={ handleChange }  value={ values.displayName }  onBlur={ handleBlur }  placeholder={'display Name'} 
            />
            {errors.displayName && <Text color="red.300">{errors.displayName}</Text>}
          </Box>
          <Box>
            <Text>Email</Text>
            <Input  name='email' type="email" onChange={ handleChange }  value={ values.email }  onBlur={ handleBlur }  placeholder={'email'} 
            />
            {errors.email && <Text color="red.300">{errors.email}</Text>}
          </Box>

          <Box>
            <Text>Password (Pa$$w0rd)</Text>
            <Input name='password' onChange={ handleChange } value={ values.password } onBlur={ handleBlur } maxLength={40} placeholder={'contraseña'} 
            />
             {errors.password && <Text color="red.300">{errors.password}</Text>}
          </Box>

          { userStore.loading ? (
            <Spinner />
          ) : <Button colorScheme="twitter" onClick={() => handleSubmit()} type="submit" >Register</Button>}
        
          <Text pt={2}>¿Ya tenes una cuenta? <Link href="/neil-client/login">Login</Link></Text>

        </Stack>
      </form>
    </Box>
  )
}


export default observer(Register);
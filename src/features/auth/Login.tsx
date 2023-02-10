import React, { useState } from 'react'
import { Input, FormControl, Button,Link,Stack,Box, Card,Spinner, Heading, Text,} from '@chakra-ui/react';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { observer } from 'mobx-react-lite';
import { Navigate, useNavigate } from 'react-router-dom'
import { useStore } from '../../app/stores/store';

const Login = () => {
  const navigate = useNavigate();
  const {userStore} = useStore()

  const validationSchema = yup.object().shape({
    email: 
    yup.string()
      .required('campo obligatorio')
      .min(4, 'mínimo 4 caracteres')
      .max(24, 'máximo 24 caracteres'),
    password: 
      yup.string()
        .required('campo obligatorio'),
        
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values)
        const res = await userStore.login(values) //Toast y res en userStoreMOBX
        // console.log(res, "obj o false")

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
        
          <Text fontSize={"4xl"}>LOGIN</Text>
          <Box>
            <Text>Email(bob@test.com)</Text>
            <Input  name='email'  onChange={ handleChange }  value={ values.email }  onBlur={ handleBlur }  placeholder={'emailn'} 
            />
            {errors.email && <Text color="red.300">{errors.email}</Text>}
          </Box>

          <Box mb={8}>
            <Text>Password (Pa$$w0rd)</Text>
            <Input name='password' onChange={ handleChange } value={ values.password } onBlur={ handleBlur } maxLength={40} placeholder={'contraseña'} 
            />
              {errors.password && <Text color="red.300">{errors.password}</Text>}
            {/* <Text cursor="pointer" color="twitter.400" pt={4} onClick={() => console.log("olvide pass")}>
              Olvidé mi contraseña
            </Text> */}
          </Box>

          {userStore.loading ? (
            <Spinner />
          ) : <Button onClick={()=>handleSubmit()} type="submit" colorScheme="twitter" >Iniciar sesión</Button>
          }

          <Text pt={4}>¿No tienes una cuenta? <Link href="/neil-client/register">Regístrate</Link></Text>
        </Stack>
      </form>
        
      
    </Box>
  )
}


export default observer(Login);


























// import { Input, Button, Heading, Text, useColorModeValue} from '@chakra-ui/react';
  
// import { ErrorMessage, Form, Formik } from "formik";
// import { observer } from "mobx-react-lite";
// import { useStore } from "../../app/stores/store";
// import { FormValues } from '../../app/models/Interfaces';

// export default observer(function Login() {
//   const { userStore } = useStore();

//   const onSubmit = (values: any) => {
//     userStore
//           .login(values)
//         //   .catch((error: any) => setErrors({ error: error.response.data }))
//   }

//   return (
//     <Formik
//       initialValues={{ email: "", password: "", error: null }}
//       onSubmit={(values) => onSubmit(values)}
//     >
//       {({ handleSubmit, isSubmitting, errors }) => (
//         <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
//           <Text as="h2" color="white" textAlign="center">Login</Text>
//           <Input name="email" placeholder="Email" type="email" />
//           <Input name="password" placeholder="Password" type="password" />
//           <ErrorMessage name="error"
//             render={() => (<Text style={{ marginBottom: 10 }} color="red">{errors.error}</Text>)}
//           />
//           {/* <Button {isSubmitting ? "isLoading" : ""} type="submit">Send</Button> */}
//           <Button>Send</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// });
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/layout/App'

import { ChakraProvider } from '@chakra-ui/react'

import {RouterProvider} from "react-router-dom"
import { router } from './app/router/Routes'
import { store, StoreContext } from './app/stores/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <StoreContext.Provider value={store}>
      <ChakraProvider>
        <RouterProvider router={router} /> 
      </ChakraProvider>
    </StoreContext.Provider>
   
  // </React.StrictMode>,
)

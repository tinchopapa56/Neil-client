import axios from "axios";
import {useEffect, useState} from "react";
import {Box, Text} from "@chakra-ui/react";

import Navbar from "./Navbar";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { observer } from "mobx-react-lite";

import { Outlet } from "react-router-dom";

import { useStore } from '../stores/store';

function App() {

  const {generalStore, userStore} = useStore()
  
  useEffect(() => {
    if(localStorage.getItem("token")){
      userStore.getUser().finally(() => generalStore.setAuthorized(true))
    }
  },[generalStore.token])

  return (
    <>
      <Box>
        <Navbar />
        <Outlet />
        <ToastContainer />
      </Box>
    
    </>
    
  )
}

export default observer(App)

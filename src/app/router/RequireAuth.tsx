import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../stores/store'

export default function RequireAuth() {
    const {userStore} = useStore()
    const navigate = useNavigate()
    // const locaiton = useLocation()


    if(!userStore.isLoggedIn) {
        return navigate("/");
        // return <Navigate to="/" state={{from: location}}
    }

//   return <Outlet />
}

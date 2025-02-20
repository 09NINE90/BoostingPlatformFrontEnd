import React from 'react';
import {useDispatch} from "react-redux";
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import {clearAuth, setAuth, setRole} from "../../store/slice/authSlice.js";

function ProfileMain() {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        dispatch(setRole(''));
        dispatch(setAuth(false));
        dispatch(clearAuth());
    };

  return (
    <div>
        <IconButton onClick={handleLogout}>
                <LogoutIcon/>
        </IconButton>
    </div>
  )
}

export default ProfileMain
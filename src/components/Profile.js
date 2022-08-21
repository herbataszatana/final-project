import React, { useState, useEffect} from 'react'
import { database } from "../firebase-config";
import {doc, collection, onSnapshot, addDoc, query, orderBy, deleteDoc, setDoc} from "firebase/firestore";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
//import AddTasks from "../components/AddTasks";

function Profile () {
  
   

//HTML 
    return (
        <p>Hi  </p>
    )
     
}
export default Profile;

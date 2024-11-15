import React from 'react'
import  { useEffect, useState } from 'react';
import { db } from '../config/firebase/firebaseconnection';
import { getDocs, collection } from 'firebase/firestore';
import SignupUserTable from './SignupUserTable';


function Signupshow() {
    const [userData, setUserData] = useState([]);
    
useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const signupData = await getDocs(collection(db, 'Users'));
            const usersData = signupData.docs.map(doc => ({
                id: doc.id,
              ...doc.data()
            }));
            setUserData(usersData);
        }catch(error){
            console.log("Error fetching data: ", error)
        }
    };
    fetchData()
},[])

  return (
   <SignupUserTable
   
   usersData={userData}
   columns = {[
       {
           key: "userName",
           label: "User Name"
       },
       {
           key: "email",
           label: "Email"
       },
       {
           key: "password",
           label: "Password"
       }
       ]}

   />
  )
}

export default Signupshow;

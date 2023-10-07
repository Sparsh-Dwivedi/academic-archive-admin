import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import UserCard from '../Components/UserCard';
import { getAllUsers } from '../utils/api';

const Container=styled.div`
  width:100%;
  min-height:100vh;
  max-height:max-content;
  display: flex;

`

const Faculty = () => {
  const [users,setUsers]=useState([]);
//   const users=[
//     {
//         "_id": "64fd711a0604578415de9b4d",
//         "username": "yashjaiswal",
//         "email": "yash@gmail.com",
//         "name": "Yash Jaiswal",
//         "department":"Computer Science",
//         "address": "INDIA",
//         "ph": 8130060493,
//         "password": "U2FsdGVkX18MdqxsonEtBAXWeSHEo0jrSJM0NYVgchw=",
//         "avatar": "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Free-Download.png",
//         "isAdmin": false,
//         "createdAt": "2023-09-10T07:32:42.422Z",
//         "updatedAt": "2023-09-20T07:56:00.810Z",
//         "__v": 0,
//         "qualification": "Doctorate in engineering"
//     },
//     {
//         "_id": "64fd711a0604578415de9b4d",
//         "username": "yashjaiswal",
//         "email": "yash@gmail.com",
//         "name": "Yash Jaiswal",
//         "address": "INDIA",
//         "ph": 8130060493,
//         "password": "U2FsdGVkX18MdqxsonEtBAXWeSHEo0jrSJM0NYVgchw=",
//         "avatar": "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Free-Download.png",
//         "isAdmin": false,
//         "createdAt": "2023-09-10T07:32:42.422Z",
//         "updatedAt": "2023-09-20T07:56:00.810Z",
//         "__v": 0,
//         "qualification": "Doctorate in engineering"
//     }
// ];

  const getUsers=async()=>{
    const res=await getAllUsers();
    console.log(res)
    if(res.status===200){
      setUsers(res.data);
    }
  }
  useEffect(()=>{
    getUsers();
  },[])
  return (
    <Container>
      {users.map(e=>(
        <UserCard user={e}/>
      ))}
    </Container>
  )
}

export default Faculty

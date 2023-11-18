import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import UserCard from '../Components/UserCard';
import { getAllUsers } from '../utils/api';
import Loader from '../Components/Loader';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { useLocation } from 'react-router-dom';

const Container=styled.div`
  width:100%;
  min-height:100vh;
  max-height:max-content;
  display: flex;

`
const Error=styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  color: red;
  svg{
    font-size:2rem;
    margin-right:0.5rem;
  }
`
const Faculty = () => {
  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);

  const getUsers=async()=>{
    setLoading(true);
    const res=await getAllUsers();
    console.log(res)
    if(res.status===200){
      setUsers(res.data);
    }
    else setError(true);
    setLoading(false);
  }
  useEffect(()=>{
    getUsers();
  },[])
  return (
    <>
    <Container>
      {error&&<Error><ReportProblemIcon/>Something Went Wrong...</Error>}
      {loading?<Loader/>:
      users.map(e=>(
        <UserCard user={e} />
        ))}
    </Container>
    </>
  )
}

export default Faculty

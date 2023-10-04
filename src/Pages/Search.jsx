import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Container=styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  padding:0 2rem;
`
const Title=styled.span`
    width: max-content;
    font-size: 1.8rem;
    font-weight: 500;
`

const Search = () => {
  const location = useLocation();
  const [user,setUser]=useState(null);
  useEffect(()=>{
    if(location.state.user) setUser(location.state.user)
  },[])
  return (
    <Container>
      <Title>{user?user.name:''}</Title>    
    </Container>
  )
}

export default Search

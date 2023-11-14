import React, { useEffect } from 'react'
import styled from 'styled-components'
import department from '../Assests/department.png'
import faculty from '../Assests/faculty.png'
import {useNavigate}  from 'react-router-dom'
import { useSelector } from 'react-redux'

const Wrapper=styled.div`
  width:100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Item=styled.div`
  width:30%;
  height:60%;
  -webkit-box-shadow: 0px 0px 10px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  border-radius:10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  img{
    width:90%;
    height:80%;
  }
`
const Options = () => {
  const user=useSelector(state=>state.user);
  const navigate=useNavigate();
  useEffect(()=>{
    if(user.currentUser==null)  navigate('/login')
  })
  return (
    <Wrapper>
        <Item onClick={()=>navigate('/department')}>
            <img src={department}/>
            Department
        </Item>
        <Item onClick={()=>navigate('/faculty')}>
            <img src={faculty}/>
            Faculty
        </Item>
    </Wrapper>
  )
}

export default Options

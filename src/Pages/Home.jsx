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
  flex-wrap:wrap;
`
const Item=styled.div`
  width:20%;
  /* height:200px; */
  margin:0.5rem;
  -webkit-box-shadow: 0px 0px 10px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  border-radius:10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  img{
    width:90%;
    height:80%;
    /* display:none; */
  }
  span{
    text-align:center;
  }
`

const list=[
  {  name:'Research Papers',},
  {  name:'M.Tech Projects',record:true},
  {  name:'B.Tech Projects',record:true},
  {  name:'Phd Scholars',},
  {  name:'Faculty Development Program',},
  {  name:'Short Term Courses',},
  {  name:'Patents',},
  {  name:'Project Grants',},
  {  name:'Project Consultancy',},
  {  name:'Invited Talks',},
  {  name:'Society Membership',},
]
const Home = () => {
  const user=useSelector(state=>state.user);
  const navigate=useNavigate();
  useEffect(()=>{
    if(user.currentUser==null)  navigate('/login')
  })

  return (
    <Wrapper>
       {list.map(ele=>(
        <Item onClick={()=>navigate('/domain',{state:{record:ele.name}})}>
            <img src={department}/>
            <span>{ele.name}</span>
        </Item>
        ))}
               
    </Wrapper>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import DepartmentCard from '../Components/DepartmentCard'
import { departmentNames } from '../utils/service'

const Container=styled.div`
  width:100%;
  min-height:100vh;
  max-height:max-content;
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
`

const Department = () => {
  return (
    <Container>
      {departmentNames.map((ele,idx)=>(
        <DepartmentCard key={idx} departmentName={ele} />
      ))}
    </Container>
  )
}

export default Department

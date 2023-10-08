import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import DepartmentCard from '../Components/DepartmentCard'

const Container=styled.div`
  width:100%;
  min-height:100vh;
  max-height:max-content;
  display: flex;

`

const Department = () => {
  
  return (
    <Container>
      <DepartmentCard/>
    </Container>
  )
}

export default Department

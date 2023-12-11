import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import { getFieldList } from '../utils/service';

const Wrapper=styled.div`
    width:100%;
    display: flex;
    align-items: center;
    flex-wrap:wrap;
    >span{
      background-color: #6bd2c4;
      padding: 0.4rem 0.8rem;
      margin: 0.4rem;
      color: ghostwhite;
      border-radius: 20px;
      font-size: 1rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      >svg{
        color:red;
        cursor: pointer;
      }
    }
`

const AddField=({list,setFieldList,fieldList,setShowResult})=> {
  const handleClick=(l)=>{
    console.log(l)
    if(l.value==='all'){
      setFieldList(list.slice(1))
      setShowResult(false)
      return ;
    }
    const idx=fieldList.indexOf(l);
    if(idx===-1){
      setFieldList(prev=>[...prev,l])
      setShowResult(false)
    }
  }
    return (
      <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
        <InputLabel id="demo-select-small-label">Add Field</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={''}
          label="Fields"
          // onChange={(e)=>setType(null)}
        >
          {list.map((l,index)=>(
            <MenuItem key={index} value={l.value} onClick={()=>handleClick(l)}>{l.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
}


const FieldsSelector = ({fieldList,setFieldList,type,setShowResult}) => {

  const handleRemove=(idx)=>{
    setShowResult(false)
    var arr=fieldList.slice();
    arr.splice(idx,1);
    setFieldList(arr);
  }  
  return (
    <Wrapper>   
        <AddField setShowResult={setShowResult} list={getFieldList(type)} fieldList={fieldList} setFieldList={setFieldList}/>
        {
          fieldList.map((f,idx)=>(
            <span key={idx}>{f.label}
            <CloseIcon onClick={()=>handleRemove(idx)}/>
            </span>
          ))
        }
    </Wrapper>
  )
}

export default FieldsSelector

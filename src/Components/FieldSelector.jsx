import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';

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

const AddField=({list,setFieldList,fieldList})=> {
  const handleClick=(l)=>{
    const idx=fieldList.indexOf(l);
    if(idx===-1)    setFieldList(prev=>[...prev,l])
  }
    return (
      <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
        <InputLabel id="demo-select-small-label">Add Field</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={''}
          label="Paper Type"
          // onChange={(e)=>setType(null)}
        >
          {list.map((l,index)=>(
            <MenuItem value={l.value} onClick={()=>handleClick(l)}>{l.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
}

const chapterFieldList=[
    {value:'title',label:'Title'},
    {value:'authors',label:'Authors'},
    {value:'doi',label:'DOI'},
]
const FieldsSelector = ({fieldList,setFieldList}) => {
  const handleRemove=(idx)=>{
    var arr=fieldList.slice();
    arr.splice(idx,1);
    setFieldList(arr);
  }  
  return (
    <Wrapper>   
        <AddField  list={chapterFieldList} fieldList={fieldList} setFieldList={setFieldList}/>
        {
          fieldList.map((f,idx)=>(
            <span>{f.label}
            <CloseIcon onClick={()=>handleRemove(idx)}/>
            </span>
          ))
        }
    </Wrapper>
  )
}

export default FieldsSelector

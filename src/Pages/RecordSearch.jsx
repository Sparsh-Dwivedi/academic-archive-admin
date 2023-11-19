import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'
import moment from "moment";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { searchPaper, searchRecord } from '../utils/api';
import FieldSelector from '../Components/FieldSelector';
import Table from '../Components/Table';
import { useDispatch, useSelector } from 'react-redux'
import { getRecordFields, getRecordType } from '../utils/service';
import Loader from '../Components/Loader'

const Container=styled.div`
  width:100%;
  min-height:100vh; 
  max-height:max-content; 
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding:0 2rem;
  
`
const Title=styled.span`
    width: max-content;
    font-size: 1.8rem;
    font-weight: 500;
`
const Input=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  >button{
    width: max-content;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.4rem 0.8rem;
    cursor: pointer;
    background-color: #4087a2;
    color:white;
    border:none;
    border-radius:15px;
    margin-top:1rem;
  }
`
const Keyword=styled.input`
  width: 40%;
  font-size: 1rem;
  padding: 0.4rem 0.6rem;
  font-family:cursive;
  height:max-content;
`
const Year=styled.div`
  display: flex;
  justify-content: space-between;
  width:40%;
`
const Error=styled.span`
  color:red;
  font-weight: 600;
`

function CiteType({type,setType,setShowResult}) {

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="demo-select-small-label">Citation Type</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={type}
        label="Citation Type"
        onChange={(e)=>{setType(e.target.value); setShowResult(false)}}
      >
        <MenuItem value={null}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={'apa'}>APA</MenuItem>
        <MenuItem value={'mla'}>MLA</MenuItem>
        <MenuItem value={'chicago'}>Chicago</MenuItem>
        <MenuItem value={'vancouver'}>Vancouver</MenuItem>
        <MenuItem value={'manualfields'}>Extract Manual Fields</MenuItem>
      </Select>
    </FormControl>
  );
}

const RecordSearch = () => {
  const location = useLocation();
  const [user,setUser]=useState(null);
  const [department,setDeparment]=useState(null);
  const [type,setType]=useState(null);
  const [start,setStart]=useState(null);
  const [end,setEnd]=useState(null);
  const [loading,setLoading]=useState(false);
  const [showResult,setShowResult]=useState(false);
  const [result,setResult]=useState([]);
  const [error,setError]=useState('');
  const {token}=useSelector(state=>state.user)
  
  const search=async()=>{
    setError(null)
    setShowResult(false)
    setLoading(true)
    // if(type=='mtp' || type=='btp'){
      var req={
        start:start?start:'1990-01-01',
        end:end?end:moment(dayjs.$d).format('YYYY')
      }
      if(user)  req={...req,uid:user._id};
      else req={...req,department:department};
      console.log(req)
      const res= await searchRecord(req,type,token)
      console.log(res)
      if(res.status===200){
        setResult(res.data)
        setShowResult(true) 
      }
      else setError('Something went wrong,Unable to fetch data....')
    // }
    setLoading(false)

  }


  useEffect(()=>{
    if(location.state.record) setType(getRecordType(location.state.record))
    if(location.state && location.state.user){
      setUser(location.state.user)
    }
    else if(location.state && location.state.department){
      setDeparment(location.state.department)
    }
  },[])

  return (
    <Container>
      <Title>{user?user.name:department} - {location.state.record}</Title>
      {(type=='mtp' || type=='btp') && <Input>
        <Year>
          <DatePicker  label="Start Year" 
            views={['year']}
           sx={{
            margin:'10px',
            border:'0.1px solid black',     
            ":focus":{
              border:'1px solid black',
              background:'blue'
            }
            }}
            slotProps={{ textField: { size: 'small',width:'40%' } }}
            onChange={(newValue) => setStart(moment(newValue.$d).format('YYYY'))}
            value={start?dayjs(start,"YYYY-MM-DD"):null}
            format="YYYY"
          />
          <DatePicker label="End Year"
            views={['year']}
            sx={{
              margin:'10px', 
              border:'0.1px solid black',     
              ":focus":{
                border:'1px solid black',
                background:'blue'
              }
            }}
            slotProps={{ textField: { size: 'small',width:'40%' } }} 
            onChange={(newValue) => setEnd(moment(newValue.$d).format('YYYY'))}
            value={end?dayjs(end,"YYYY-MM-DD"):null} 
            format="YYYY"
          />
        </Year>
      </Input>}
     
      
      <Input>
        <button onClick={search}>Search</button> 
        <Error>{error}</Error>
      </Input>

      {type && showResult && <Table department={department} theadData={getRecordFields(type)} tbodyData={result} />}
      
      {loading && <Loader/>}
     
    </Container>
  )
}

export default RecordSearch

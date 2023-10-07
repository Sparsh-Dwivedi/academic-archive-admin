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
import { searchPaper } from '../utils/api';

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
const Papers=styled.div`
  display: flex;
  flex-direction: column;
  span{
    background-color: white;
    padding: 0.5rem;
    border-radius: 10px;
    margin: 0.5rem;
    -webkit-box-shadow: 0px 0px 10px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }
`
function CiteType({type,setType}) {

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="demo-select-small-label">Citation Type</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={type}
        label="Citation Type"
        onChange={(e)=>setType(e.target.value)}
      >
        <MenuItem value={null}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={'apa'}>APA</MenuItem>
        <MenuItem value={'mla'}>MLA</MenuItem>
        <MenuItem value={'chicago'}>Chicago</MenuItem>
        <MenuItem value={'vancouver'}>Vancouver</MenuItem>
      </Select>
    </FormControl>
  );
}
function PaperType({type,setType}) {

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="demo-select-small-label">Paper Type</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={type}
        label="Paper Type"
        onChange={(e)=>setType(e.target.value)}
      >
        <MenuItem value={null}>
          <em>None</em>
        </MenuItem>
        {/* <MenuItem value={'all'}>All</MenuItem> */}
        <MenuItem value={'book'}>Book</MenuItem>
        <MenuItem value={'chapter'}>Book Chapter</MenuItem>
        <MenuItem value={'journal'}>Journal</MenuItem>
        <MenuItem value={'conference'}>Conference</MenuItem>
      </Select>
    </FormControl>
  );
}
const Search = () => {
  const location = useLocation();
  const [user,setUser]=useState(null);
  const [department,setDeparment]=useState(null);
  const [type,setType]=useState(null);
  const [cite,setCite]=useState(null);
  const [keyword,setKeyboard]=useState('');
  const [start,setStart]=useState(null);
  const [end,setEnd]=useState(null);
  const [result,setResult]=useState([]);
  const [error,setError]=useState('');
  const pdfRef = useRef(null);

  const search=async()=>{
    setError(null)
    if(!cite) setError('Citation Style is required')
    if(!type) setError('Research Paper type is required')
    if(!cite || !type)  return;
    var req={
      query:keyword,
      start:start?start:'1990-01-01',
      end:end?end:moment(dayjs.$d).format('YYYY-MM-DD')
    }
    if(user)  req={...req,uid:user._id};
    else req={...req,department:department};
    const res= await searchPaper(req,cite,type)
    if(res.status===200){
      setResult(res.data)
    }
  }
  const savePDF=async()=>{
    // const doc = new jsPDF();
    // doc.setFontSize(12)
    // doc.text( result,20, 25,);
    // doc.save("research paper citation");
    // const content = pdfRef.current;
    // console.log(content)
    // const doc = new jsPDF();
    // doc.setFontSize("1");
    // doc.html(content, {
    //     callback: function (doc) {
    //         doc.save('sample.pdf');
    //     },
    //     width: 200, // <- here
    //     windowWidth: 200 // <- here
    // });
    var doc = new jsPDF("p", "pt", "letter"),
            source = document.getElementById("pdfcontent"),
            margins = {
              top: 40,
              bottom: 60,
              left: 40,
              right:40,
              width: 450,
              align: "justify"
            };
            console.log(source)
            console.log(doc)
        doc.fromHTML(
          source, // HTML string or DOM elem ref.
          margins.left, // x coord
          margins.top,
          // margins.right,
          {
            // y coord
            width: margins.width // max width of content on PDF
          },
          function(dispose) {
            // dispose: object with X, Y of the last line add to the PDF
            //          this allow the insertion of new lines after html
            doc.save(`${type+" "+cite.toUpperCase()}`);
          },
          margins
        );
  }

  useEffect(()=>{
    if(location.state && location.state.user) setUser(location.state.user)
    else if(location.state && location.state.user) setDeparment(location.state.department)
  },[])
  return (
    <Container>
      <Title>{user?user.name:''}</Title>
      <Input>
        <Keyword placeholder='Search Keyword or Title' 
          value={keyword} onChange={(e)=>setKeyboard(e.target.value)}/>
        <Year>
          <DatePicker  label="Date Start" 
           sx={{
            margin:'10px',
            border:'0.1px solid black',     
            ":focus":{
              border:'1px solid black',
              background:'blue'
            }
            }}
            slotProps={{ textField: { size: 'small',width:'40%' } }}
            onChange={(newValue) => setStart(moment(newValue.$d).format('YYYY-MM-DD'))}
            value={start?dayjs(start,"YYYY-MM-DD"):null}
            format="YYYY/MM/DD"
          />
          <DatePicker label="Date End"
            sx={{
              margin:'10px', 
              border:'0.1px solid black',     
              ":focus":{
                border:'1px solid black',
                background:'blue'
              }
            }}
            slotProps={{ textField: { size: 'small',width:'40%' } }} 
            onChange={(newValue) => setEnd(moment(newValue.$d).format('YYYY-MM-DD'))}
            value={end?dayjs(end,"YYYY-MM-DD"):null} 
            format="YYYY/MM/DD"
          />
        </Year>
      </Input>
      <Input>
          <PaperType type={type} setType={setType} />
          <CiteType type={cite} setType={setCite} />
      </Input>
      <Input>
        <button onClick={search}>Search</button> 
        <Error>{error}</Error>
        <button onClick={savePDF}>Save as PDF</button>
      </Input>

      {result.length&&type&&cite?
        <Papers id="pdfcontent" ref={pdfRef}>
          <h1>{user?user.name:department} - {type} {cite.toUpperCase()} style </h1>
          {result.map((r,index)=>
            <span>{index+1+") "+r}</span>  
          )}
        </Papers>
      :''}
    </Container>
  )
}

export default Search

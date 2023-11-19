import React, { useEffect } from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { parseField } from '../utils/service';

const Table = ({theadData,tbodyData,department}) => {
    console.log('table head')
    console.log(theadData)
    console.log('table body')
    console.log(tbodyData)
    useEffect(()=>{
        tbodyData.map(row=>{
            console.log('new')
            // console.log(row['doi'])
            theadData.map(key=>{
                // console.log(parseField(row,key.value))
            })
        })
    })
  return (
    <>
    <ReactHTMLTableToExcel
    id="test-table-xls-button"
    className="excel-button"
    table="table-to-xls"
    filename="tablexls"
    sheet="tablexls"
    buttonText="Export Data to Excel Sheet"/>

    <table className="table" id="table-to-xls">
        <thead className='tablehead'>
        <tr>
            {theadData.map(heading => {
                if(heading.label!=='Faculty Name' || (heading.label==='Faculty Name'&&department)){
                    return <th key={heading.label}>{heading.label.toUpperCase()}</th>
                }
                else return '';
            })}
        </tr>
        </thead>
        <tbody className='tablehead'>
            {tbodyData.map((row, index) => {
                return <tr key={index}>
                    {theadData.map((key, index) => {
                        if(key.label!=='Faculty Name' || (key.label==='Faculty Name'&&department))
                            return <td key={row[key.value]}>{parseField(row,key.value)}</td>
                        else return '';
                    })}
            </tr>;
            })}
        </tbody>
    </table>
    </>
  )
}

export default Table

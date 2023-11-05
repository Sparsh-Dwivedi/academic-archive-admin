import React, { useEffect } from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { parseField } from '../utils/service';

const Table = ({theadData,tbodyData}) => {
    console.log('table head')
    console.log(theadData)
    console.log('table body')
    console.log(tbodyData)
    useEffect(()=>{
        tbodyData.map(row=>{
            console.log('new')
            // console.log(row['doi'])
            theadData.map(key=>{
                console.log(parseField(row,key.value))
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
                return <th key={heading.label}>{heading.label.toUpperCase()}</th>
            })}
        </tr>
        </thead>
        <tbody className='tablehead'>
            {tbodyData.map((row, index) => {
                return <tr key={index}>
                    {theadData.map((key, index) => {
                        return <td key={row[key.value]}>{parseField(row,key.value)}</td>
                    })}
            </tr>;
            })}
        </tbody>
    </table>
    </>
  )
}

export default Table

import React from 'react'

const Table = ({theadData,tbodyData}) => {
  return (
    <table>
        <thead>
        <tr>
            {theadData.map(heading => {
            return <th key={heading}>{heading.toUpperCase()}</th>
            })}
        </tr>
        </thead>
        <tbody>
            {tbodyData.map((row, index) => {
                return <tr key={index}>
                    {theadData.map((key, index) => {
                        return <td key={row[key]}>{row[key]}</td>
                    })}
            </tr>;
            })}
        </tbody>
    </table>
  )
}

export default Table

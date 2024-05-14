import React from 'react'
import PropTypes from 'prop-types';

export const Student = (props) => {
  return (
    <div className='student-data'>
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Mark</th> 
            </tr>
            <tr>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.mark}</td>
            </tr>
            </tbody>
           
        </table>
    </div>
  )
}

Student.propTypes = {
    name :PropTypes.string,
    age :PropTypes.number,
    mark:PropTypes.number
}

Student.defalutprops = {
    name :" No name"
}
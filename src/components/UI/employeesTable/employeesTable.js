import React from 'react';
import './employeesTable.css';

const EmployeesTable= (props) => {

    console.log('Hello');
    console.log(props.emp);

    let renderTableData = null;

    if(props.emp.length >0){

        renderTableData = props.emp.map((employee, index) => {
                    const { employeeName, employeePhone } = employee; //destructuring
                    return (
                    <tr key={index}>
                    <td>{employeeName}</td>
                    <td>{employeePhone}</td>
                    </tr>
                    )
                });

    }
    else{
        renderTableData=<p>Table is empty</p>
    }

    return  <div className={'container'}>
        <h2 id='title'>Table Component</h2>

        <table>
            <tbody>
            {renderTableData}
            </tbody>
        </table>
        </div>
};

export default EmployeesTable;

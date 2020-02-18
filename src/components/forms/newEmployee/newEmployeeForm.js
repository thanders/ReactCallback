import React from 'react';

import  './newEmployeeForm.css'
class newEmployeeForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            employeePhone:'',
            employees:[]
        };

        // bind state to handle change and handle submit otherwise form submission will be blank
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // a generic change handler that assigns input name through event
    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value});
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log('submitted');
        console.log(this.state.employeeName);

        const newEmployee = {
            employeeName: this.state.employeeName,
            employeePhone: this.state.employeePhone
        };
        console.log(newEmployee);

        this.state.employees.push(newEmployee);
        this.props.parentcallback(this.state.employees);
    }

    render(){

        return  <div className={'container'}>
                    <h2>Form Component</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="empName">
                            Name
                            <input type="text" id="empName" name="employeeName" value={this.state.employeeName} onChange={this.handleChange} placeholder='name' />
                        </label>

                        <label htmlFor="empPhone">
                            Phone number
                            <input type="tel" id="empPhone" name="employeePhone"
                                   placeholder='number'
                                   value={this.state.employeePhone}
                                   onChange={this.handleChange}
                                   required/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                <div>
                    <p>
                        Current text is {this.state.employeeName};
                        Current phone number is {this.state.employeePhone}
                    </p>
                </div>
        </div>;
    }
}
export default newEmployeeForm;

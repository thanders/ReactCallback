import React from 'react';
import './App.css';
import NewEmployeeForm from './components/forms/newEmployee/newEmployeeForm';
import EmployeesTable from "./components/UI/employeesTable/employeesTable";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            employees:[],
        };

    }

    // A callback function to get new ReactCallback
    getNewEmployee = (childData) => {
        this.setState({employees: childData});
        console.log("callback called?");
        console.log(this.state.employees.length);
    };


    render() {

        return (

            <div className="App">
                <header className="App-header">
                    App Component
                </header>
                <div className="container">

                    <NewEmployeeForm parentcallback={this.getNewEmployee}/>

                    <EmployeesTable emp={this.state.employees}/>
                </div>
            </div>
        );
      }
}

export default App;

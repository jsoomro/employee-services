import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            //id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            hireDate: '',
            salary: '',
            managerId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changeHireDateHandler = this.changeHireDateHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeManagerIdHandler = this.changeManagerIdHandler.bind(this);

        this.saveEmployee = this.saveEmployee.bind(this);
    }

    
    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            hireDate: this.state.hireDate,
            salary: this.state.salary,
            managerId: this.state.managerId
        };
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        });
    }
    
    changeFirstNameHandler= (event) => {

        
        this.setState({firstName: event.target.value});


    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changePhoneNumberHandler= (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    changeHireDateHandler= (event) => {
        this.setState({hireDate: event.target.value});
    } 

    changeSalaryHandler= (event) => {
        this.setState({salary: event.target.value});
    }
    changeManagerIdHandler= (event) => {
        this.setState({managerId: event.target.value});
    }
   

    cancel(){
        this.props.history.push('/employees');
    }

   
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone Number: </label>
                                            <input placeholder="Phone Number" name="phoneNumber" className="form-control" 
                                                value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Hire Date: </label>
                                            <input placeholder="Hire Date" name="hireDate" className="form-control" 
                                                value={this.state.hireDate} onChange={this.changeHireDateHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Salary: </label>
                                            <input placeholder="Salary" name="salary" className="form-control" 
                                                value={this.state.salary} onChange={this.changeSalaryHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Manager ID: </label>
                                            <input placeholder="Manager ID" name="managerId" className="form-control" 
                                                value={this.state.managerId} onChange={this.changeManagerIdHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployee
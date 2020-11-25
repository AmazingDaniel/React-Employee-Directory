import React, { Component } from "react";
import Search from "./components/search";
import Table from "./components/table"
import Api from "./utils/API"

class App extends Component {
  state={
    employeeList:[],
    originalList:[],
    search:"",
  }
componentDidMount(){
  Api.getRandomPeople().then(employees =>{
    this.setState({
      employeeList: employees.data.results,
      originalList: employees.data.results
    })
  })
}
handleSubmit = col=> {
  let newEmployeeList = this.state.employeeList.sort((a,b)=>{
    return a.name[col].localeCompare(b.name[col])
  })
  this.setState({
    employeeList: newEmployeeList
  })
}
handleChange = event => {
  const {name, value} = event.target
   this.setState({
     [name]:value
   })
  console.log(value)
  let newEmployeeList = this.state.originalList.filter(employee=>{
    return employee.name.first.toLowerCase().includes(value.toLowerCase())
  })
  this.setState({
    employeeList: newEmployeeList
  })

}
  render() {
    return (<>

      <Search  search={this.state.search} handleChange = { this.handleChange} />
      <Table employeeList={this.state.employeeList} handleSubmit = {
        this.handleSubmit
      } />
      
    </>)
  }

}

export default App;
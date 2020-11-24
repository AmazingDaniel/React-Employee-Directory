import React, { Component } from "react";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import empolyees from "./employees.json";

class App extends Component {
  // Setting this.state.empolyees to the empolyees json array
  state = {
    empolyees
  };

  removeEmployee = id => {
    // Filter this.state.empolyees for empolyees with an id not equal to the id being removed
    const empolyees = this.state.empolyees.filter(empolyee => empolyee.id !== id);
    // Set this.state.empolyees equal to the new empolyees array
    this.setState({ empolyees });
  };

  // Map over this.state.empolyees and render a EmployeeCard component for each empolyee object
  render() {
    return (
      <Wrapper>
        <Title>Empolyees List</Title>
        <Table/>
        {/* {this.state.empolyees.map(empolyee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={empolyee.id}
            key={empolyee.id}
            name={empolyee.name}
            image={empolyee.image}
            occupation={empolyee.occupation}
            location={empolyee.location}
            salary={employee.salary}
            manager={employee.manager}
          />
        ))} */}
      </Wrapper>
    );
  }
}

export default App;
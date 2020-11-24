import React from "react"
function Table(props) {
  console.log(props.employeeList)
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col" onClick={() => props.handleSubmit("first")}>First</th>
          <th scope="col" onClick={() => props.handleSubmit("last")}>Last</th>
          <th scope="col">Email</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        {props.employeeList.length > 0 ? props.employeeList.map(employee => {
          return (
            <tr>
              <th scope="row"><img src={employee.picture.thumbnail} /></th>
              <td> {employee.name.first} </td>
              <td> {employee.name.last} </td>
              <td> {employee.email} </td>
              <td> {employee.location.country} </td>
            </tr>
          )
        })
          :

          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>

        }



      </tbody>
    </table>
  )

}

export default Table
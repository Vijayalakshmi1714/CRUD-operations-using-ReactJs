import React from "react";
import {Button,Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useNavigate} from "react-router-dom";
import Users from "./users";


function Home(){

    let history = useNavigate();
    
    function setID(id,Name,Email,MobileNumber,Age,Course){
        localStorage.setItem("id",id);
        localStorage.setItem("Name",Name);
        localStorage.setItem("Email",Email);
        localStorage.setItem("MobileNumber",MobileNumber);
        localStorage.setItem("Age",Age);
        localStorage.setItem("Course",Course);

    }

    function deleteID(id){
       let index = Users.map(function (e){
        return e.id;
       }).indexOf(id);

       //if (index !== -1) {
       // Users.splice(index, 1);
    //}
       Users.splice(index,1);
       history("/")
    }
return(
    <div style={{}}>
        <Table stripped bordered hover size="5m">
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>MobileNumber</th>
                <th>Age</th>
                <th>Course</th>
                </tr>
            </thead>
            <tbody>
                {
                     Users.map((item)=>  {
                    return(
                  <tr>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.MobileNumber}</td>
                    <td>{item.Age}</td>
                    <td>{item.Course}</td>
                    <td>
                        <Link to={'/edit'}>
                            <Button onClick={(e)=> setID(item.id,item.Name,item.Email,item.MobileNumber,item.Age,item.Course)}
                            variant="primary">
                                Update
                                </Button>
                        </Link>
                    </td>

                    <td>
                            <Button onClick={(e)=> deleteID(item.id)}
                            variant="danger">
                                Delete
                                </Button>
                    </td>
                  </tr>
                    )
                })
                 }
            </tbody>
        </Table>
        <Link className="d-grid gap-2" style={{"text-decoration":"none"}}to ="/create">
           <Button variant="success" size="small">
             Create Record
           </Button>
        </Link>
    </div>
)
}
export default Home;
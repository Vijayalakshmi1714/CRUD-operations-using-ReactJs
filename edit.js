import React,{useEffect, useState} from "react";
import { Button,Form, FormControl, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./users";
import { Link,useNavigate } from "react-router-dom";

function Edit(){
let history =useNavigate();
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [mobilenumber,setmobilenumber]=useState("")
  const [age,setage]=useState("")
  const [course,setcourse]=useState("")
  const [id,setid]=useState("")

  let index = Users.map(function (e){
    return e.id;
   }).indexOf(id);

   const handleSubmit=(e)=>{
    e.preventDefault();

    if(name ==="" || email ==="" || mobilenumber ==="" || age ==="" || course ===""  ){
        alert("Invalid Input");
        return;
    }
    let a = Users[index];
    a.Name= name;
    a.Email= email;
    a.MobileNumber = mobilenumber;
    a.Age = age;
    a.Course= course;

    history("/");
  }

   useEffect(()=> {
       setname(localStorage.getItem("Name"))
       setemail(localStorage.getItem("Email"))
       setmobilenumber(localStorage.getItem("Mobilenumber"))
       setage(localStorage.getItem("Age"))
       setcourse(localStorage.getItem("Course"))
       setid(localStorage.getItem("id"))
   },[] )
    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"5rem"}}>
                <FormGroup className="mb-2" controlId="Name">
                    <FormControl
                       value={name} 
                       onChange={(e)=>setname(e.target.value)}
                       type="text" placeholder="Enter your Name" required></FormControl>
                </FormGroup>
    
                <FormGroup className="mb-2" controlId="Email">
                    <FormControl 
                        value={email} 
                       onChange={(e)=>setemail(e.target.value)}
                       type="text" placeholder="Enter your email" required></FormControl>
                </FormGroup>
    
                <FormGroup className="mb-2" controlId="MobileNumber">
                    <FormControl
                        value={mobilenumber}  
                       onChange={(e)=>setmobilenumber(e.target.value)}
                       type="text" placeholder="Enter your mobilenumber" required></FormControl>
                </FormGroup>
    
                <FormGroup className="mb-2" controlId="Age">
                    <FormControl 
                        value={age} 
                       onChange={(e)=>setage(e.target.value)}
                       type="text" placeholder="Enter your age" required></FormControl>
                </FormGroup>
    
                <FormGroup className="mb-2" controlId="Course">
                    <FormControl 
                        value={course} 
                       onChange={(e)=>setcourse(e.target.value)}
                       type="text" placeholder="Enter your Course" required></FormControl>
                </FormGroup>
                <Button
                onClick={(e)=>handleSubmit(e)}
                variant="success" type="submit">
                     Update
                </Button>
    
                <Link className="d-grid gap-2" to="/">
                    <Button variant="info" size="sm">
                        Home
                        </Button>
    
                </Link>
            </Form>
        </div>
    
      )
}
export default Edit;
import React,{useState} from "react";
import { Button,Form, FormControl, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./users";
import {v4 as uuid} from "uuid";
import { Link,useNavigate } from "react-router-dom";

function Create(){

  let history=useNavigate();
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [mobilenumber,setmobilenumber]=useState("")
  const [age,setage]=useState("")
  const [course,setcourse]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();
    const ids=uuid();
    let uni=ids.slice(0,8);
    let a= name,
    b = email,
    c = mobilenumber,
    d = age,
    f = course;

    if(name ==="" || email ==="" || mobilenumber ==="" || age ==="" || course ===""  ){
        alert("Invalid Input");
        return;
    }

    Users.push({
        id:uni,
         Name: a,
         Email: b,
         MobileNumber: c,
         Age: d,
         Course: f
        })
        history("/")
  }
  return(
    <div>
        <Form className="d-grid gap-2" style={{margin:"5rem"}}>
            <FormGroup className="mb-2" controlId="Name">
                <FormControl 
                   onChange={(e)=>setname(e.target.value)}
                   type="text" placeholder="Enter your Name" required></FormControl>
            </FormGroup>

            <FormGroup className="mb-2" controlId="Email">
                <FormControl 
                   onChange={(e)=>setemail(e.target.value)}
                   type="text" placeholder="Enter your email" required></FormControl>
            </FormGroup>

            <FormGroup className="mb-2" controlId="MobileNumber">
                <FormControl 
                   onChange={(e)=>setmobilenumber(e.target.value)}
                   type="text" placeholder="Enter your mobilenumber" required></FormControl>
            </FormGroup>

            <FormGroup className="mb-2" controlId="Age">
                <FormControl 
                   onChange={(e)=>setage(e.target.value)}
                   type="text" placeholder="Enter your age" required></FormControl>
            </FormGroup>

            <FormGroup className="mb-2" controlId="Course">
                <FormControl 
                   onChange={(e)=>setcourse(e.target.value)}
                   type="text" placeholder="Enter your Course" required></FormControl>
            </FormGroup>
            <Button
            onClick={(e)=>handleSubmit(e)}
            variant="success" type="submit">
                 Submit
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
export default Create;
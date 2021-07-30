import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { setCreateUser, setEditUser } from '../features/userSlice'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

function CreateTask(props) {


    const [User, setUser] = useState([{
        id: "",
        First_Name: "",
        Last_Name: "",
        Email: ""
    }])
    const dispatch = useDispatch()
    const histroy = useHistory()

    useEffect(() => {
        if (props.data) {
            setUser(props.data)
        }
    }, [props.data])


    const handelChnages = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...User, [name]: value })
    }
    const handelCreateUser = () => {
        dispatch(setCreateUser({
            id: Math.floor((Math.random() * 100) + 1),
            First_Name: User.First_Name,
            Last_Name: User.Last_Name,
            Email: User.Email
        }))
        histroy.push("/")
    }
    const handelEditUser = () => {

        dispatch(setEditUser({
            id: User.id,
            First_Name: User.First_Name,
            Last_Name: User.Last_Name,
            Email: User.Email
        }))
        props.close()
    }
    return (
        <Container>
            <Contant >
                <Wrap>
                    <MainHeading> {props.Edit ? null : "Add user"}</MainHeading>
                    <SectionOne>
                        <p>Fist Name :-</p>
                        <input name="First_Name" type="text" value={User.First_Name || ""} placeholder="Enter First Name" onChange={(e) => handelChnages(e)} /><br />
                        <p>Last Name :-</p>
                        <input name="Last_Name" type="text" value={User.Last_Name || ""} placeholder="Enter Last Name" onChange={(e) => handelChnages(e)} /><br />
                        <p>Email :-</p>
                        <input name="Email" type="text" value={User.Email || ""} placeholder="Enter Email" onChange={(e) => handelChnages(e)} /><br />
                    </SectionOne>
                    <RightMenu>
                        {!props.Edit ? <Button onClick={handelCreateUser}>Submit</Button> : <Button onClick={handelEditUser}>Update</Button>}

                    </RightMenu>
                </Wrap>
            </Contant>
        </Container>
    )
}

export default CreateTask
const Container = styled.div`
text-align:center;
margin:8% 12px;
@media (max-width:768px){
    margin: 25% 6px;
}
`
const Contant = styled.div`
   display: grid;
   grid-gap: 25px;
   grid-template-columns: repeat(1, minmax(0,1fr));
  align-items:center;
 
`
const Wrap = styled.div`
    border-radius: 10px;
    border: 1px solid grey;
   box-sizing:border-box;
   padding:10px;
   width:50%;
   margin-left:auto;
  margin-right:auto;
  @media (max-width:768px){
    width:100%;
    margin-left:2px;
  margin-right:2px;
   }
`
const MainHeading = styled.h1`
  font-family: cursive;
`
const SectionOne = styled.div`
     text-align:left;
   input{
       font-size:15px;
       font-weight:600;
       width:90%;
       height:30px;
       margin:12px;
       border-radius: 15px;
       border-radius: 15px;
    border: 1px solid #000;
    outline: none;
    background-color: #fff8fb;
    text-decoration:none;
   }
  
   input:focus {
    background-color: white;
    color: #000;
   }
   p{
    font-weight:600;
       font-size:15px;
   }
   @media (max-width:768px){
    input{
       font-size:10px;
     
   }
    }
`
const RightMenu = styled.div`
      
   `
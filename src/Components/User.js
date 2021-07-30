import React, { useState, useEffect } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components'
import AddUser from './AddUser'
import { selectUser, setDeletUser } from '../features/userSlice'
import { useSelector, useDispatch } from 'react-redux'

function Users() {
    const AllUser = useSelector(selectUser)
    const dispatch = useDispatch()
    const [UserData, setUserData] = useState([])
    const [EditData, setEditData] = useState({})
    const [EditUser, setEditUser] = useState(false)

    useEffect(() => {
        setUserData(AllUser)
    }, [AllUser])
    const handelDelet = (id) => {
        dispatch(setDeletUser({
            id
        }))
    }
    const EditModal = (data) => {
        setEditData(data)
        setEditUser(!EditUser)
    }

    return (
        <Container>
            <Modal size="xl" show={EditUser} onHide={EditModal} >
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddUser data={EditData} Edit={EditUser} close={EditModal} />
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={EditModal}>Close</Button> */}
                </Modal.Footer>
            </Modal>

            <Table responsive striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {UserData && UserData.map((user, index) => (


                    <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{user.First_Name}</td>
                            <td>{user.Last_Name}</td>
                            <td>{user.Email}</td>
                            <td><Button variant="info" onClick={() => EditModal(user)}>Edit</Button>  <Button variant="danger" onClick={() => handelDelet(user.id)}>Delete</Button></td>
                        </tr>
                    </tbody>
                ))}
            </Table>

        </Container >
    )
}

export default Users

const Container = styled.div`
text-align:center;
margin:8% 12px;
@media (max-width:768px){
    margin: 25% 6px;
}
`

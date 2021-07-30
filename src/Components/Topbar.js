import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function Topbar() {

    return (

        <Container>
            <Menu>

                <Link to="/">All Users</Link>
                <Link to="/AddUser">Add User</Link>
            </Menu>

        </Container>
    )
}

export default Topbar

const Container = styled.div`
            min-height: 30px;
            position: fixed;
            display:flex;
            align-items:center;
            justify-content:space-around;
            padding:10px 20px;
            top:0;
            left:0;
            right:0;
            z-index:1;
            background-color:gray;
            `
const Menu = styled.div`
            display:flex;
            align-items:center;
            justify-content:center;
            flex:1;
         

            a {
               font-weight: 600;
               text-transform: uppercase;
               text-decoration:none;
               padding: 0 20px;
              flex-wrap:nowrap;
              color:white;
          }
            `

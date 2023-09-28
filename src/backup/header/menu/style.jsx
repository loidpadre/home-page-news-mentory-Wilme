import styled from "styled-components"

 export const MenuArea = styled.div`
    margin: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo h1{
        font-size:50px;
    }
    .menuLink ul{
        display: flex;
        li{
            list-style: none;
            padding-right: 25px;
            a{
                font-family: Arial;
                color: black;
                text-decoration: none;
            }
        }
    }
`
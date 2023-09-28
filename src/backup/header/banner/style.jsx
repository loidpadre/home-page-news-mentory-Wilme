import styled from "styled-components"
export const BannerArea = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 35px;
    .image img{
        width: 96%;
        
    }
    .leftSide{
        height: 570px;
        width: 60%;
        color: white;
        background-color: black;
        padding: 20px;
        h1{
            font-size: 40px;
            color: orange;
            margin-top: 10px;
            
        }
    }
    .textDown{
        display: flex;
        justify-content: space-between;
        
        h1{
            font-size: 65px;
            margin-right: 40px;
            margin-top: 20px;
        }
        .textSide{
            display: flex;
            flex-direction: column;
            width: 90%;
            margin-top: 30px;
            small{
                font-size: 18px;
                width: 90%;
                margin-bottom: 50px;
            }
            button{
                width: 50%;
                background-color: #ff4800;
                color: white;
                border: none;
                padding: 10px 15px;
            }
        }
    }
`
import styled from "styled-components"
export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 40px;
    margin-right: 10px;

    .image img{
        margin-right: 15px;
    }
    .text{
        padding: 10px;
        h3{
            color: #505050;
            font-size: 40px;
            margin: 10px 0px;
        }
        .title{
            font-weight: bold;
            font-size: 16px;
            
            
        }
        .desc{
            margin: 10px 0px;
        }
    }
`
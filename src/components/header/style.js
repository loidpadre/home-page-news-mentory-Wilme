import styled from "styled-components";

export const Wrapper = styled.header`
  display: grid;
  place-items: center;
  height: 130px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Menu = styled.menu`
  ul {
    display: flex;
    gap: 16px;
    list-style: none;
    li a {
      text-decoration: none;
      color: #7e7e7e;
      transition: 0.3s ease;
      &:hover {
        color: orange;
      }
    }
  }
`;


export const Logo = styled.div`
  font-size: 56px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
`;
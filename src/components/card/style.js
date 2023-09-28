import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  max-width: 405px;
  img {
    height: 180px;
  }
  .card__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      font-size: 56px;
      font-weight: 600;
      color: #ccc;
    }
    p {
      color: #ccc;
      font-size: 18px;
    }
  }
`;

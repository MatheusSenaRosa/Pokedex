import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: -30px;
  position: relative;

  z-index: 1;

  input {
    width: 300px;
    padding: 12px;
    padding-left: 15px;

    border-radius: 50px;
    background-color: #12c6f7;
    outline: none;
    border: 2px solid white;

    -webkit-box-shadow: -5px 7px 14px 2px #000000;
    box-shadow: -5px 7px 14px 2px #000000;

    color: white;
    font-size: 16px;
    font-weight: bold;

    &::placeholder {
      color: white;
      font-weight: bold;
      font-size: 16px;
    }
  }

  button {
    height: 45px;
    width: 45px;
    padding-bottom: 2px;

    position: absolute;
    right: 4px;
    top: 4px;

    color: white;
    font-size: 22px;

    background-color: #c71142;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition-duration: 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

import styled from "styled-components";

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ToDoList = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 5px;
  position: relative;

   /* Exemplo: Alterando o ToDoList em telas menores que 768px (Mobile) */
  @media (max-width: 575px) {
    padding: 15px 10px;
    width: 90%; /* ajusta a largura para 90% da tela */
  }

  ul {
    padding: 0;
    list-style: none;
    width: 100%;
    position: relative;
  }
`;

export const Input = styled.input`
  border: 2px solid rgba(289, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  margin-right: 40px;
  padding-left: 8px;
  width: 340px;

  @media(max-width: 575px) {
    margin-right: 10px;
  }

  @media(max-width: 549px) {
    display: block;
    margin: 0 0 10px 0;
    width: 95%;
  }
`;

export const Button = styled.button`
  //   background: #007bff;
  background: #8052ec;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 17px;
  line-height: 2px;
  font-weight: 900;
  height: 40px;
  width: 130px;

  &:hover {
    background: #8052ec;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const ListItem = styled.div`
  background: ${(props) => (props.isFinished ? "#E8FF8B" : "#E4E4E4")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 60px;
  padding: 0 12px;
  width: 500px;

  @media (max-width: 575px) {
    width: 90%;
  }

`;

export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
`;
export const Check = styled(FcCheckmark)`
  cursor: pointer;
`;

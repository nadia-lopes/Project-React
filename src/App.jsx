import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Trash,
  Check,
} from "./styles.js";

function App() {
  // Código JavaScript
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem("todo-list");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [inputTask, setInputTask] = useState("");

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(list));
  }, [list]);

  function handleChange(event) {
    setInputTask(event.target.value);
  }

  function handleClick() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }]);
    }
  }

  function finalizarTarefa(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item,
    );

    setList(newList);
  }

  function deletarTarefa(id) {
    console.log("deletarTarefa", id);
    const newList = list.filter((item) => item.id !== id); // Filtra a lista removendo o item com o id correspondente
    setList(newList);
  }

  // Código HTML
  return (
    // FRAGMENT
    <Container>
      <ToDoList>
        <h1>Bloco de Anotações</h1>
        <Input
          onChange={handleChange}
          placeholder="O que tenho para fazer..."
        />
        <Button onClick={handleClick}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletarTarefa(item.id)} />
              </ListItem>
            ))
          ) : (
            <small>Não há itens na lista</small>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;

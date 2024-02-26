import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import FormAlternative from "../FormAlternative";
import { MotionFlex, animationItem } from "../../styles/animation";

const getTodosFromLS = () => {
    const data = localStorage.getItem('Todos');

    if (data) {
      return JSON.parse(data);

    }
    else {
      return [];
    }
  };

export default function Form() {

    const [todoValue, setTodoValue] = useState('');

    const [todos, setTodos] = useState(getTodosFromLS());

    const [id, setId] = useState(0);

    const [editForm, setEditForm] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const date = new Date();
        const time = date.getTime();

        interface TodoObjectProps {
          ID: number;
          TodoValue: string;
          completed: boolean;
        };
    
        let todoObject: TodoObjectProps = {
          ID: time,
          TodoValue: todoValue,
          completed: false
        };
        setTodos([...todos, todoObject]);
        setTodoValue('');
      };

      useEffect(() => {
        localStorage.setItem('Todos', JSON.stringify(todos));
        
      }, [todos]);

      interface Todo {
        ID: number;
      };

      const handleDelete = (id: number): void => {
        const filtered: Todo = todos.filter((todo: Todo) => {
          return todo.ID !== id;

        });
        setTodos(filtered);
      };

      interface HandleEditProps {
        TodoValue: string;
      };

      const handleEdit = (todo: HandleEditProps, index: number): void => {
        setEditForm(true);
        setId(index);
        setTodoValue(todo.TodoValue);
      };

      const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let items = [...todos];
        let item = items[id];
        item.TodoValue = todoValue;
        item.completed = false;
        items[id] = item;
        setTodos(items);
        setTodoValue('');
        setEditForm(false);
      }


      const handleCheckbox = (id: number): void => {
        
        let todoArray: object[] = [];

        todos.forEach((todo: { ID: number; completed: boolean; }) => {
          if (todo.ID === id) {            
            if (todo.completed === false) {
              todo.completed = true;

            } else if (todo.completed === true) {
              todo.completed = false;

            };
          };
          todoArray.push(todo);
          setTodos(todoArray);
        });
      };

    return (
        <Flex 
          flexDirection={"column"}>
              {editForm === false && (
                  <FormAlternative 
                    onSubmit={handleSubmit} 
                    handleChangeCallback={setTodoValue} 
                    todoValue={todoValue} 
                    EditForm={false} />
              )}

              {editForm === true && (
                  <FormAlternative 
                    onSubmit={handleEditSubmit} 
                    handleChangeCallback={setTodoValue} 
                    todoValue={todoValue} 
                    EditForm={true} />
              )}
                <Flex 
                  width={"360px"} 
                  flexDirection={"column"} 
                  marginTop={"31px"}>
                    {todos.map((individualTodo: {
                        completed: boolean; 
                        ID: number; 
                        TodoValue: string
                        }, index: any) => (
                          <MotionFlex
                            variants={animationItem} 
                            key={individualTodo.ID} 
                            background={"#340a75"} 
                            border={"1px solid #7720ff"} 
                            borderRadius={"4px"} 
                            boxShadow={"10px 10px 14px 1px rgba(00, 00, 00, 0.2)"} 
                            margin={"12px 0"} 
                            padding={"8px 10px"} 
                            justifyContent={"space-between"} 
                            alignItems={"center"}>
                              <Flex 
                                alignItems={"center"}>
                                  <input
                                    style={editForm ? { display: "none"} : {display: "inline-block"}} 
                                    type="checkbox" 
                                    checked={individualTodo.completed} 
                                    onChange={() => handleCheckbox(individualTodo.ID)}>
                                  </input>
                                  <Text
                                    fontSize={"20px"} 
                                    fontWeight={"400"} 
                                    display={"flex"}
                                    marginLeft={"10px"}
                                    whiteSpace={"nowrap"}
                                    overflow={"hidden"}
                                    overflowX={"auto"} 
                                    style={individualTodo.completed ? {textDecoration : 'line-through'} : {textDecoration:'none'}}>
                                      {individualTodo.TodoValue}
                                  </Text>
                              </Flex>
                              <Box
                                display={editForm ? "none" : "flex"}
                                alignItems={"center"}>
                                <Box 
                                  marginRight="7px" 
                                  onClick={() => handleEdit(individualTodo, index)}>
                                    <EditIcon w={18}/>
                                </Box>
                                <Box 
                                  onClick={() => handleDelete(individualTodo.ID)}>
                                    <DeleteIcon w={18}/>
                                </Box>
                              </Box>
                          </MotionFlex>
                      ))}
                </Flex>
          </Flex>
    );
};


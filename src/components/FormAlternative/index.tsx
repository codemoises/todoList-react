import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { Button, FormControl, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEventHandler } from "react";

interface EditFormProps {
    onSubmit: FormEventHandler<HTMLFormElement>;
    handleChangeCallback: Function;
    todoValue: any;
    EditForm?: boolean;
}

const styles = {
    display: "flex", 
    justifyContent: "center"
}

export default function FormAlternative({ onSubmit, handleChangeCallback, todoValue, EditForm }: EditFormProps) {
    return (
        <form 
          style={styles} 
          onSubmit={onSubmit}>
            <FormControl 
              width={"280px"} 
              marginTop={"46px"} 
              display={"flex"} 
              alignItems={"center"} 
              boxShadow={"10px 10px 14px 1px rgba(00,00,00,0.2)"}>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    {EditForm ? <CheckIcon /> : <AddIcon />}
                  </InputLeftElement>
                  <Input
                    background={"#4f416afc"}
                    color={"#fff"}
                    border={"0"}
                    placeholder={EditForm ? '' : 'Adicionar uma tarefa'}
                    _placeholder={{ color: '#fff' }}
                    required
                    onChange={(e) => handleChangeCallback(e.target.value)}
                    value={todoValue}
                    _focusVisible={{ }} />
                </InputGroup>
            </FormControl>
        </form>
    );
};
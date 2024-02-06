import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { Button, FormControl, Input } from "@chakra-ui/react";
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
                <Input 
                  placeholder='Adicione uma tarefa' 
                  required
                  onChange={(e) => handleChangeCallback(e.target.value)} 
                  value={todoValue} 
                  _focusVisible={{ }} />
                    <Button 
                      type="submit" 
                      color={"white"} 
                      marginLeft={"6px"} 
                      padding={"0"} 
                      variant='outline' 
                      _hover={{}} 
                      _active={{}}>
                        {EditForm ? <CheckIcon /> : <AddIcon />}
                    </Button>
            </FormControl>
        </form>
    );
};
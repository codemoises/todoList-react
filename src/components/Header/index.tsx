import { Heading } from "@chakra-ui/react";

export default function Header() {
    return (
        <Heading 
          as={"h1"} 
          fontFamily={"'Poppins', sans-serif"} 
          fontSize={["48px", "48px", "48px", "68px", "68px"]}
          marginTop={"46px"}>
            Tarefas
        </Heading>
    );
};
import { Heading } from "@chakra-ui/react";

export default function Header() {
    return (
        <Heading 
          as={"h1"} 
          fontFamily={"'Poppins', sans-serif"} 
          fontSize={["48px", "48px", "48px", "80px", "80px"]} 
          marginTop={"46px"}>
            TODO app
        </Heading>
    );
};
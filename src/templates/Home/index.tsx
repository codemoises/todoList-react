import Form from "../../components/Form";
import Header from "../../components/Header";
import { MotionFlex, animationContainer } from "../../styles/animation";

export default function Home() {
    return (
        <MotionFlex 
          w={"100%"}
          flexDirection={"column"} 
          alignItems={"center"}
          variants={animationContainer}
          initial={"hidden"}
          animate={"visible"}
          >
            <Header />
            <Form />
        </MotionFlex>
    );
};
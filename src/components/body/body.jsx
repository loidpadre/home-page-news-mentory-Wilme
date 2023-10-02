import { Aside } from "./components/aside/aside";
import { Container } from "./components/container/container";
import { Wrapper } from "./style";

export function Body(){
    return(
        <Wrapper>
            <Container/>
            <Aside/>
        </Wrapper>
    )
}
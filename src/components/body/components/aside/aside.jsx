// import { AsideCard } from "./components/asideCard";
import { AsideCard } from "./components/asideCard";
import { Wrapper } from "./style";

export function Aside(){
    return(
        <Wrapper>
            <h1>New</h1>
            <AsideCard/>
            <AsideCard/>
            <AsideCard/>
            {/* <AsideCard/>
            <AsideCard/>
            <AsideCard/> */}
             
        </Wrapper>
    )
}
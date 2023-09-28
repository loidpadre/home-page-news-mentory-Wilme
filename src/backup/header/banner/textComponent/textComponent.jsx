import { TextArea } from "./style"
function TextComponent({title, descr}){
    return(
        <TextArea>
            <h4>{title}</h4>
            <small>{descr}</small>
        </TextArea>
    )
}
export default TextComponent
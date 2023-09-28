import {MenuArea} from "./style"

function Menu(){
    return(
        <MenuArea>
            <div className="logo">
                <h1>W.</h1>
            </div>
            <div className="menuLink">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trading</a></li>
                    <li><a href="#">Categoria</a></li>
                </ul>
            </div>
        </MenuArea>
    )
}
export default Menu
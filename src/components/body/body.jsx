import { BodyArea } from "./style"
import CardComponents from "./cardComponents/CardComponents"
 import imag from "../../assets/image-retro-pcs.jpg"
 import img2 from "../../assets/image-top-laptops.jpg"
 import imagecard3 from "../../assets/image-gaming-growth.jpg"
function Body(){
    return(
        <BodyArea>
            <CardComponents img={imag} number="01" title="Reviving Retro Pcs" text="Whats happens hwen old Pcs are fiven modern Upgrades"/>
            <CardComponents img={img2} number="02" title="Top 10 Laptops of 2022" text="Our best picksviriousneeds and budgets."/>
            <CardComponents img={imagecard3} number="03" title="The growth of Gaming" text="How the pandemic hes sparket fresh opportunitys"/>
        </BodyArea>
    )
}
export default Body
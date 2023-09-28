import { BannerArea } from "./style"
import TextComponent from "./textComponent/textComponent"
import imageBanner from "../../../assets/image-web-3-desktop.jpg"
function Banner(){
    return(
        <BannerArea>
            <div className="rightSide">
                <div className="image">
                    <img src={imageBanner} alt="bannerImage"/>
                </div>
                <div className="textDown">
                    <h1>The Bright Future of Web 3.0?</h1>
                    <div className="textSide">
                        <small>
                            We dive Into the next evoluction of web that claim to put power oof the platfomrs back into the hands of people. But is it really fulfilling is promise?
                        </small>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
            <div className="leftSide">
                <h1>New</h1>
                <TextComponent title="hydrogen VS Electric Cars" descr="Will hydrogen-fueled cars ever catch up to Evs!"/>
                <hr  color="#222" />
                <TextComponent title="The Downsides of AI artistry" descr="what are the possible adverse effescts of on-demand A image Generate"/>
                <hr  color="#222"  className="hr"/>
                <TextComponent title="Is VC Funding Drying Up" descr="Privatefounding by VC firms is down 50% YOY. we take a look at what that means."/>
            </div>
        </BannerArea>
    )
}
export default Banner
import IMG from "../../../../assets/image-web-3-desktop.jpg"
import { Wrapper } from "./style"
export function Container(){
    return(
        <Wrapper>
            <img src={IMG} alt="bady" />
            <div className="text">
                <div className="title">
                    <h1>The Bright Future of Web 3.0?</h1>
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Officia repellendus, perferendis assumenda eveniet, dolores 
                        voluptas dolor rerum enim earum quis culpa esse excepturi 
                        officiis totam modi praesentium libero eos. Hic?
                    </p>
                    <button>READ MORE</button>
                </div>
            </div>

        </Wrapper>
    )
}
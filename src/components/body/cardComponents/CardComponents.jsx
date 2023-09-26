import { Card } from "./style"
function CardComponents({img, title, text, number}){
    return(
        <Card>
           <div className="image">
                <img src={img} />
           </div>
           
           <div className="text">
                <h3>{number}</h3>
                <small className="title">{title}</small><br />
                <small className="desc">{text}</small>
           </div>
        </Card>
    )
}
export default CardComponents
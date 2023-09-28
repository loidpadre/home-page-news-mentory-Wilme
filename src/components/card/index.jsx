import { Wrapper } from "./style";

export default function Card({id, title, img, description}) {
  return (
    <Wrapper>
      <img src={img} alt="" />
      <div className="card__body">
        <span>{id}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
}

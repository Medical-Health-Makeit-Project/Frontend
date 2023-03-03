import { BsArrowRight } from 'react-icons/bs';
import { GiBrokenBone } from 'react-icons/gi';

export const Orthopedics = () => {
  return (
    <article className="scroll__card">
      <div className="icon__container">{<GiBrokenBone size={25} color={'white'} />}</div>
      <div className="scroll__card-text">
        <p className="scroll__card-title">Orthopedics</p>
        <p className="scroll__card-description">
          Lorem ipsum dolor sit amet <br></br>consectetur adipisicing.
        </p>
      </div>
      <div className="more__container">
        <p>Read more</p>
        <span>{<BsArrowRight color="black" />}</span>
      </div>
    </article>
  );
};

import { GiBrain } from 'react-icons/gi';
import { BsArrowRight } from 'react-icons/bs';

export const Psychiatry = () => {
  return (
    <article className="scroll__card">
      <div className="icon__container">{<GiBrain size={25} color={'white'} />}</div>
      <div className="scroll__card-text">
        <p className="scroll__card-title">Psychiatry</p>
        <p className="scroll__card-description">
          Lorem ipsum dolor sit amet<br></br> consectetur adipisicing.
        </p>
      </div>
      <div className="more__container">
        <p>Read more</p>
        <span>{<BsArrowRight color="black" />}</span>
      </div>
    </article>
  );
};

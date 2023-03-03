import { GiStomach } from 'react-icons/gi';
import { BsArrowRight } from 'react-icons/bs';

export const Nutrition = () => {
  return (
    <article className="scroll__card">
      <div className="icon__container">{<GiStomach size={25} color={'white'} />}</div>
      <div className="scroll__card-text">
        <p className="scroll__card-title">Nutrition</p>
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

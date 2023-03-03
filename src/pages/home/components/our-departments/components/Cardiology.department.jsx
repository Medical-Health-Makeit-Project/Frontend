import { FaHeartbeat } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

export const Cardiology = () => {
  return (
    <article className="scroll__card">
      <div className="icon__container">{<FaHeartbeat size={25} color={'white'} />}</div>
      <div className="scroll__card-text">
        <p className="scroll__card-title">Cardiology</p>
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

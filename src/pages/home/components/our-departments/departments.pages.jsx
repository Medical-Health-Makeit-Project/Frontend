import './departments.pages.css';
import { BsArrowRight } from 'react-icons/bs';
import { FaHeartbeat } from 'react-icons/fa';
import { GiBrokenBone } from 'react-icons/gi';
import { BsEyeglasses } from 'react-icons/bs';
import { FaBaby } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import { GiStomach } from 'react-icons/gi';

export const Departments = () => {
  return (
    <section className="departments">
      <div className="text__container">
        <p>Our department</p>
        <h3>Our hospital has all kinds of department services</h3>
      </div>

      <div className="scroll__container">
        <article className="scroll__card">
          <div className="icon__container">{<GiBrokenBone size={25} color={'white'} />}</div>
          <p>Orthopedics</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates doloribus atque iste.
          </p>
          <div className="more__container">
            <p>Read more</p>
            <span>{<BsArrowRight color="black" />}</span>
          </div>
        </article>

        <article className="scroll__card">
          <div className="icon__container">{<FaHeartbeat size={25} color={'white'} />}</div>
          <p>Cardiology</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates doloribus atque iste.
          </p>
          <div className="more__container">
            <p>Read more</p>
            <span>{<BsArrowRight color="black" />}</span>
          </div>
        </article>

        <article className="scroll__card">
          <div className="icon__container">{<BsEyeglasses size={25} color={'white'} />}</div>
          <p>Ophthalmology</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates doloribus atque iste.
          </p>
          <div className="more__container">
            <p>Read more</p>
            <span>{<BsArrowRight color="black" />}</span>
          </div>
        </article>

        <article className="scroll__card">
          <div className="icon__container">{<FaBaby size={25} color={'white'} />}</div>
          <p>Pediatrics</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates doloribus atque iste.
          </p>
          <div className="more__container">
            <p>Read more</p>
            <span>{<BsArrowRight color="black" />}</span>
          </div>
        </article>

        <article className="scroll__card">
          <div className="icon__container">{<GiBrain size={25} color={'white'} />}</div>
          <p>Psychiatry</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates doloribus atque iste.
          </p>
          <div className="more__container">
            <p>Read more</p>
            <span>{<BsArrowRight color="black" />}</span>
          </div>
        </article>

        <article className="scroll__card">
          <div className="icon__container">{<GiStomach size={25} color={'white'} />}</div>
          <p>Nutrition</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates doloribus atque iste.
          </p>
          <div className="more__container">
            <p>Read more</p>
            <span>{<BsArrowRight color="black" />}</span>
          </div>
        </article>
      </div>
    </section>
  );
};

import './info.payment.scss';

export const Info = () => {
  return (
    <article className="info-container">
      <ul className="info-container__ul">
        <li className="info-container__li">
          *Shipping charges will be notified according to your location during
          the transaction process.
        </li>
        <li className="info-container__li">
          *If you only are paying an appointment you will not charge with any
          shipping costs
        </li>
      </ul>
    </article>
  );
};

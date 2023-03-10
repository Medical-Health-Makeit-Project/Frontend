import { ProductQuantity } from '../productQuantity';
import './modal.shop.scss';

export const ContentModal = ({
  image,
  description,
  label,
  product,
  dose,
  price,
}) => {
  return (
    <article className="modal-container">
      <div className="image-container">
        <img src={image} alt="product" className="image" />
      </div>
      <section>
        <div className="modal-container__description">
          <h2 className="modal-container__title">{product}</h2>
          {description}
          <div className="modal-container__detail">
            <div className="modal-container__label">
              <p>Label:</p>
              <p>
                <b>{label}</b>{' '}
              </p>
            </div>
            <div className="modal-container__dose">
              <p>Dose:</p>
              <p>{dose}</p>
            </div>
            <div className="modal-container__price">
              <p>Price:</p>
              <p>${price}</p>
            </div>
          </div>
        </div>
        <ProductQuantity />
      </section>
    </article>
  );
};

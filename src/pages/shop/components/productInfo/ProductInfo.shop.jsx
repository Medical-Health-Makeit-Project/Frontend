import './productInfo.shop.scss';

export const ProductInfo = ({ product, dose, price, label }) => {
  return (
    <section className="product-info">
      <div className="product-name-container">
        <p className="product-name-container__name">{product}</p>
      </div>
      <div className="product-data-container">
        <p className="product-data-container__label">{label}</p>
        <p className="product-data-container__dose">{dose}</p>
      </div>
      <div className="product-info__price">${price}</div>
    </section>
  );
};

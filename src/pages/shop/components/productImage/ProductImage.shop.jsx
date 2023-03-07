import './productImage.shop.scss';

export const ProductImage = ({ id, image, discount, product }) => {
  return (
    <section className="image-container">
      {!discount || <div className="discount-flag">{discount}%</div>}
      <img src={image} alt={product} className="image-container__image" height={'280px'} width="280px" />
    </section>
  );
};

import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Loading } from '@components/loading';
import { Button } from '@components/buttons';
import { useIsLoading } from '@hooks';
import { useProductsContext } from '../../context/products.context';
import emptyImage from '@assets/empty-avatar.png';
import './form.products.administration.scss';

export const Form = () => {
  const [newProduct, setNewProduct] = useState({
    product: '',
    label: '',
    description: '',
    price: '',
    stock: '',
    image: '',
    dose: '',
    discount: 0,
    category: '',
    newCategory: '',
  });
  const [imageSelected, setImageSelected] = useState('');
  const [isUpdating, setIsupdating] = useState(false);
  const { isLoading } = useIsLoading();
  const { categories } = useProductsContext();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const avatarURL = URL.createObjectURL(file);
    setAvatarSelected(avatarURL);
    setNewProduct({
      ...newProduct,
      image: file,
    });
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    if (name === 'price' || name === 'discount' || name === 'stock') {
      return setNewProduct({
        ...newProduct,
        [name]: +value,
      });
    }
    if (newProduct.category !== 'Other') {
      return setNewProduct({
        ...newProduct,
        [name]: value,
        newCategory: '',
      });
    }
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <h1 className="products-form__h1">Products</h1>
      <form className="form-products">
        <div className="form-products__input-container">
          <label htmlFor="ProductName" className="form-products__label">
            Product name:
          </label>
          <div>
            <input
              type="text"
              name="productName"
              id="productName"
              className="form-products__input-text"
              onChange={handleChangeForm}
            />
            <p className="form-products__error-message"></p>
          </div>
        </div>
        <div className="form-products__input-container">
          <label htmlFor="labelName" className="form-products__label">
            Label name:
          </label>
          <div>
            <input
              type="text"
              name="labelName"
              id="labelName"
              className="form-products__input-text"
              onChange={handleChangeForm}
            />
            <p className="form-products__error-message">{}</p>
          </div>
        </div>
        <div className="form-products__input-container">
          <label htmlFor="price" className="form-products__label">
            Price:
          </label>
          <div>
            <input
              type="text"
              name="price"
              id="price"
              className="form-products__input-text"
              onChange={handleChangeForm}
            />
            <p className="form-products__error-message">{}</p>
          </div>
        </div>
        <div className="form-products__input-container">
          <label htmlFor="stock" className="form-products__label">
            Stock:
          </label>
          <div>
            <input
              type="text"
              name="stock"
              id="stock"
              className="form-products__input-text"
              onChange={handleChangeForm}
            />
            <p className="form-products__error-message">{}</p>
          </div>
        </div>
        <div className="form-products__input-container">
          <label htmlFor="dose" className="form-products__label">
            Dose:
          </label>
          <div>
            <input
              type="text"
              name="dose"
              id="dose"
              className="form-products__input-text"
              onChange={handleChangeForm}
            />
            <p className="form-products__error-message">{}</p>
          </div>
        </div>
        <div className="form-products__input-container">
          <label htmlFor="discount" className="form-products__label">
            Discount:
          </label>
          <div>
            <input
              type="text"
              name="discount"
              id="discount"
              className="form-products__input-text"
              onChange={handleChangeForm}
            />
            <p className="form-products__error-message">{}</p>
          </div>
        </div>
        <div className="form-products__select-container">
          <label htmlFor="category" className="form-products__label">
            Category:
          </label>
          <div className="form-products-selects-container">
            <select
              name="category"
              id="category"
              className="form-products__input-select"
              value={newProduct.category}
              onChange={handleChangeForm}
            >
              <option value="" disabled defaultValue>
                --Choose a category--
              </option>
              <option>Other</option>
              {categories?.map((e) => {
                return (
                  <option key={uuid()} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
            {newProduct.category === 'Other' && (
              <input
                type="text"
                placeholder="New category"
                name="newCategory"
                className="form-products__input-text"
                onChange={handleChangeForm}
              />
            )}

            <p className="form-products__error-message">{}</p>
          </div>
        </div>
        <div className="form-products__input-container">
          <label className="form-products__label">Upload Image: </label>
          <div className="form-products__image-selection">
            <label htmlFor="image" className="form-products__btn-upload-image">
              Choose the Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/jpeg, image/png, image/webp"
              onChange={handleImageUpload}
              hidden
            />
            <div className="form-products-image-container">
              <img
                className="form-products-image-container__img"
                src={imageSelected || emptyImage}
                alt="product"
              />
            </div>
          </div>
          <p className="form-products__error-message">{}</p>
        </div>
        <div className="form-products__input-container">
          <label htmlFor="description" className="form-products__label">
            Description:
          </label>
          <div>
            <div className="input-container-textarea">
              <textarea
                name="description"
                id="description"
                className="input-container__textarea"
                maxLength={200}
                onChange={handleChangeForm}
              ></textarea>
            </div>
            <p className="form-products__error-message">{}</p>
          </div>
        </div>

        <Button
          color="danger"
          type={isUpdating ? 'button' : 'submit'}
          className="form-products__btn-submitter"
          // onClick={isUpdating ? handleUpdateDoctor : null}
        >
          {isUpdating ? 'UPDATE' : 'CREATE'}
        </Button>
        <Button color="info" className="form-products__btn-clear">
          CLEAR
        </Button>
      </form>
    </>
  );
};

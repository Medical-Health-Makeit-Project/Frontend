import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Loading } from '@components/loading';
import { Button } from '@components/buttons';
import { useIsLoading } from '@hooks';
import { useProductsContext } from '../../context/products.context';
import { errorMessage } from '@utils/toastify/error.toastify';
import emptyImage from '@assets/empty-avatar.png';
import './form.products.administration.scss';
import * as Yup from 'yup';

const schemaYup = Yup.object().shape({
  product: Yup.string().required(),
  label: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.number().required(),
  stock: Yup.number().required(),
  dose: Yup.string().required(),
  discount: Yup.number().required(),
  category: Yup.string().required(),
  newCategory: Yup.string().required(),
});

export const Form = () => {
  const [newProduct, setNewProduct] = useState({
    product: '',
    label: '',
    description: '',
    price: '',
    stock: '',
    image: '',
    dose: '',
    discount: '',
    category: '',
    newCategory: '',
  });
  const [imageSelected, setImageSelected] = useState('');
  const [isUpdating, setIsupdating] = useState(false);
  const { isLoading } = useIsLoading();
  const { categories, ProductToBeUpdated, setProductToBeUpdated } = useProductsContext();

  useEffect(() => {
    setNewProduct({
      product: ProductToBeUpdated.product,
      label: ProductToBeUpdated.label,
      description: ProductToBeUpdated.description,
      price: ProductToBeUpdated.price,
      stock: ProductToBeUpdated.stock,
      image: ProductToBeUpdated.image,
      dose: ProductToBeUpdated.dose,
      discount: ProductToBeUpdated.discount,
      category: ProductToBeUpdated.category,
      newCategory: '',
    });
    if (!Object.values(ProductToBeUpdated).some((e) => e === '')) return setIsupdating(true);
    setIsupdating(false);
  }, [ProductToBeUpdated]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setImageSelected(imageURL);
    setNewProduct({
      ...newProduct,
      image: file,
    });
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    if (name === 'price' || name === 'discount' || name === 'stock') {
      if (value === '' || +value) {
        return setNewProduct({
          ...newProduct,
          [name]: value,
        });
      } else {
        return errorMessage('You must provide only numbers');
      }
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

  const handleUpdateDoctor = () => {
    const { image } = newProduct;
    if (typeof image === 'string') {
      const form = new FormData();
      const { image, ...toUpdate } = newProduct;
      for (const key in toUpdate) {
        form.append(key, toUpdate[key]);
      }
      //TO-DO: add an axios call with UPDATE method to the correspondent URL provided by the backend sending the form variable in 81 line
      // ...
      handleClearForm();
      return;
    }
    const form = new FormData();
    for (const key in newProduct) {
      form.append(key, newProduct[key]);
    }
    //TO-DO: add an axios call with UPDATE method to the correspondent URL provided by the backend sending the form variable in 91 line
    // ...
    handleClearForm();
    return;
  };

  const handleClearForm = () => {
    setImageSelected('');
    setProductToBeUpdated({
      product: '',
      label: '',
      description: '',
      price: '',
      stock: '',
      image: '',
      dose: '',
      discount: 0,
      category: '',
    });
    setNewProduct({
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
              value={newProduct.product}
            />
            <p className="form-products__error-message"></p>
          </div>
        </div>
        <div className="form-products__input-container">
          <label htmlFor="label" className="form-products__label">
            Label name:
          </label>
          <div>
            <input
              type="text"
              name="label"
              id="label"
              className="form-products__input-text"
              onChange={handleChangeForm}
              value={newProduct.label}
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
              value={newProduct.price}
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
              value={newProduct.stock}
            />
            <p className="form-products__error-message">{}</p>
          </div>
        </div>
        <div className="form-products__input-container">
          <label htmlFor="dose" className="form-products__label">
            Dose <span className="dose-example">(example: 12mg/ml)</span>:
          </label>
          <div>
            <input
              type="text"
              name="dose"
              id="dose"
              className="form-products__input-text"
              onChange={handleChangeForm}
              value={newProduct.dose}
            />
            <p className="form-products__error-message">{}</p>
          </div>
        </div>
        <div className="form-products__input-container">
          <label htmlFor="discount" className="form-products__label">
            Discount (%):
          </label>
          <div>
            <input
              type="text"
              name="discount"
              id="discount"
              className="form-products__input-text"
              onChange={handleChangeForm}
              value={newProduct.discount}
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
              onChange={handleChangeForm}
              value={newProduct.category}
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
                src={
                  isUpdating
                    ? newProduct.image instanceof File
                      ? imageSelected
                      : newProduct.image
                    : imageSelected || emptyImage
                }
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
                value={newProduct.description}
              ></textarea>
            </div>
            <p className="form-products__error-message">{}</p>
          </div>
        </div>

        <Button
          color="danger"
          type={isUpdating ? 'button' : 'submit'}
          className="form-products__btn-submitter"
          onClick={isUpdating ? handleUpdateDoctor : null}
        >
          {isUpdating ? 'UPDATE' : 'CREATE'}
        </Button>
        <Button color="info" className="form-products__btn-clear" onClick={handleClearForm}>
          CLEAR
        </Button>
      </form>
    </>
  );
};

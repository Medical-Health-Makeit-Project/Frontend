import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Loading } from '@components/loading';
import { Button } from '@components/buttons';
import { Spinner } from '@chakra-ui/react';
import { postProducts, updateProducts } from './services';
import { useIsLoading } from '@hooks';
import { useProductsContext } from '../../context/products.context';
import { POST_PRODUCTS, TOKEN, UPDATE_PRODUCTS } from '@constants';
import { PublicRoutes } from '@routes';
import { errorMessage, successMessage } from '@utils/toastify';
import emptyImage from '@assets/empty-avatar.png';
import './form.products.administration.scss';

export const Form = () => {
  const [newProduct, setNewProduct] = useState({
    id: '',
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
  const [processingData, setProcessingData] = useState(false);
  const { categories, ProductToBeUpdated, setProductToBeUpdated } = useProductsContext();
  const navigate = useNavigate();

  useEffect(() => {
    setNewProduct({
      id: ProductToBeUpdated.id,
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

  const handleUpdateProduct = async () => {
    try {
      const isToken = localStorage.getItem(TOKEN);
      if (!isToken) return navigate(PublicRoutes.LOGIN);
      const { image } = newProduct;
      if (typeof image === 'string') {
        const { image, category, newCategory, ...toUpdate } = newProduct;
        const form = new FormData();
        for (const key in toUpdate) {
          form.append(key, toUpdate[key]);
        }
        setProcessingData(true);
        const { status } = await updateProducts(UPDATE_PRODUCTS, form, isToken);
        if (status < 300) {
          setProcessingData(false);
          successMessage('Product updated succesfully!');
        }
        return handleClearForm();
      }
      const { category, newCategory, ...toUpdate } = newProduct;
      const form = new FormData();
      for (const key in toUpdate) {
        form.append(key, toUpdate[key]);
      }
      await updateProducts(UPDATE_PRODUCTS, form, isToken);
      successMessage('Product updated successfully!');
      return handleClearForm();
    } catch (error) {
      setProcessingData(false);
      errorMessage(error.response.data || error.message);
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const { category, newCategory } = newProduct;
      if (category === 'Other' && newCategory === '')
        return errorMessage('You must provide a new category name');
      if (category !== 'Other') {
        const { newCategory, id, ...rest } = newProduct;
        if (Object.values(rest).some((e) => e === ''))
          return errorMessage('You must complete the fields');
        const form = new FormData();
        for (const key in rest) {
          form.append(key, rest[key]);
        }
        const isToken = localStorage.getItem(TOKEN);
        if (!isToken) return navigate(PublicRoutes.LOGIN);
        setProcessingData(true);
        const { status } = await postProducts(POST_PRODUCTS, form, isToken);
        if (status < 300) {
          successMessage('Product updated successfully aja!');
          setProcessingData(false);
        }
        return handleClearForm();
      }
      const { id, ...remainingProps } = newProduct;
      if (Object.values(remainingProps).some((e) => e === ''))
        return errorMessage('You must complete the fields');
      const form = new FormData();
      for (const key in remainingProps) {
        form.append(key, remainingProps[key]);
      }
      const isToken = localStorage.getItem(TOKEN);
      if (!isToken) return navigate(PublicRoutes.LOGIN);
      await postProducts(POST_PRODUCTS, form, isToken);
      successMessage('Product updated successfully!');
      return handleClearForm();
    } catch (error) {
      errorMessage(error.response.data);
      setProcessingData(false);
      return handleClearForm();
    }
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
      discount: '',
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
      discount: '',
      category: '',
      newCategory: '',
    });
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <h1 className="products-form__h1">Products</h1>
      <form className="form-products" autoComplete="off">
        <div className="form-products__input-container">
          <label htmlFor="product" className="form-products__label">
            1. Product name:
          </label>
          <div>
            <input
              type="text"
              name="product"
              id="product"
              className="form-products__input-text"
              onChange={handleChangeForm}
              value={newProduct.product}
            />
            <p className="form-products__error-message"></p>
          </div>
        </div>
        <div className="form-products__input-container">
          <label htmlFor="label" className="form-products__label">
            2. Label name:
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
            3. Price <span className="dose-example">(USD)</span>:
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
            4. Stock:
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
            5. Dose <span className="dose-example">(example: 12mg/ml)</span>:
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
            6. Discount (%):
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
            7. Category:
          </label>
          <div className="form-products-selects-container">
            <select
              name="category"
              id="category"
              className="form-products__input-select"
              onChange={handleChangeForm}
              value={newProduct.category}
              disabled={isUpdating}
            >
              <option value="" disabled defaultValue>
                --Choose a category--
              </option>
              <option>Other</option>
              {categories?.map(({ id, category }) => {
                return (
                  <option key={id} value={category}>
                    {category}
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
          <label className="form-products__label">8. Upload Image: </label>
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
            9. Description:
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
          onClick={isUpdating ? handleUpdateProduct : handleSubmitForm}
          disabled={processingData}
        >
          {processingData ? <Spinner /> : isUpdating ? 'UPDATE' : 'CREATE'}
        </Button>
        <Button color="info" className="form-products__btn-clear" onClick={handleClearForm}>
          CLEAR
        </Button>
      </form>
    </>
  );
};

import { useProductsContext } from '../../context/products.context';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/buttons';
import { Loading } from '@components/loading';
import { Error } from '@components/error';
import { deleteProduct } from './services';
import { useProducts } from '@services/products';
import { errorMessage } from '@utils/toastify/error.toastify';
import { PublicRoutes } from '@routes';
import { TOKEN, DELETE_PRODUCT } from '@constants';
import { successMessage } from '@utils/toastify';
import { confirmDeletion } from '@utils/swal';
import './productList.products.administration.scss';

export const ProductsList = () => {
  const { products, productsError, productsIsLoading } = useProducts();
  const { setProductToBeUpdated } = useProductsContext();
  const navigate = useNavigate();

  const handleSetFormToUpdate = (product) => {
    setProductToBeUpdated({
      id: product.id,
      product: product.product,
      label: product.label,
      description: product.description,
      price: product.price,
      stock: product.stock,
      image: product.image,
      dose: product.dose,
      discount: product.discount,
      category: product.category,
    });
  };

  const handleDelete = async (e, productId) => {
    try {
      e.preventDefault();
      const ACCESS_TOKEN = localStorage.getItem(TOKEN);
      const payload = { id: productId };
      if (!ACCESS_TOKEN) return navigate(PublicRoutes.LOGIN);
      const isConfirmed = await confirmDeletion();
      if (isConfirmed) {
        await deleteProduct(DELETE_PRODUCT, payload, ACCESS_TOKEN);
        return successMessage('Product deleted successfully!');
      }
      return;
    } catch (error) {
      return errorMessage(error.message);
    }
  };

  if (productsError) return <Error />;
  if (productsIsLoading) return <Loading />;
  return (
    <section className="product-list">
      {products?.map((product) => {
        return (
          <article key={product.id} className="product-list__item">
            <div className="product-list__image-container">
              <img src={product.image} alt="Image" className="image" />
            </div>
            <section className="product-list-info">
              <h3 className="product-list-info__product">{`${product.product}`}</h3>
              <p className="product-list-area">{product.label}</p>
            </section>
            <section className="product-list__buttons-action-container">
              <Button variant="outline" color="danger" onClick={(e) => handleDelete(e, product.id)}>
                Delete
              </Button>
              <Button color="info" onClick={() => handleSetFormToUpdate(product)}>
                Update
              </Button>
            </section>
          </article>
        );
      })}
    </section>
  );
};

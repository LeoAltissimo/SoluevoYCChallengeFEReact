import Product from "@core/entities/product";
import { IStore } from "@core/redux/store";
import { useDispatch, useSelector } from "react-redux";

const ProductsMainViewModel = function() {
  const dispatch = useDispatch();
  const [productsList] = useSelector((store: IStore) => store.products);
  
  const handleFavoriteAction = (product: Product) => {
    if (product.favorite) {
      dispatch(removeFavorite(product, productsList));
    } else {
      dispatch(addFavorite(product, productsList));
    }
  }

  return {
    handleFavoriteAction,
  };
};

export default ProductsMainViewModel;

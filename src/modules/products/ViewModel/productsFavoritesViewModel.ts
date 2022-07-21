import { useDispatch, useSelector } from "react-redux";

import Product from "@core/entities/product";
import { addFavorite, removeFavorite } from "@core/redux/actions/productsActions";
import { IStore } from "@core/redux/store";

const ProductsMainViewModel = function() {
  const dispatch = useDispatch();
  const { productsList } = useSelector((store: IStore) => store.products);

  const handleFavoriteAction = (product: Product) => {   
    if (product.favorite) {
      dispatch(removeFavorite(product, productsList));
    } else {
      dispatch(addFavorite(product, productsList));
    }
  }

  const filterFavorites = () => {
    const favoriteList: Array<Product> = [];

    productsList.forEach((product) => {
      if (product.favorite) favoriteList.push(product);
    });

    return favoriteList;
  }

  return {
    handleFavoriteAction,
    productsList: filterFavorites(),
  };
};

export default ProductsMainViewModel;

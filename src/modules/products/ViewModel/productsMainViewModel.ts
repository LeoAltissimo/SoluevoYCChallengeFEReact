import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "@core/entities/product";
import { addFavorite, removeFavorite, updateProductList } from "@core/redux/actions/productsActions";
import { IStore } from "@core/redux/store";

const ProductsMainViewModel = function( initialList: Array<Product>) {
  const dispatch = useDispatch();
  const { productsList } = useSelector((store: IStore) => store.products);

    useEffect(() => {
      if (productsList.length === 0) {
        dispatch(updateProductList(initialList));
      }
    }, []);

  const handleFavoriteAction = (product: Product) => {   
    if (product.favorite) {
      dispatch(removeFavorite(product, productsList));
    } else {
      dispatch(addFavorite(product, productsList));
    }
  }

  return {
    handleFavoriteAction,
    productsList,
  };
};

export default ProductsMainViewModel;

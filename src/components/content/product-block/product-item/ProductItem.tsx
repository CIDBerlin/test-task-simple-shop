import styles from './product-item.module.scss';
import cn from 'classnames';
import {ProductItemProps} from '../../../../types/productTypes';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentProduct} from '../../../../store/products/reducer';
import {ProductItemButton} from './button/ProductItemButton';
import {selectCurrentProduct} from '../../../../store/products/selectors';
import {addPurchase} from '../../../../store/cart/reducer';
import {selectPurchaseItem} from '../../../../store/cart/selectors';
import {NavLink} from 'react-router-dom';

export const ProductItem = (props: ProductItemProps): JSX.Element => {
    const {id, price, name, image} = props;
    const dispatch = useDispatch();
    const currentProduct = useSelector(selectCurrentProduct);
    const purchaseItem = useSelector(selectPurchaseItem);

    return (
        <div
            className={cn(styles.item, {
                [styles.active]: currentProduct && currentProduct.id === id,
            })}
            onClick={() => dispatch(setCurrentProduct({id}))}
        >
            <div className={styles.item__cost}>{price} ₽</div>
            <div className={styles.item__icon}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.item__name}>{name}</div>
            {purchaseItem && purchaseItem.id === id ? (
                <NavLink to="/card" className={styles.item__button}>
                    Оформить заказ
                </NavLink>
            ) : (
                <ProductItemButton
                    id={id}
                    title="Добавить в корзину"
                    action={() => dispatch(addPurchase(props))}
                />
            )}
        </div>
    );
};

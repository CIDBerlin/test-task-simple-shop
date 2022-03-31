import styles from './cart-item.module.scss';
import {ProductItemProps} from '../../../../types/productTypes';
import removeIcon from './img/remove.svg';
import {useDispatch} from 'react-redux';
import {removePurchase} from '../../../../store/cart/reducer';

export const CartItem = ({id, name, price}: ProductItemProps): JSX.Element => {
    const dispatch = useDispatch();

    return (
        <div className={styles.item}>
            <div>{name}</div>
            <div>{price} ₽</div>
            <div
                className={styles.item__remove}
                onClick={() => dispatch(removePurchase({id}))}
            >
                <img src={removeIcon} alt="remove" />
            </div>
        </div>
    );
};

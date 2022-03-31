import styles from './cart-block.module.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {CartItem} from './cart-item/CartItem';
import {Footer} from '../footer/Footer';

export const CartBlock = (): JSX.Element => {
    const cartData = useSelector((state: RootState) => state.cart.items);

    return (
        <div className={styles.block}>
            <div className={styles.block__title}>
                <div>Наименование</div>
                <div>Стоимость</div>
            </div>
            <div className={styles.block__selector}>
                {cartData.map((item, index) => (
                    <CartItem key={index} {...item} />
                ))}
                {cartData.length <= 0 && (
                    <div className={styles.block__note}>Корзина пуста</div>
                )}
            </div>
            {cartData.length > 0 && <Footer />}
        </div>
    );
};

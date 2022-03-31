import styles from './footer.module.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {selectCartItemsCost} from '../../../store/cart/selectors';

export const Footer = (): JSX.Element => {
    const cardDataLength = useSelector(
        (state: RootState) => state.cart.items.length,
    );

    const cardValue = useSelector(selectCartItemsCost);

    return (
        <div className={styles.footer}>
            <div>Подтверждение покупки</div>
            {cardDataLength > 0 && (
                <div className={styles.footer__item}>Итого: {cardValue} ₽</div>
            )}
        </div>
    );
};

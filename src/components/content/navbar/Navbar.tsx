import styles from './navbar.module.scss';
import cn from 'classnames';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {NavLink} from 'react-router-dom';

export const Navbar = (): JSX.Element => {
    const cartDataLength = useSelector(
        (state: RootState) => state.cart.items.length,
    );

    return (
        <div className={styles.navbar}>
            <NavLink
                to="/"
                className={({isActive}) =>
                    cn(styles.navbar__item, {
                        [styles['navbar__item--active']]: isActive,
                    })
                }
            >
                Каталог
            </NavLink>
            <NavLink
                to="card"
                className={({isActive}) =>
                    cn(styles.navbar__item, {
                        [styles['navbar__item--active']]: isActive,
                    })
                }
            >
                <div>Корзина</div>
                {cartDataLength > 0 && (
                    <div className={styles.navbar__item__counter}>
                        {cartDataLength}
                    </div>
                )}
            </NavLink>
        </div>
    );
};

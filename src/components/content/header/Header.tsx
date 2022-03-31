import styles from './header.module.scss';
import avatar from './img/avatar.jpg';

export const Header = (): JSX.Element => {
    return (
        <div className={styles.header}>
            <div className={styles.header__avatar}>
                <img src={avatar} alt="" />
            </div>
            <div className={styles.header__title}>
                <div className={styles.header__title__name}>CIDBerlin</div>
                <div className={styles.header__title__desc}>
                    Добро пожаловать в магазин CIDBerlin. Выбери товар из списка
                    ниже, после чего перейди в корзину для подтверждения
                    покупки.
                </div>
            </div>
        </div>
    );
};

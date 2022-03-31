import styles from './preview.module.scss';
import {useSelector} from 'react-redux';
import {selectCurrentProduct} from '../../store/products/selectors';

export const Preview = (): JSX.Element | null => {
    const currentProduct = useSelector(selectCurrentProduct);

    return currentProduct ? (
        <div className={styles.preview}>
            <img src={currentProduct.image} alt={currentProduct.name} />
        </div>
    ) : null;
};

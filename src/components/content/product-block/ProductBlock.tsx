import styles from './product-block.module.scss';
import {ProductItem} from './product-item/ProductItem';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';

export const ProductBlock = (): JSX.Element => {
    const productData = useSelector(
        (state: RootState) => state.products.products,
    );

    return (
        <div className={styles.block}>
            {productData.map((item) => (
                <ProductItem key={item.id} {...item} />
            ))}
        </div>
    );
};

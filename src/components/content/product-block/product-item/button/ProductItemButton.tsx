import styles from './product-item-button.module.scss';
import {useSelector} from 'react-redux';
import {selectCurrentProduct} from '../../../../../store/products/selectors';
import cn from 'classnames';

interface ProductItemButtonProps {
    id: number;
    title: string;
    action?: () => void;
}

export const ProductItemButton = ({
    id,
    title,
    action,
}: ProductItemButtonProps): JSX.Element | null => {
    const currentProduct = useSelector(selectCurrentProduct);

    return currentProduct && id === currentProduct.id ? (
        <div className={cn(styles.button)} onClick={action}>
            {title}
        </div>
    ) : null;
};

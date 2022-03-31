import {Header} from './header/Header';
import {Navbar} from './navbar/Navbar';
import {ProductBlock} from './product-block/ProductBlock';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {fetchProducts} from '../../store/products/reducer';
import {Routes, Route} from 'react-router';
import {CartBlock} from './cart-block/CartBlock';

export const Content = (): JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductBlock />} />
                <Route path="/card" element={<CartBlock />} />
            </Routes>
        </div>
    );
};

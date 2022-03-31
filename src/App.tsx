import styles from './App.module.scss';
import {Content} from './components/content/Content';
import {Preview} from './components/preview/Preview';

export const App = (): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Content />
            <Preview />
        </div>
    );
};

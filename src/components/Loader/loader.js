import { Circles } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.container}>
      <Circles
        color="#00BFFF"
        height={12}
        width={12}
        ariaLabel="loading"
        className={s.loader}
      />
    </div>
  );
};

export default Loader;

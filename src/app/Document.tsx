import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import Main from '@/components/Main';
import style from '../styles/Document.module.css';

export default function Document() {
  return (
    <div className={style.Document}>
      <Navbar />
      <Carousel />
      <Main />
    </div>
  );
}

import ItemCarousel from './ItemCarousel';
import style from '../styles/Carousel.module.css';

export default function Carousel() {
  return (
    <div className={style.Carousel}>
      <ItemCarousel name="IBOV" points="110043.35" vari="-0.06%"></ItemCarousel>
      <ItemCarousel name="PETR3" points="29.43" vari="+0.82%"></ItemCarousel>
      <ItemCarousel name="VALE3" points="69.92" vari="-0.37%"></ItemCarousel>
      <ItemCarousel name="BBDC4" points="15.75" vari="+0.25%"></ItemCarousel>
      <ItemCarousel name="ABEV3" points="14.64" vari="+0.62%"></ItemCarousel>
      <ItemCarousel name="BBAS3" points="43.04" vari="+0.02%"></ItemCarousel>
      <ItemCarousel name="AMER3" points="1.11" vari="+0.91%"></ItemCarousel>
      <ItemCarousel name="SUZB3" points="45.89" vari="+1.32%"></ItemCarousel>
      <ItemCarousel name="ITAUB4" points="26.67" vari="+0.04%"></ItemCarousel>
      <ItemCarousel name="RRRP3" points="32.46" vari="+0.06%"></ItemCarousel>
      <ItemCarousel name="MGLU3" points="3.57" vari="+0.28%"></ItemCarousel>
    </div>
  );
}

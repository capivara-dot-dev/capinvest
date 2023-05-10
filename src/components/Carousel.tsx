import ItemCarousel from './ItemCarousel';
import style from '../styles/Carousel.module.css';

export default function Carousel() {
  return (
    <div className={style.Carousel}>
      <ItemCarousel name="IBOVESPA" points="2.345" vari="-3.89%"></ItemCarousel>
      <ItemCarousel name="IBOVESPA" points="2.345" vari="+3.89%"></ItemCarousel>
      <ItemCarousel name="IBOVESPA" points="2.345" vari="-3.89%"></ItemCarousel>
      <ItemCarousel name="IBOVESPA" points="2.345" vari="+3.89%"></ItemCarousel>
      <ItemCarousel name="IBOVESPA" points="2.345" vari="-3.89%"></ItemCarousel>
      <ItemCarousel name="IBOVESPA" points="2.345" vari="+3.89%"></ItemCarousel>
      <ItemCarousel name="IBOVESPA" points="2.345" vari="-3.89%"></ItemCarousel>
      <ItemCarousel name="IBOVESPA" points="2.345" vari="+3.89%"></ItemCarousel>
      <ItemCarousel name="IBOVESPA" points="2.345" vari="-3.89%"></ItemCarousel>
      <ItemCarousel name="IBOVESPA" points="2.345" vari="+3.89%"></ItemCarousel>
    </div>
  );
}

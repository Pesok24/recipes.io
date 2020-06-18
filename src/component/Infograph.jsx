import React from 'react';

function Infograph() {
  return (
    <div className='timeline'>
      <div className='timeline-item'>
        <div className='timeline-item__img'>
          <img src='https://uznavaika.info/cdn/2019/12/image-15.png' />
        </div>
        <span className='timeline-item__text'>
          Выбираете пособия по необходимым навыкам для развития вашего ребенка
        </span>
      </div>
      <div className='timeline-item'>
        <div className='timeline-item__img'>
          <img src='https://uznavaika.info/cdn/2019/12/image-36.png' />
        </div>
        <span className='timeline-item__text'>
          Добавляете их в корзину и формируете заказ
        </span>
      </div>
      <div className='timeline-item'>
        <div className='timeline-item__img'>
          <img src='https://uznavaika.info/cdn/2019/12/IMG_0694-1.png' />
        </div>
        <span className='timeline-item__text'>
          Получаете индивидуальный набор развивашек в именном альбоме Узнавайка
        </span>
      </div>
      <div className='timeline-item'>
        <div className='timeline-item__img'>
          <img src='https://uznavaika.info/cdn/2019/12/2-10.png' />
        </div>
        <span className='timeline-item__text'>
          В будущем, при необходимости, докупайте только страницы
        </span>
      </div>
      <span className='timeline-pagination'>
        <span className='timeline-pagination__num'>01</span>
        <span className='timeline-pagination__num'>02</span>
        <span className='timeline-pagination__num'>03</span>
        <span className='timeline-pagination__num'>04</span>
      </span>
    </div>
  );
}

export default Infograph;

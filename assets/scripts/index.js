// class for product
class Products {
  constructor(selector, data, state) {
    // selector
    this.selector = selector;
    // element
    this.$el = $(selector);
    this.$block = $(selector).find('.products__block');
    this.$table = $(selector).find('.products__table');
    this.$description = false;
    // data
    this.data = data;
    // state
    this.state = state;

    // methods

    this.render();
    this.setup();
  }
  render() {
    let list = this.data.map((prod, index) => {
      return `
      <div class="product" id='${index}prod'>
          <div class="product__number">${prod.number}</div>
          <div div class="product__img">
            <img src=${prod.image}/>
          </div>
          <div class="product__title" data-type='input'>${prod.title}</div>
          ${
            this.$description
              ? `<div class="product__description">${prod.description}</div>`
              : `<div class="product__description">${prod.description.substr(0, 49)}...</div>`
          }
          <div class="product__action">
            ${
              prod.price != ''
                ? `<div class="product__action__price">${prod.price} руб.</div><button>В корзину</button>`
                : `<button class="default">Запросить цену</button>`
            }
          </div>

    </div>`;
    });
    this.state == 'block' ? this.$block.html(list) : this.$table.html(list);
  }
  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener('click', this.clickHandler);
  }
  openDescript() {}
  clickHandler(event) {
    // const { type } = event.target.dataset;
    // if (type === 'input') {
    //   document.onclick = (e) => {};ё
    // }
  }

  //delete listener
  destroy() {
    this.$el.removeEventListener('click', this.clickHandler);
  }
}
// элементы массива
const data = [
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
  {
    number: 'F10023-7D',
    title: 'Болгарка Skil 900s LA',
    image:
      'https://cdnmedia.220-volt.ru/content/products/498/498581/images/original/n1200x800_q80/1.jpeg',
    description:
      'Диаметр круга: 125 мм, Макс. обороты: 7000 об/мин, Напряжение аккумулятора: 18 В, Li-Ion, Упакован',
    price: '327 000',
  },
];
// экземпляр
const Bulgarian = new Products('.products', data, 'block');

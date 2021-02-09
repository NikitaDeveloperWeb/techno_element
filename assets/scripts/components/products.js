// class for product
import * as $ from 'jquery';
class Products {
  constructor(selector, data) {
    // selector
    this.selector = selector;
    // element
    this.$el = $(selector);
  }
  render() {}
  #setup() {}
}

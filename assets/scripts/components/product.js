// class for product
class Product {
  constructor(selector, options) {
    // selector
    this.selector = selector;
    // element
    this.$el = $(`#${selector}`);
  }
  render() {}
  #setup() {}
}

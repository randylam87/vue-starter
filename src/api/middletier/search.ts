export default {
  async getProductLines() {
    // return 'hello'
    const response = await fetch('/searchAdvanced/4857');
    const json = await response.json();
    return json.payload;
  },
};

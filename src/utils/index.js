export default {
  formatArray(data) {
    return data.map((item, index) => {
      return index < data.length - 1 ? ` ${item}` : ` and ${item}`;
    });
  },
};

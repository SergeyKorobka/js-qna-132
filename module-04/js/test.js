const obj = {
  values: [1, 2, 3, 4, 5],

  getValues() {
    return this.values;
  },

  setValue(number) {
    this.values.push(number);
  },
};

console.log(obj.getValues());

obj.setValue(1000);

console.log(obj.getValues());

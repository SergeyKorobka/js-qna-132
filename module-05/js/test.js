const arr = ['js', 'html', 'css', 'html', 'js', 'js'];

let total = 0;

for (const item of arr) {
  total += item;
}

console.log(total);

const total2 = arr.reduce((acc, item) => {
  if (acc[item]) {
    acc[item] += 1;
  } else {
    acc[item] = 1;
  }

  return acc;
}, {});

console.log(total2);

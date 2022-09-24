let temp = [];
let n = prompt("Скільки днів ви хочете?");
for (let i = 0; i < n; i++) {
  temp[i] = Math.floor(Math.random() * (20 - -20 + 1)) + -20;
}
console.log(temp);
let hotdays = 0;
let colddays = 0;
let sum = 0;
for (let i = 0; i < temp.length; i++) {
  sum += temp[i];
  if (temp[i] > 0) {
    alert(temp[i] + "+");
    hotdays++;
  } else if (temp[i] < 0) {
    alert(-temp[i] + "-");
    colddays++;
  }
}
alert(`У цьому місяці ${hotdays} теплих днів та ${colddays} холодних днів`);
alert(`Середня температура дорівнює ${sum / temp.length}`);

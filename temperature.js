let temp = [12, 5, -3, -9, 2, 15, 0];
let hotdays = 0;
let colddays = 0;
for (let i = 0; i < temp.length; i++) {
  if (temp[i] > 0) {
    alert(temp[i] + "+");
    hotdays++;
  } else if (temp[i] < 0) {
    alert(-temp[i] + "-");
    colddays++;
  }
}
alert(`У цьому місяці ${hotdays} теплих днів та ${colddays} холодних днів`);

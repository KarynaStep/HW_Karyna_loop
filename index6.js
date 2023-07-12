// Написати цикл, який просить людину ввести число від 1 до 50 кратне 7.
// Запитувати до тих пір, доки людина не введе правильно.

while (true) {
  const valueMultiplicity = 7;
  const valueСorrect = "This number is a multiple of 7";
  const valueIncorrect = "Try again";

  const valueUser = prompt("enter a multiple of 7", 7);

  if (valueUser % valueMultiplicity === 0 && valueUser > 0 && valueUser < 50) {
    alert(valueСorrect);
    break;
  }
  alert(valueIncorrect);
}

// * обмежити кількість спроб до 5

for (let i = 0; i < 5; i++) {
  const valueMultiplicity = 7;
  const valueСorrect = "This number is a multiple of 7";
  const valueIncorrect = "Try again. ";
  const numberAttempts = "Remaining tries " + (5 - (1 + i));

  const valueUser = prompt("enter a multiple of 7", 7);

  if (valueUser % valueMultiplicity === 0 && valueUser > 0 && valueUser < 50) {
    alert(valueСorrect);
    break;
  }
  alert(valueIncorrect + numberAttempts);
}

// *** зробити це за допомогою функції, щоб цикл був всередині функції
const checkMultiplicity = function () {
  while (true) {
    const valueMultiplicity = 7;
    const valueСorrect = "This number is a multiple of 7";
    const valueIncorrect = "Try again";

    const valueUser = prompt("enter a multiple of 7", 7);

    if (
      valueUser % valueMultiplicity === 0 &&
      valueUser > 0 &&
      valueUser < 50
    ) {
      return alert(valueСorrect);
    }
    alert(valueIncorrect);
  }
};

checkMultiplicity();

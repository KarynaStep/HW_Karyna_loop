// Написати цикл, який просить людину ввести число від 1 до 50 кратне 7.
// Запитувати до тих пір, доки людина не введе правильно.
// const valueMultiplicity = 7;
// const valueСorrect = "This number is a multiple of 7";
// const valueIncorrect = "Try again";
  
while (true) {
  const valueUser = prompt("enter a multiple of 7", 7);

  if (valueUser % valueMultiplicity === 0 && valueUser > 0 && valueUser < 50) {
    alert(valueСorrect);
    break;
  }
  alert(valueIncorrect);
}

// * обмежити кількість спроб до 5
const valueMultiplicity = 7;
const valueСorrect = "This number is a multiple of 7";
const valueIncorrect = "Try again. ";  

for (let i = 0; i < 5; i++) {
  
  const numberAttempts = "Remaining tries " + (5 - (1 + i));

  const valueUser = prompt("enter a multiple of 7", 7);

  if (valueUser % valueMultiplicity === 0 && valueUser > 0 && valueUser < 50) {
    alert(valueСorrect);
    break;
  }
  alert(valueIncorrect + numberAttempts);
}

// *** зробити це за допомогою функції, щоб цикл був всередині функції
const checkMultiplicity = function (
  valueMultiplicity,
  valueСorrect,
  valueIncorrect
) {
  while (true) {
    const valueUser = prompt("enter a multiple of 7", 7);

    if (
      valueUser % valueMultiplicity === 0 &&
      valueUser > 0 &&
      valueUser < 50
    ) {
      alert(valueСorrect);
      return;
    }
    alert(valueIncorrect);
  }
};

checkMultiplicity(7, "This number is a multiple of 7", "Try again");

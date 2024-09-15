 document.addEventListener("DOMContentLoaded", function () {
  let lastClickedElement = null;

  function addClickListener(element) {
    element.addEventListener("click", function (event) {
      event.stopPropagation();

      if (lastClickedElement) {
        lastClickedElement.style.borderColor = "";
      }

      element.style.borderColor = "hsl(278, 94%, 30%)";

      lastClickedElement = element;
    });
  }

  const nameInfo = document.getElementById("name-info");
  const cardInfo = document.getElementById("card-info");
  const dateInfo1 = document.getElementById("date-info1");
  const dateInfo2 = document.getElementById("date-info2");
  const cvInfo = document.getElementById("cv-info");

  addClickListener(nameInfo);
  addClickListener(cardInfo);
  addClickListener(dateInfo1);
  addClickListener(dateInfo2);
  addClickListener(cvInfo);

  document.addEventListener("click", function (event) {
    const inputs = document.querySelectorAll("input");
    for (const input of inputs) {
      const errorMessage = input.parentNode.querySelector("p");
      if (errorMessage) {
        errorMessage.parentNode.removeChild(errorMessage);
      }
    }

    if (lastClickedElement) {
      lastClickedElement.style.borderColor = "";
      lastClickedElement = null;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.getElementById("num");
  const cardNumber = document.querySelector(".card-number");

  numberInput.addEventListener("input", function () {
    let numericValue = numberInput.value.replace(/\D/g, "");

    numericValue = numericValue.substring(0, 16);

    const formattedValue = numericValue.replace(/(.{4})/g, "$1 ");

    cardNumber.textContent = formattedValue;

    numberInput.value = formattedValue.trim();
  });
  const nameInput = document.getElementById("esm");
  const cardName = document.getElementById("card-holder");

  nameInput.addEventListener("input", function () {
    let formattedValue = nameInput.value.replace(/[0-9]/g, "");
    cardName.textContent = formattedValue;
    nameInput.value = formattedValue;
  });

  const monthInput = document.getElementById("month");
  const cardMonth = document.getElementById("card-month");

  monthInput.addEventListener("input", function () {
    let numericValue1 = monthInput.value.replace(/[^0-9/]/g, "");
    numericValue1 = numericValue1.replace(/(.{2})/, "$1/");
    numericValue1 = numericValue1.substring(0, 3);
    cardMonth.textContent = numericValue1;
    monthInput.value = numericValue1;
  });

  const yearInput = document.getElementById("year");
  const cardyear = document.getElementById("card-year");

  yearInput.addEventListener("input", function () {
    let numericValue1 = yearInput.value.replace(/[^0-9/]/g, "");
    numericValue1 = numericValue1.substring(0, 2);
    cardyear.textContent = numericValue1;
    yearInput.value = numericValue1;
  });

  const cvcInput = document.getElementById("cvc");
  const cardcvc = document.getElementById("card-cvc");

  cvcInput.addEventListener("input", function () {
    let numericValue1 = cvcInput.value.replace(/[^0-9/]/g, "");
    numericValue1 = numericValue1.substring(0, 3);
    cardcvc.textContent = numericValue1;
    cvcInput.value = numericValue1;
  });
});

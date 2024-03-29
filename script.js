const allSeat = document.getElementsByClassName("ticket");
let count = 40;
let selectedSeat = 0;
let totalPrice = 0;
let isSeatSelected = false;
let isNumberProvided = false;
let selectedSeats = new Set();
for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    if (selectedSeat < 4 && !selectedSeats.has(seat.id)) {
      selectedSeats.add(seat.id);
      count = count - 1;
      selectedSeat = selectedSeat + 1;
      totalPrice = totalPrice + 550;
      //add seat name
      const seatName = seat.innerText;
      const seatSelect = document.getElementById("seat-select");
      const p = document.createElement("p");
      p.innerText = seatName;
      seatSelect.appendChild(p);
      //add class name
      const className = document.getElementById("class-name");
      const name = document.createElement("p");
      name.innerText = "Economoy";
      className.appendChild(name);
      //add price
      const price = document.getElementById("price");
      const fare = document.createElement("p");
      fare.innerText = "550";
      price.appendChild(fare);

      // Update state variables
      isSeatSelected = true;

      // Enable next button if both seat is selected and number is provided
      if (isSeatSelected && isNumberProvided) {
        document.getElementById("next-button").removeAttribute("disabled");
      }

      setInnerText("available-seat", count);
      setInnerText("selected-seat", selectedSeat);
      setInnerText("total-price", totalPrice);
      setInnerText("grand-total", totalPrice);
      setBackgroundColor(seat.id);
    }
  });
}

const input = document.getElementById("input-number");
input.addEventListener("input", function (event) {
  let val = parseInt(input.value);
  if (!isNaN(val)) {
    isNumberProvided = true;
  } else {
    isNumberProvided = false;
  }

  // Enable next button if both seat is selected and number is provided
  if (isSeatSelected && isNumberProvided) {
    document.getElementById("next-button").removeAttribute("disabled");
  } else {
    document.getElementById("next-button").setAttribute("disabled", "true");
  }
});

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function setBackgroundColor(elementId) {
 
  const element = document.getElementById(elementId);
  element.style.backgroundColor = "#1DD100";
}



      
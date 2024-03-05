const allSeat=document.getElementsByClassName("ticket");
let count = 40;
let selectedSeat = 0;
let totalPrice = 0;
for(const seat of allSeat){
    seat.addEventListener("click", function(event){
        
       count = count-1;
       selectedSeat = selectedSeat+1;
       totalPrice = totalPrice + 550;
       //add seat name
       const seatName = seat.innerText;
       const seatSelect = document.getElementById('seat-select');
       const p =document.createElement('p');
       p.innerText = seatName;
       seatSelect.appendChild(p);
        //add class name
        const className = document.getElementById('class-name');
        const name = document.createElement('p');
        name.innerText = 'Economoy';
        className.appendChild(name);
        //add price
        const price = document.getElementById('price');
        const fare =document.createElement('p');
        fare.innerText = '550';
        price.appendChild(fare);
       setInnerText("available-seat",count);
       setInnerText("selected-seat",selectedSeat);
       setInnerText("total-price",totalPrice);
       setInnerText("grand-total",totalPrice);
        setBackgroundColor(seat);
      
    });
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
  }

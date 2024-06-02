let sneakers = JSON.parse(localStorage.getItem("sneakers"));

const removeSneaker = (event) => {
    const sneaker = event.currentTarget.parentElement;
    const sneakeId = sneaker.querySelector(".sneaker-id").textContent;

    const updatedSneakers = sneakers.filter(x => x.id !== sneakeId);

    localStorage.setItem("sneakers", JSON.stringify(updatedSneakers));
    sneakers = updatedSneakers;

    sneaker.remove();

    update(updatedSneakers);
    total(updatedSneakers);
}

function update (sneakers) {
    if (sneakers.length > 0) {
        const sneakerList = document.querySelector("#sneaker-list");
        sneakerList.innerHTML = "<h1>Your Sneakers</h1>";


        sneakers.forEach(sneaker => {
            const sneakerCard = document.createElement("div");
            sneakerCard.classList.add("sneaker-card");
    
            const sneakerId = document.createElement("p");
            sneakerId.classList.add("sneaker-id");
            sneakerId.textContent = sneaker.id;
            sneakerId.style.display = "none";

            const sneakerImage = document.createElement("img");
            sneakerImage.src = sneaker.img;
            sneakerImage.alt = "sneaker";
            sneakerImage.loading = "lazy";
    
            const sneakerName = document.createElement("h2");
            sneakerName.textContent = sneaker.name;
    
            const sneakerPrice = document.createElement("p");
            sneakerPrice.textContent = sneaker.price;
    
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", removeSneaker);

            sneakerCard.appendChild(sneakerId);
            sneakerCard.appendChild(sneakerName);
            sneakerCard.appendChild(sneakerImage);
            sneakerCard.appendChild(sneakerPrice);
            sneakerCard.appendChild(removeButton);

            sneakerList.appendChild(sneakerCard);
        });
    } else {
        const sneakerList = document.querySelector("#sneaker-list");
        sneakerList.innerHTML = "<h1>Your cart is empty</h1>";
    }
}

function total (sneakers) {
    const values = sneakers.map(x => x.price.replace("$", ""));
    const total = values.reduce((acum, value) => acum + parseFloat(value), 0);
    const totalElement = document.querySelector("#total-price");
    totalElement.textContent = `$${total}`;
}

update(sneakers);
total(sneakers);
const sneakeres = [
    {
        id: 1,
        name: "Adidas Retro Runner - Unisex",
        price: 299.99,
        img: "images/adidas-retro-runner.webp"
    },
    {
        id: 2,
        name: "Nike Revolution 6 - Female",
        price: 250.00,
        img: "images/nike-revolution-6-female.webp"
    },
    {
        id: 3,
        name: "Nike Court Vision Low Colorful - Unisex",
        price: 520.99,
        img: "images/nike-court-vision-low-colorful.webp"
    },
    {
        id: 4,
        name: "Nike Revolution 6 - Female",
        price: 250.00,
        img: "images/nike-revolution-6-female.webp"
    },
    {
        id: 5,
        name: "Nike Court Vision Low Colorful - Unisex",
        price: 520.99,
        img: "images/nike-court-vision-low-colorful.webp"
    },
    {
        id: 6,
        name: "Adidas Retro Runner - Unisex",
        price: 299.99,
        img: "images/adidas-retro-runner.webp"
    },
    {
        id: 7,
        name: "Nike Court Vision Low Colorful - Unisex",
        price: 520.99,
        img: "images/nike-court-vision-low-colorful.webp"
    },
    {
        id: 8,
        name: "Adidas Retro Runner - Unisex",
        price: 299.99,
        img: "images/adidas-retro-runner.webp"
    },
    {
        id: 9,
        name: "Nike Revolution 6 - Female",
        price: 250.00,
        img: "images/nike-revolution-6-female.webp"
    },
    {
        id: 10,
        name: "Adidas Retro Runner - Unisex",
        price: 299.99,
        img: "images/adidas-retro-runner.webp"
    },
    {
        id: 11,
        name: "Nike Revolution 6 - Female",
        price: 250.00,
        img: "images/nike-revolution-6-female.webp"
    },
    {
        id: 12,
        name: "Nike Court Vision Low Colorful - Unisex",
        price: 520.99,
        img: "images/nike-court-vision-low-colorful.webp"
    },
    {
        id: 13,
        name: "Nike Revolution 6 - Female",
        price: 250.00,
        img: "images/nike-revolution-6-female.webp"
    },
    {
        id: 14,
        name: "Nike Court Vision Low Colorful - Unisex",
        price: 520.99,
        img: "images/nike-court-vision-low-colorful.webp"
    },
    {
        id: 15,
        name: "Adidas Retro Runner - Unisex",
        price: 299.99,
        img: "images/adidas-retro-runner.webp"
    },
    {
        id: 16,
        name: "Nike Court Vision Low Colorful - Unisex",
        price: 520.99,
        img: "images/nike-court-vision-low-colorful.webp"
    },
    {
        id: 17,
        name: "Adidas Retro Runner - Unisex",
        price: 299.99,
        img: "images/adidas-retro-runner.webp"
    },
    {
        id: 18,
        name: "Nike Revolution 6 - Female",
        price: 250.00,
        img: "images/nike-revolution-6-female.webp"
    },
]

const buyOption = (event, button) => {
    const sneakerCard = event.currentTarget.parentElement;
    const sneakerId = sneakerCard.querySelector(".sneaker-id").textContent;
    const sneakerName = sneakerCard.querySelector(".sneaker-name").textContent;
    const sneakerPrice = sneakerCard.querySelector(".sneaker-price").textContent;
    const sneakerImg = sneakerCard.querySelector(".sneaker-img").src;

    sneakerImg.split("/").pop();

    const sneaker = {
        id: sneakerId,
        name: sneakerName,
        price: sneakerPrice,
        img: sneakerImg
    };

    let sneakers = JSON.parse(localStorage.getItem("sneakers"));

    if(sneakers && sneakers.find(x => x.id == sneakerId)) {
        alert("Sneaker already in cart!")
    }
    else {
        sneakers ? sneakers.push(sneaker) : sneakers = [sneaker];    

        localStorage.setItem("sneakers", JSON.stringify(sneakers));
        alert("Sneaker added to cart sucessfully!");
    }
};

const sneakeresContainer = document.querySelector("#sneakers-container");

sneakeres.forEach(sneaker => {
    const sneakerElement = document.createElement("div");
    sneakerElement.classList.add("sneaker-card");

    const sneakerId = document.createElement("span");
    sneakerId.classList.add("sneaker-id");
    sneakerId.textContent = sneaker.id;
    sneakerId.style.display = "none";

    const sneakerImg = document.createElement("img");
    sneakerImg.src = sneaker.img;
    sneakerImg.loading = "lazy";
    sneakerImg.width = "300";
    sneakerImg.height = "auto";
    sneakerImg.classList.add("sneaker-img");

    const sneakerName = document.createElement("h2");
    sneakerName.textContent = sneaker.name;
    sneakerName.classList.add("sneaker-name");

    const sneakerPrice = document.createElement("p");
    sneakerPrice.textContent = `$${sneaker.price.toFixed(2)}`;
    sneakerPrice.classList.add("sneaker-price");

    const buyButton = document.createElement("button");
    buyButton.textContent = "Buy";
    buyButton.addEventListener("click", buyOption);

    sneakerElement.appendChild(sneakerId);
    sneakerElement.appendChild(sneakerName);
    sneakerElement.appendChild(sneakerImg);
    sneakerElement.appendChild(sneakerPrice);
    sneakerElement.appendChild(buyButton);

    sneakeresContainer.appendChild(sneakerElement);
});
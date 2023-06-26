console.log("HOP");

const titleArray = [
                    "Salut !",
                    "Comment ça va ?",
                    "Coucou c'est nous",
                    "Encore toi !",
                    "Dégage",
                    "Hey !!!"
                    ];

const greetingTitle = (arr) => {
    const randomNumber = Math.floor(Math.random() * 6);
    let title = document.getElementById("title");
    title.textContent = arr[randomNumber];
};

greetingTitle(titleArray);
console.log(titleArray);
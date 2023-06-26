console.log("HOP");

const titleArray = [
                    "Salut !",
                    "Comment ça va ?",
                    "Coucou c'est nous",
                    "Encore toi !",
                    "Dégage",
                    "Hey !!!"
                    ];

const greetingTitle = arr => {
    const randomNumber = Math.floor(Math.random() * 6);
    console.log(`Random Number is: ${randomNumber}`);
    let title = document.getElementById("myTitle");
    console.log(`Document by id: ${title}`);
    title.innerHTML = arr[randomNumber];
};

greetingTitle(titleArray);
console.log(titleArray);
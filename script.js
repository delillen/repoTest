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
    let title = document.getElementById("myTitle");
    title.innerHTML = arr[randomNumber];
};

greetingTitle(titleArray);
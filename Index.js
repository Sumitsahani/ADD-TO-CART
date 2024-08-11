let users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];
  
  const main = document.querySelector(".main");
  
  users.map((user) => {
    const card = document.createElement("div");
    card.className = "card";
    const name = document.createElement("h1");
    name.textContent = user.name;
  
    const username = document.createElement("p");
    username.textContent = user.username;
  
    const email = document.createElement("p");
    email.textContent = user.email;
  
    const button = document.createElement("button");
    button.textContent = "Add-to-cart";
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    button.onclick = () => {
      const cart = JSON.parse(localStorage.getItem('cart'));
      cart.push(user);
      localStorage.setItem('cart', JSON.stringify(cart));
    };
  
    card.appendChild(name);
    card.appendChild(username);
    card.appendChild(email);
    card.appendChild(button);
    main.appendChild(card);
  });
  
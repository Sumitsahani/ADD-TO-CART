const cartContainer = document.querySelector('.cart-container');

const loadCart = () => {
    cartContainer.innerHTML = '';
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const id = document.createElement('div');
        id.className="id"
        id.textContent = item.id;

        const name = document.createElement('h1');
        name.textContent = item.name;

        const username = document.createElement('p');
        username.textContent =item.username;

        const email = document.createElement('p');
        email.textContent = item.email;

        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.onclick = () => {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        };

        cartItem.appendChild(id);
        cartItem.appendChild(name);
        cartItem.appendChild(username);
        cartItem.appendChild(email);
        cartItem.appendChild(button);
        cartContainer.appendChild(cartItem);
    });
};

loadCart();
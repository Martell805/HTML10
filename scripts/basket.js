function Accumulator(basket, new_item, add_button, clear_button) {
    this.basket = basket;
    this.new_item = new_item;
    this.add_button = add_button;
    this.clear_button = clear_button;

    this.add_button.onclick = function () {
        if (new_item.value === "") {
            return;
        }

        let item = document.createElement('div');
        basket.appendChild(item);
        item.textContent = new_item.value;
        new_item.value = "";
    };

    this.clear_button.onclick = function () {
        basket.innerHTML = "";
    };
}

let accumulator = new Accumulator(
    document.getElementById('basket'),
    document.getElementById('item'),
    document.getElementById('add'),
    document.getElementById('clear')
);

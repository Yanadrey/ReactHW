// Функция для расчета общей цены товаров
function calculateTotal() {
    let total = 0;
    document.querySelectorAll('.item').forEach(item => {
        const price = parseInt(item.querySelector('.price').textContent.slice(1));
        const quantity = parseInt(item.querySelector('.quantity').value);
        total += price * quantity;
    });
    document.querySelector('.total').textContent = `GRAND TOTAL $${total}`;
}

// Обработчик изменения количества товара
document.querySelectorAll('.quantity').forEach(quantityInput => {
    quantityInput.addEventListener('input', calculateTotal);
});

// Вызов функции для начального расчета общей цены
calculateTotal();

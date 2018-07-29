window.addEventListener('DOMContentLoaded', function(){
	//подучаем информацию для работы
	let products = document.querySelectorAll('.product'),
	buttons = document.getElementsByTagName("button"),
	open = document.getElementsByClassName("open")[0];
	console.log(open)});
	// функция для создания корзиъны
	function createCart(){
		// создаёмх элеиенты которые будуьжт в нашей корзине
		let cart = document.createElement("div"),
			field = document.createElement("div"),
			heading = document.createElement("h2"),
			close = document.createElement("button");

			// css оформление классами элементав
	cart.classList.add("cart");
	field.classList.add("cart-field");
	close.classList.add("close");
	// добавили текст элементам
	close.textContent ="Закрыть";
	heading.textContent="В нашей корзине:";
	// вставили элементы на страницу
	document.body.appendChild(cart);
	cart.appendChild(heading);
	cart.appendChild(field);
	cart.appendChild(close);

};
createCart();

let  field = document.querySelector(".cart-field"),
	 cart =  document.querySelector(".cart"),
	 close = document.querySelector(".close"),
	 buttons = document.getElementsByTagName("button"),
	 products = document.querySelectorAll('.product'),
	 open = document.getElementsByClassName("open")[0];;

	 for(let i =0; i<buttons.length; i++ ){
	 	// вешаем обработчик события клик на каждую кнопдуеку
	 	buttons[i].addEventListener('click', function(){
	 		// клонируется элемент со всем содержимы
	 		let item = products[i].cloneNode(true),
	 		btn = item.querySelector('button');

	 		btn.remove();
	 		field.appendChild(item);
	 		products[i].remove();
	 	})
	 }

	 function openCart(){
	 	cart.style.display = "block";
	 }
	 function closeCart(){
	 	cart.style.display = "none";
	 }

	 open.addEventListener('click', openCart);
	 close.addEventListener('click', closeCart);
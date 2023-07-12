import './CartWidget.css'

const CartWidget = () => {

    const imgCarrito = "ttps://img2.freepng.es/20190228/xos/kisspng-e-commerce-shopping-cart-software-digital-marketin-servicesecommercev1-1-36-web-designs-36-w-5c787a69b20034.1785901215513995297291.jpg"
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
        <strong> 10 </strong>
    </div>
  )
}

export default CartWidget
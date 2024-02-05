import CartContext from '../../context/CartContext'
import './index.css'

const TotalOrders = () => (
  <CartContext.Consumer>
    {value => {
      let totalAmount = 0
      const {cartList} = value
      cartList.forEach(each => {
        totalAmount += each.price * each.quantity
      })

      const totalCarts = cartList.length

      return (
        <div className="total-orders-container">
          <div className="card">
            <h1 className="text-total">
              Order Total: <span className="amount">Rs {totalAmount}/- </span>
            </h1>
            <p className="carts-count">{totalCarts} Items in cart</p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default TotalOrders

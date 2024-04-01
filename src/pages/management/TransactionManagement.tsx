import { useState } from "react"
import AdminSidebar from "../../components/admin/AdminSidebar"
import { OrderItemType, OrderType } from "../../types"
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems:OrderItemType[] = [
  {
    name:"Puma Shoes",
    photo:img,
    _id:"507f1f77bcf86cd799439011",
    quantity:5,
    price:2000,
  }
]

const TransactionManagement = () => {

  const [order,setOrder] = useState<OrderType>({
    name:"Manoj Satwase",
    address:"Nd Naagar Katkumbh",
    city:"Amravati",
    state:"MH",
    country:"India",
    pinCode:444907,
    status:"Processing",
    subtotal:4000,
    discount:1200,
    shippingCharges:0,
    tax:200,
    totalAmount:4000 + 200 + 0 -1200,
    orderItems,
    _id:"453ere454ru6u344"
  }) 

  const {name,address,city,country,state,pinCode,subtotal,shippingCharges,tax,discount,totalAmount,status,} = order; 

  interface StatusClassMap {
    [status:string] : string
  }

  const statusClasses:StatusClassMap = {
    "Delivered": "purple",
    "Shipped": "green"
  };
  
  const updateHandler = () => {
    setOrder(prev => ({...prev,status:prev.status === "Processing" ? "Shipped":"Delivered"}))
  }

  return (
    <div className="admin-container">
      <AdminSidebar/>
      <main className="product-management">
        <section style={{padding:"2rem"}}>
            <h2>Order Items</h2>
            {
              order.orderItems.map((item)=>(
                <ProductCard {...item} />
              ))
            }
        </section>
         <article className="shipping-info-card">
          <h1>Order Info</h1>
            <h5>User Info</h5>
            <p>Name : {name}</p>
            <p>Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}</p>
            <h5>Amount Info</h5>
            <p>Subtotal: {subtotal}</p>
            <p>Shipping Charges: {shippingCharges}</p>
            <p>Tax: {tax}</p>
            <p>Discount: {discount}</p>
            <p>Total: {totalAmount}</p>

            <h5>Status Info</h5>
            <p>Status : <span className={statusClasses[status] || "red" }>
                 {status}
              </span>
            </p>
           <button onClick={updateHandler}>Process Status</button>
          </article>
      </main>
    </div>
  )
}

// Name could be ProductCard or OrderItemCard
const ProductCard = ({name,photo,price,quantity,_id}:OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>name</Link>
    <span>${price} X {quantity} = ${price * quantity}</span>
  </div>
)

export default TransactionManagement
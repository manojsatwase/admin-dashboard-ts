import { ChangeEvent, FormEvent, useState } from "react"
import AdminSidebar from "../../components/admin/AdminSidebar"
const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const TransactionManagement = () => {
    const [name,setName] = useState<string>("Puma Shoes");
    const [price,setPrice] = useState<number>(2000);
    const [stock,setStock] = useState<number>(5);
    const [photo,setPhoto] = useState<string>(img);

    const [updateName,setUpdateName] = useState<string>(name);
    const [updatePrice,setUpdatePrice] = useState<number>(price);
    const [updateStock,setUpdateStock] = useState<number>(stock);
    const [updatePhoto,setUpdatePhoto] = useState<string>(photo);

    const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = e.target.files?.[0];
    
        if (file) {
            const reader: FileReader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === "string") {
                    setUpdatePhoto(reader.result);
                }
            };
            reader.onerror = (error) => {
                console.error("Error reading file:", error);
            };
            reader.readAsDataURL(file);
        }
    };

    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setName(updateName);
      setPrice(updatePrice);
      setStock(updateStock);
      setPhoto(updatePhoto);

    }
    
  return (
    <div className="admin-container">
    <AdminSidebar />
    <main className="product-management">
      <section>
        <strong>ID - 507f1f77bcf86cd799439011</strong>
        <img src={photo} alt="Product" />
        <p>{name}</p>
        {
            stock > 0 ? (
                <span className="green">{stock} Available</span>
            ) : (
                <span className="red">No Available</span>
            )
        }
        <h3>${price}</h3>
      </section>
      <article>
         <form onSubmit={submitHandler}>
            <h2>Manage</h2>
            <div>
                <label>Name</label>
                <input 
                    required
                    type="text" 
                    placeholder="Name"
                    value={updateName}
                    onChange={({target:{value}}) => setUpdateName(value)}
                 />
            </div>
            <div>
                <label>Price</label>
                <input 
                    required
                    type="number" 
                    placeholder="Price"
                    value={updatePrice}
                    onChange={({target:{value}}) => setUpdatePrice(Number(value))}
                 />
            </div>
            <div>
                <label>Stock</label>
                <input 
                    required
                    type="number" 
                    placeholder="Stock"
                    value={updateStock}
                    onChange={({target:{value}}) => setUpdateStock(Number(value))}
                 />
            </div>
            <div>
              <label>Photo</label>
              <input type="file" accept="image/*" onChange={changeImageHandler} />
            </div>
            {
                updatePhoto && <img src={updatePhoto} alt="New Photo" />
            }
            <button type="submit">Update</button>
         </form>
      </article>
    </main>
    </div>
  )
}

export default TransactionManagement;
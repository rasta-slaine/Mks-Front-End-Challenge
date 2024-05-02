import "./index.css"
import ImgCart from "/cart.svg"
import Card from "../Card/Card"
import Cart from "../Cart/Cart"
import { UseProductData } from "../hooks/UseProductData"
import { useState } from "react"
import LoadingSpinner from '../Loading/LoadingSpinner'


type CartItem = {
    id: number; 
    name: string;
    price: number;
    quantity: number;
    photo: string;

}


type Product = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    quantity: number;
}




function Home(){
    const {data,isLoading} = UseProductData()
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [quantity, setQuantity] = useState(1); 
    const [cart,SetCart] = useState<CartItem[]>([])

    const openCart = () => {
        setIsCartOpen(true);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };


    const handleQuantityChange = (productId: number, newQuantity: number) => {

        const updatedCart = cart.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        SetCart(updatedCart);
    };
    
    const handleAddToCart = (product: CartItem) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            
            SetCart(cart.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
        } else {
            
            SetCart([...cart, { ...product, quantity: 1 }]);
        }
    };


    const handleQuantityIncrement = (productId: number) => {
        SetCart(cart.map(item => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)));
    };

    const handleQuantityDecrement = (productId: number) => {
        SetCart(
            cart.map(item =>
                item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };


    const handleDelete = (productId:number) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        SetCart(updatedCart);
    };



    return(
        <div>
            
            <div className="MenuBox">
                <div className="MenuLogo">
                    <span>MKS</span>Sistemas
                </div>
                <button onClick={openCart} className="MenuCartBox">
                    <div className="MenuCart">
                    <img src={ImgCart}/>
                    <p>{cart.length}</p>
                    </div>
                </button>
            </div>
            <div className="ProductBox">
            
                {
                    data ?(
                        data.products.map((product:Product)=>(
                        <Card
                                key={product.id}
                                img={product.photo}
                                title={product.name}
                                price={product.price}
                                description={product.description}
                                handleAddToCart={()=>handleAddToCart(product,product.id)}
                                
                                />
                    ))
                    ):(
                        <span  className="Loading">{isLoading && <LoadingSpinner />}</span>
                    )
                }
              
            </div>

            {cart.length > 0  && isCartOpen && (
             
                <Cart
                    img={cart[0]?.photo}
                    title={cart[0]?.name}
                    price={cart[0]?.price}
                    quantity={cart[0]?.quantity}
                    productId={cart[0]?.id}
                    handleQuantityChange={handleQuantityChange}
                    deleteItem={handleDelete}
                    onClose={closeCart}
                    cart={cart}
                    handleQuantityDecrement={handleQuantityDecrement}
                    handleQuantityIncrement={handleQuantityIncrement}
                />
            )} 
            
          
        </div>
    )
}

export default Home


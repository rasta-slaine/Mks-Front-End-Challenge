import React from "react";
import "./index.css";
import CardCart from '../CardCart/CardCart';

type CartItem = {
    id: number; 
    name: string;
    price: number;
    quantity: number;
    photo: string;

}

type CartProps = {
    img: string;
    title: string;
    price: number;
    quantity: number;
    productId: number;
    handleQuantityChange: (productId: number,quantity: number) => void; 
    handleQuantityIncrement: (productId: number) => void;
    handleQuantityDecrement: (productId: number) => void;
    deleteItem: (productId: number) => void;
    onClose: () => void;
    cart: CartItem[];
};

function Cart({ img, title, price, quantity, productId, deleteItem, handleQuantityChange,handleQuantityIncrement,handleQuantityDecrement, onClose, cart }: CartProps): JSX.Element {
   
   
    const totalPrice = cart.reduce((acc, currentItem) => {
        return acc + currentItem.price * currentItem.quantity;
    }, 0);


    return (
        <div className="modal">
            <div className="modal-content">
                <div className="ModalHeader">
                    <h2>Carrinho <br />de compras</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                {cart.map((product:CartItem) => (
                    <CardCart
                        key={product.id}
                        img={product.photo}
                        title={product.name}
                        price={product.price}
                        quantity={product.quantity}
                        productId={product.id}
                        deleteItem={deleteItem}
                        handleQuantityChange={handleQuantityChange}
                        handleQuantityDecrement={handleQuantityDecrement}
                        handleQuantityIncrement={handleQuantityIncrement}

                    />
                ))}
            </div>
            <div className="modalEnd" >
                <div className="CartTotal">
                        <p>Total :</p>
                        <p>${totalPrice}</p>
                </div>
                <p className="CartEnd">
                    Finalizar Compra
                </p>

            </div>
        </div>
    );
}

export default Cart;

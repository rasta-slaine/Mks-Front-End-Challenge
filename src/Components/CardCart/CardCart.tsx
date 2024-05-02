
import './index.css'

type CardCartProps = {
    img:string,
    title:string,
    price:number,
    quantity:number,
    productId: number,
    deleteItem: (productId: number)=> void,
    handleQuantityChange: (productId: number,quantity: number) => void; // Updated prop type
    handleQuantityIncrement: (productId: number) => void;
    handleQuantityDecrement: (productId: number) => void;

}


function CardCart({
    img,
    title,
    price,
    quantity,
    productId,
    deleteItem,
    handleQuantityChange,
    handleQuantityIncrement,
    handleQuantityDecrement
}: CardCartProps) {

    return(
        <div className='CardCartBox'>
            <div className='CardCartContent'>
                <img src={img} alt="" />
                <h2>{title}</h2>
                <div className="Quantity">
                    <p>Qtde :</p>
                    <div className="QuantityControls">
                        <button onClick={() => handleQuantityDecrement(productId)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityIncrement(productId)}>+</button>
                    </div>
                </div>

                <p>{`$${price}`}</p>
            </div>
            <span className="close" onClick={()=>deleteItem(productId)}>&times;</span>
        </div>
    )
}

export default CardCart
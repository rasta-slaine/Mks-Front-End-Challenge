import "./index.css"

import Buy from "/buy.svg"

type CartProps = {
    img : string,
    title: string,
    price:number,
    description : string,
    handleAddToCart: ()=> void
}


function Cart({img,title,price,description,handleAddToCart}:CartProps){
    return(
        <div className="CardBox">
             <div className="Card">
                <img className="ImgProduct" src={img}/>
                <div className="CardHeaderBox">
                    <div className="CardHeader">
                         <div className="CardTitle">
                         {title}
                         </div>
                         <div className="CardPrice">
                         <p>{`$${price}`}</p>
                         </div>
                    </div>
                    <p>{description}a</p>
                </div>
                <button className="btn" cla onClick={handleAddToCart}> <img src={Buy}/>  COMPRAR</button>
             </div>
        </div>
    )
}

export default Cart
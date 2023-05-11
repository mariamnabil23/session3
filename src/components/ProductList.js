import prductdata from "../Productdata";

function ProductList(){
    const products = prductdata.map( (x)=>{
        return(
            <div className="card" key={x.id}>
                <img src={x.image} alt="" width="50px"></img>
                <h3>{x.title}</h3>
            </div>
        )
    })

    return(
        <div className="product-list">{products}</div>
    );
};

export default ProductList;
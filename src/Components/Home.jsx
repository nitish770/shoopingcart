import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, fetchAllProducts } from '../Redux/reducers/ProductSlice';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    const { products, loading } = useSelector((state) => state.products);
    return (
        <div className='container'>
            <div className="col-md-12">
                <div className="row">
                    <h1 className='text-center'> All Products</h1>
                    {loading && <h2 className='text-center'>Loading...</h2>}
                    {products.map((itme) => {
                        return (

                            <div className="card mx-auto my-4" style={{ width: "18rem" }}  >
                                <img className='card-img-top img-responsive'
                                    src={`${itme.image}`}
                                    alt="no-cart" />
                                <div className="card-body">
                                    <p className='card-text'>{itme.title}</p>
                                    <p className='card-text'>{itme.price}</p>
                                    <button onClick={() => dispatch(AddToCart(itme.id))} className='btn btn-info'>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
export default Home;
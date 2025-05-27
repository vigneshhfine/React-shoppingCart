import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = ({ cart, setCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([])

    useEffect(() => {
        const filterProduct = items.filter((product) => product.id == id);
        //  console.log(filterproduct)
        setProduct(filterProduct[0]);

        const relatedProduct = items.filter((vigu) => vigu.category === product.category)

        console.log("relatedproducts=", relatedProduct)
        setRelatedProduct(relatedProduct)
    }, [id, product.category]);

    const addToCart = (id, price, title, discription, imgSrc) => {
        const obj = {
            id, price, title, discription, imgSrc
        }
        setCart([...cart, obj])
        console.log("cart element =", cart)
        toast.success('Added On Cart', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
    }



    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="container con">
                <div className="img">
                    <img src={product.imgSrc} alt="" />
                </div>
                <div className='text-center'>
                    <h1 className="card-title">{product.title}</h1>
                    <p className="card-text">{product.description}</p>
                    <button className='btn btn-primary mx-3'>{product.price}{" "}₹</button>
                    <button
                        onClick={() => addToCart(product.id, product.price, product.title, product.discription, product.imgSrc)}
                        className='btn btn-warning'
                    >Add to Cart</button>
                </div>
            </div>
            <h1 className='text-center'>related Products</h1>
            <Product art={cart} setCart={setCart} items={relatedProduct} />
        </>
    )
}

export default ProductDetail

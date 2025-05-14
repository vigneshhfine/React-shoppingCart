import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'




const Navbar = ({ setData , cart}) => {
  // console.log(useLocation)
  const location = useLocation()
  const Navigate = useNavigate();
  const [searchTrem, setSearchTrem] = useState("")

  const filterBYCategory = (category) => {
    const element = items.filter((product) => product.category === category)
    //  console.log(element)
    setData(element)
  }
  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price)
    setData(element)
  }
  const handleSubmit = (e)=> {
    e.preventDefault();
Navigate(`/search/${searchTrem}`)
setSearchTrem("")

  }
  return (
    <>
      <header className='sticky-top'>
        <div className="nav-bar">
          <Link to={"/"} className="brand">e-cart</Link>


          <form 
          // onClick={handleSubmit
          onSubmit={handleSubmit}
          className="search-bar">
            <input
            value={searchTrem}
            onChange={(e)=>setSearchTrem(e.target.value)}
              type="text"
              placeholder='searchproducts'
            />
          </form>
          <Link to={"/cart"} className="cart"><button type="button" className="btn btn-primary position-relative">
  cart
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button></Link>

        </div>

        {
          location.pathname == '/' && (
             <div className="nav-bar-wapper">
          <div className="items">filter By {"->"}</div>
          <div
            onClick={() => setData(items)}
            className="items">no filter</div>
          <div
            onClick={() => filterBYCategory('mobiles')}
            className="items">mobiles</div>
          <div
            onClick={() => filterBYCategory('laptops')}
            className="items">laptops</div>
          <div
            onClick={() => filterBYCategory('tablets')}
            className="items">tablets</div>
          <div
            onClick={() => filterByPrice(29999)}
            className="items">{"+>"}29999</div>
          <div
            onClick={() => filterByPrice(49999)}
            className="items">{"+>"}49999</div>
          <div
            onClick={() => filterByPrice(69999)}
            className="items">{"+>"}69999</div>
          <div
            onClick={() => filterByPrice(99999)}
            className="items">{"+>"}99999</div>

        </div>
          )
        }
       
      </header>
    </>
  )
}

export default Navbar

import React from 'react'
import './Header.css'
import img from './Flipkart-logo.png'
import { useNavigate } from 'react-router'


function Header() {

  const navigate = useNavigate();


    return (
        <>

            <section className='bg-header'>
                <header>
                    <div className="container">
                        <div className="row-1 align-items-center">
                            <div className="logo">
                                <img src={img} alt="" onClick={() => navigate('/')}/>
                            </div>
 
                            <div class="input-group w-50">
                                <input type="text" class="form-control" placeholder="Search for products, brands and more" />
                                <button class="btn bg-white" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </div>

                            <div className="login-btn ms-5">
                                <button type="button" >Login</button>
                            </div>

                            <div className="bcm-sellor ms-4">
                                <span onClick={() => navigate('/view')}>All Product</span>
                            </div>
                            

                            <div className="more ms-4">
                                <span>More<i class="fa-solid fa-angle-down ms-2"></i></span>
                            </div>

                            <div className="add-cart">
                                <h6 onClick={() => navigate('/view')}>Admin</h6>
                            </div>

                        </div>
                    </div>
                </header>
            </section>

        </>
    )
}

export default Header
import React from "react"

const Nav = ()=>{
    return (
        <div className='nav'>
            <div className='main-nav flex flex-row py-5'>
                <picture className='site-logo w-52'>
                    <source srcSet='./src/assets/img/logos/decampo_alt.svg' media='(min-width: 600px)'/>
                    <img className='site-logo w-52' src='./src/assets/img/logos/decampo_alt.svg'/>
                </picture>
                <div className='header-content'>
                    <div className='site-search'>
                        <input placeholder='¿Qué estás buscando? leche Mu-Mu, pociones, MT,...'/>
                    </div>
                    <div className='shop-location'>

                    </div>
                    <div className='cart-box'>

                    </div>
                </div>
            </div>
            <div className='subnav py-5 '>
                <div>Pociones</div>
            </div>
        </div>
        )
}
export default Nav
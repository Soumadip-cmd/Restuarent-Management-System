import React from 'react'
import './Fooditem.css'
import MenuitemPart from './MenuitemPart'
import MenuFooter from './MenuFooter'
import PrevNext from './PrevNext'
import EditMenu from './EditMenu/EditMenu'
import FoodItemNavbar from './FoodItemNavbar'
import ConfirmMenu from './ConfirmMenu/ConfirmMenu'
import SearchItem from './SearchItem'


const Fooditem = () => {

  return (
    <div className='menuBody pb-5' >
    <FoodItemNavbar/>
      <div className="card container p-5 pt-3 menu">

        <div className=" col-md-12 col-lg-12 ">
          <div className="float-end"><EditMenu /></div>
          <div className="container d-flex justify-content-evenly ">
            <img src='logo-Rc.png' alt='logo' width={150} />

            <div className=' d-flex align-items-center' style={{ position: 'relative' }}>
              <img src='decoration-c.png' className='' height={80} alt='design' style={{ position: 'absolute', top: '-13px', left: '-7%' }} />
              <span className='header-style' >MENU</span>
              <img src='decoration-c.png' className='' height={80} alt='design' style={{ position: 'absolute', bottom: '-0', left: '-7%' }} />
            </div>

            <img src='logo-Lc.png' alt='logo' width={150} />

          </div>
          {/* <hr /> */}
          <SearchItem/>
          {/* adding maximum 4 image in a single page */}
          <div className="container">
            <MenuitemPart itemname='Cocktail' imgLink='img-logo.avif'/>
          </div>
          <div className="container">
            <MenuitemPart itemname='Chicken' imgLink='img-logo.avif'/>
          </div>
          <div className="container">
            <MenuitemPart itemname='BreakFast' imgLink='img-logo.avif'/>
          </div>
          <div className="container">
            <MenuitemPart itemname='Lunch' imgLink='img-logo.avif'/>
          </div>
          
          {/* end of menu page 1{use prev next button for next page} */}
          <div className="container text-center">
            <MenuFooter />
          </div>
          <hr />
          <div className="float-end">
            <PrevNext />
          </div>

        </div>
      </div>
      <div className="container text-center text-capitalize pt-4">
        <ConfirmMenu/>
      </div>
    </div>
  )
}

export default Fooditem

//

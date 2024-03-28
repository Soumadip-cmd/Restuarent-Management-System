import React from 'react'
import './Menuitempart.css'

const MenuitemPart = (props) => {
    const { itemname,imgLink } = props
    return (
        <>
            <hr/>
            <div className=" text-center text-uppercase fs-1" >
                <span className='img-underline'>{itemname}
                    <img src='decoration-2.png' className='' alt='underline' height={50} style={{ margin: '-19px' }} /></span>
            </div>
            {/* food item name with image */}
            <div className="container my-5">
                <div className="row featurette mx-3 d-flex justify-content-center align-items-center ">
                    <div className="col-md-5 order-md-1">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded float-end" src={imgLink} alt="" />
                    </div>
                    <div className="col-md-7 order-md-2 my-3">
                        <table className="table table-striped2 table-hover">
                            <thead style={{color:'#06033e'}}>
                                <tr>

                                    <th scope="col" className='fs-5' style={{    width: '50%'}}>Item Name</th>
                                    <th scope="col" className='fs-5'>Price</th>
                                    <th scope="col" className='fs-5 text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ fontFamily: '"Macondo", cursive' ,fontWeight:'800'}} className='fs-5'>Briyani-Fried Rice (Combo)</td>
                                    <td className='fs-6'>$120</td>
                                    <td className='text-center '>
                                        <span className="d-grid gap-2 d-lg-block">
                                            <button className="btn btn-success mx-2 py-1 px-3" style={{ borderRadius: '20px' }} type="button">Add</button>
                                            <button className="btn btn-danger mx-2 py-1 px-3" style={{ borderRadius: '20px' }} type="button">Delete</button>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ fontFamily: '"Macondo", cursive' ,fontWeight:'800'}} className='fs-5'>Briyani-Fried Rice (Combo)</td>
                                    <td className='fs-6'>$120</td>
                                    <td className='text-center'>
                                        <span className="d-grid gap-2 d-lg-block">
                                            <button className="btn btn-success mx-2 py-1 px-3" style={{ borderRadius: '20px' }} type="button">Add</button>
                                            <button className="btn btn-danger mx-2 py-1 px-3" style={{ borderRadius: '20px' }} type="button">Delete</button>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ fontFamily: '"Macondo", cursive' ,fontWeight:'800'}} className='fs-5'>Briyani-Fried Rice (Combo)</td>
                                    <td className='fs-6'>$120</td>
                                    <td className='text-center'>
                                        <span className="d-grid gap-2 d-lg-block">
                                            <button className="btn btn-success mx-2 py-1 px-3" style={{ borderRadius: '20px' }} type="button">Add</button>
                                            <button className="btn btn-danger mx-2 py-1 px-3" style={{ borderRadius: '20px' }} type="button">Delete</button>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ fontFamily: '"Macondo", cursive' ,fontWeight:'800'}} className='fs-5'>Briyani-Fried Rice (Combo) Lorem ipsum dolor </td>
                                    <td className='fs-6'>$120</td>
                                    <td className='text-center'>
                                        <span className="d-grid gap-2 d-lg-block">
                                            <button className="btn btn-success mx-2 py-1 px-3" style={{ borderRadius: '20px' }} type="button">Add</button>
                                            <button className="btn btn-danger mx-2 py-1 px-3" style={{ borderRadius: '20px' }} type="button">Delete</button>
                                        </span>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MenuitemPart

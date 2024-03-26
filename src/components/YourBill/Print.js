import React from 'react'

const Print = () => {
    
    return (
        <>
            <div className="container text-center my-4 print-only">
                <button type="button" class="btn btn-success px-5 py-2" style={{fontSize:'19px'}} onClick={()=>{
                    window.print()
                }}>Print Bill</button>
            </div>
        </>
    )
}

export default Print

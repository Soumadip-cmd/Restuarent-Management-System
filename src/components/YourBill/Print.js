import React from 'react'

const Print = () => {
    
    return (
        <>
            
                <button type="button" className="btn btn-success px-5 py-2 print-only" style={{fontSize:'19px'}} onClick={()=>{
                    window.print()
                }}>Print Bill</button>
            
        </>
    )
}

export default Print

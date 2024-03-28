import React from 'react'

const PrevNext = () => {
    return (
        <>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-dark">
                &#11164;
              </button>
              <button type="button" className="btn btn-outline-dark active">
                1
              </button>
              <button type="button" className="btn btn-outline-dark">
                &#11166;
              </button>
            </div>
        </>
    )
}

export default PrevNext

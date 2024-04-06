import React from 'react'
import AddMenuitem from './Add/AddMenuitem'
import DeleteMenuitem from './Delete/DeleteMenuitem'

const MenuitemButton = (props) => {
    const {addTitle}=props
    return (
        <div>
            <span className="d-grid gap-2 d-lg-block">
            {/* fetch title with food item name */}
                <AddMenuitem modalTitle1="Add Title"/>
                <DeleteMenuitem modalTitle2="Delete Title"/>
            </span>
        </div>
    )
}

export default MenuitemButton

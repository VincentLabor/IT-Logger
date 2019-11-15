import React from 'react'
import PropTypes from 'prop-types'

const TechItems = ({tech}) => {
    return (
        <li className='collection-item'>
            <div className="">
            {tech.firstName} {tech.lastName}
            <a href="#!" className='secondary-content'> {/* Secondary content makes the object move towards the end of the block */}
                <i className='material-icons grey-text'>delete</i>
            </a>
            </div>
            
        </li >
    )
}

TechItems.propTypes = {
tech: PropTypes.object.isRequired
}

export default TechItems

import React from 'react'

const Button = ({ isBeam = false, name, containerClass }) => {
    return (
        <>
            <button className={` btn ${containerClass}`}>
                {isBeam && (
                    <span className='flex relative h-3 w-3'>
                        <span className='btn-ping'></span>
                        <span className='btn-ping_dot'></span>
                    </span>)}
                {name}
            </button >
        </>
    )
}

export default Button;

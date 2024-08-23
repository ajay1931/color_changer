import React from 'react'

const ColorBox = (props) => {
    const { color } = props

    const styleBox = {
        width: '200px',
        height: '200px',
        borderRadius: '5px',
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
        fontSize: '18px',
        fontWeight: 'bold',
    }

    return (
        <div style={styleBox} >
            {color}
        </div>
    )
}

export default ColorBox

import React, { useEffect, useState } from 'react'

const Item = ({ continent, name }) => {
    const [code, setCode] = useState(null)


    const translateToHtmlCode = (str) => {
        const code = str.split(' ').map(i => `&#x${i.slice(2)};`).join('')
        console.log(code)
        setCode(code)
    }

    useEffect(() => {
        translateToHtmlCode('U+1F1E6 U+1F1E9')
    }, [])

    return (
        <div style={{ padding: '8px 12px', borderRadius: '1px solid black', boxShadow: '0px 0px 2px 1px black' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ margin: '0 10px 0 0' }}>{name}</h3>
                <p>{code}</p>
            </div>
            <div>
                <p>ISO code:</p>
                <p>Continent: {continent}</p>
            </div>
        </div>
    )
}

export default Item

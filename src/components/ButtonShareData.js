import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const data = {
    name: 'Alberto',
    age: 23,
}

export default function ButtonShareData() {
    const { setData } = useContext(DataContext);
    return (
        <div>
            <button onClick={() => setData(data)}>Data</button>
        </div>
    )
}

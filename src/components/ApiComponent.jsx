import React, {useState, useEffect} from 'react'

function ApiComponent() {
    const url ='https://randomuser.me/api/'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        console.log(response.status)
        const responseJSON = response.json()
        setTodos(responseJSON)
        console.log(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <div>
            Holasas
        </div>
    )
}

export default ApiComponent
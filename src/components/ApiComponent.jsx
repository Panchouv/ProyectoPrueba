import React, {useState, useEffect} from 'react'; 

function ApiComponent() {
    const url ='https://api.example.com/items'
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
            <h1>asdasdas</h1>
            <ul>
            { !todos ? 'Cargando' :
            todos.map( (todo,index)=>{
                return <li key={index}>{todo.title}</li>
            } )
            }
            </ul>
            <h3>dfsdfsdfsdf</h3> 
        </div>
    )
}

export default ApiComponent
import React,{ useEffect , useState} from 'react'

function Api(props) {

    const [state , setstate] = useState()
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.number}/`)
        .then(res => res.json())
        .then((data) => {setstate(data)
           setLoading(true)} )
    },[props.number])
    return (
        <div>
            <h1>{loading ? state.name : <h1>loading..</h1>}</h1>
            {loading ? <img src={state.sprites.back_default} />:''}
        </div>
    )
}

export default Api

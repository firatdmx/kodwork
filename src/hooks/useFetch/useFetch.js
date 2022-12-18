import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = (URL) => {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [datax,setDatax] = useState([])

    const fetchData = async () => {
        try {
            const {data: responseData} = await axios.get(URL)
            setDatax(responseData.results)
            //console.log(responseData.results)
            setLoading(false)
            
        } catch (error) {
            setLoading(false)
            setError(true)
            console.error(error)
        }
    
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {loading, error, datax}
    
}

export default useFetch;
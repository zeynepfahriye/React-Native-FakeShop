
import axios from 'axios';
import { useState } from 'react';

function UsePost() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const post = async (url, apiData) => { // Gelen Post isteğini ve url + datayı alır
        try {
            setLoading(true);
            axios.post(url, apiData).then(response => {// Axios ile belirtilen url'e post isteği ile datayı gönderir
                setData(response.data); // Eğer geriye veri dönerse datayı set eder
            }).catch(e => e && setData({ status: 'Error' })); // Eğer data gelmez ve hata gelirse status'ü Error'e eşitler

            setLoading(false)
        }
        catch (err) {
            setError(err);
            setLoading(false)
        }
    };
    return { data, loading, error, post }
}
export default UsePost; 
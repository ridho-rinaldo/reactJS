import Relasi from './Relasi'

async function getDataRelasi(url, axios) {
    let response = null
    await axios.get(url)
        .then(data => {
            response = data
        })
    
    Relasi.data = response.data
}

export default getDataRelasi

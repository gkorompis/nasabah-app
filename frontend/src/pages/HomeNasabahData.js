import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ChunksTable from '../components/ChunksTable';
import ChunksForm from '../components/ChunksForm';
//dummies
// import nasabah from '../inputs/nasabah';



console.log('1', 'component rendered');
const HomeNasabahData = () => {

    const [nasabah, setNasabah] = useState([{test:"test"}]);

    useEffect(()=>{
        console.log("use effect nasabah");
        const fetchNasabah = async () =>{
            
            const { data } = await axios.get('/api/psql-nasabah');

            setNasabah(data);
        };
        fetchNasabah();
    }, []);
    return (
        <div id="nasabah-data" className="pages">
            <h1>Nasabah Data</h1>
            <div id="app-form" className="component_div">
                <p>New Nasabah</p>
                <ChunksForm data={['account_id', 'nasabah_name']} endpoint={['nasabah']}/>
            </div>
            <div id="app-table" className="chunk-container component_div">
                <p>Nasabah List</p>
                <ChunksTable data={nasabah}/>
            </div>
        </div>
    )
}

export default HomeNasabahData;
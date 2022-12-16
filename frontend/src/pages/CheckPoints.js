import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ChunksTable from '../components/ChunksTable';
import ChunksForm from '../components/ChunksForm';

//dummies
// import check_points from '../inputs/check_points';


console.log('3', 'component rendered');
const CheckPoints = () => {
    const [check_points, setCheck_points] = useState([{test: "test"}]);

    useEffect(()=>{
        console.log('use effect print report')
        const fetchCheck_points = async () =>{
            
            const { data } = await axios.get('/api/psql-check_points');

            setCheck_points(data);
        };
        fetchCheck_points();
    }, []);
    return (
        <div id="check-points" className="pages">
            <h1>Check Points</h1>
            <div id="app-form">
                <ChunksForm data={[]} endpoint={['check-points']}/>
            </div>
            <div id="app-table" className="chunk-container">
                <p>Points List</p>
                <ChunksTable data={check_points}/>
            </div>
        </div>
    )
}

export default CheckPoints;
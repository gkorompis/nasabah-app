import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ChunksTable from '../components/ChunksTable';
import ChunksForm from '../components/ChunksForm';
// import print_report from './inputs/print_report';


//dummies
const PrintReport = () => {
    const [print_report, setPrint_report] = useState([{test: "test"}]);

  
    useEffect(()=>{
        console.log('use effect print report')
        const fetchPrint_report = async () =>{
            
            const { data } = await axios.get('/api/psql-print_report');

            setPrint_report(data);
        };
        fetchPrint_report();
    }, []);

    return (
        <div id="print-report" className="pages">
            <h1>Print Report</h1>
            <div id="app-form">
                <p>Enter to Print Report</p>
                <ChunksForm data={['account_id', 'start_date', 'end_date']} endpoint={['print-reports']}/>
            </div>
            <div id="app-table" className="chunk-container">
                <p>Report</p>
                <ChunksTable data={print_report}/>
            </div>
        </div>
    )
}

export default PrintReport;
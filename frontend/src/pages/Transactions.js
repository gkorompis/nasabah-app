import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ChunksTable from '../components/ChunksTable';
import ChunksForm from '../components/ChunksForm';
//dummies
// import transactions from '../inputs/transactions';

const Transactions = () => {

    const [transactions, setTransactions] = useState(["test"]);

    useEffect(()=>{
        console.log('use effect transaction')
        const fetchTransactions = async () =>{
            
            const { data } = await axios.get('/api/psql-transactions');

            setTransactions(data);
        };
        fetchTransactions();
    }, []);

    return (
        <div id="transactions" className="pages">
            <h1>Transactions</h1>
            <div id="app-form">
                <p>Enter to See Transactions</p>
                <ChunksForm data={['account_id', 'transaction_date', 'description', 'debit_credit_status', 'amount']} endpoint={['transactions']}/>
            </div>
            <div id="app-table" className="chunk-container">
                <p>Transactions List</p>
                <ChunksTable data={transactions}/>
            </div>
        </div>
    )
}

export default Transactions;
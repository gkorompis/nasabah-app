import React, {Fragment, useEffect, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

const ChunksForm = ({data, endpoint}) =>{

    const new_data_obj ={}
    for(let fieldName of data){
        new_data_obj[fieldName]=""
    }
    const [post,setPost] = useState(new_data_obj);
    // const [fieldName,setFieldName] = useState("nasabah");
    const submitForm = (endpoint) => {
        console.log('posting... to', endpoint)
        axios.post(`/${endpoint}`, post);
        console.log(post);
    };
  
    return(
        <Fragment>
            <Form>
                {
                    // useEffect(()=>{

                    // }, []);
                    data.map((fieldName, index)=>{
                           const handleChange=(event)=>{
                            let tempField = {};
                            tempField[fieldName] = event.target.value;
                            setPost({...post, ...tempField});
                        };
                        
                        return (
                            <Form.Group key={index} className="mb-3" controlId="formBasicEmail">
                                <Form.Label>{fieldName}</Form.Label>
                                <Form.Control type={fieldName} placeholder={`enter ${fieldName}`}
                                onChange={handleChange}
                                />
                            </Form.Group>   
                        )
                    })
                }
            <Button variant="primary" type="button" onClick={()=>{
                submitForm(endpoint);
            }} disabled={endpoint=="check-points"?1:0}>
                Submit
            </Button>
            </Form>
        </Fragment>
    )
}

export default ChunksForm;
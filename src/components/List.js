import { useState , useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

export default function List(){

    const[list,setList]=useState([]);
    const API="https://6728190f270bd0b97554559c.mockapi.io/my_data/TeamMembers";
    const getData=()=>{
        axios.get(API)
        .then((response)=>{
            setList(response.data);
        })
        .catch((error)=>{
            alert(error);
        })
    }
    useEffect(()=>{
        getData();
    },[]);

    return (
        <>
            <div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th><i>NAME</i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((each)=>
                        <tr>
                            <th>{each.id}</th>
                            <th><Link to='/detail' state={each.id}>{each.name}</Link></th>
                        </tr>
                        )}
                    </tbody>
                </Table>
                
            </div>
        </>
    );
}

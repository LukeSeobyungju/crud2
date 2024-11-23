import { useState , useEffect} from "react";
import axios from "axios";
import { Link , useLocation} from "react-router-dom";
import Table from 'react-bootstrap/Table';


export default function Detail(){
    const id= useLocation();
    const[list,setList]=useState({});
    const API="https://6728190f270bd0b97554559c.mockapi.io/my_data/TeamMembers/"+id.state;
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
            <button><Link to='/list'>LIST</Link></button>
            <button><Link to='/update' state={list.id}>UPDATE</Link></button>
            <div>
                <Table striped>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Major</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{list.id}</th>
                            <th>{list.name}</th>
                            <th>{list.age}</th>
                            <th>{list.major}</th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}
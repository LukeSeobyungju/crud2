import { useState , useEffect } from "react";
import axios from "axios";
import { Link , useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table';

export default function Update(){
    const id=useLocation();
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



    function change(user){
        axios.put(API,user)
        .then((response)=>{
            console.log(JSON.stringify(response.data));
        })
        .catch((error)=>{
            alert(error);
        })
    }


    function changeN(e){
        console.log(e.target.value);
        setList((prev) => ({ ...prev, name: e.target.value }));
        change({ ...list, name: e.target.value });

    }
    function changeA(e){
        console.log(e.target.value);
        setList((prev) => ({ ...prev, age: e.target.value }));
        change({ ...list, age: e.target.value });

    }
    function changeM(e){
        console.log(e.target.value);
        setList((prev) => ({ ...prev, major: e.target.value }));
        change({ ...list, major: e.target.value });


    }
    
    useEffect(()=>{
        getData();
    },[]);


    return (
        <>
            <button><Link to='/list'>LIST</Link></button>
            <button><Link to='/detail' state={list.id}>DETAIL</Link></button>
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
                            <th><input type="text" value={list.name} onChange={changeN}/></th>
                            <th><input type="text" value={list.age} onChange={changeA}/></th>
                            <th><input type="text" value={list.major} onChange={changeM}/></th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}
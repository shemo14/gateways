import { useEffect } from 'react'
import { Button, Container, Col, Row, Table } from 'react-bootstrap';
import { FaPlusSquare, FaEdit, FaTrashAlt } from "react-icons/fa";
import {Link} from "react-router-dom";
import axiosClient from "../../core/axios-client.js";



export default function Gateways(){

    useEffect(() => {
        axiosClient.get('/gateways').then(response => console.log('this is response ....', response))
    }, [])

    return(
        <Container style={{ padding: 20 }}>
            <div>
                <h3 style={{ display: "inline", marginRight: 15 }}>All Gateways</h3>
                <Link to='/add-gateway'>
                    <FaPlusSquare color={'green'} size={30} />
                </Link>
            </div>
            <div style={{ marginTop: 20 }}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Human name</th>
                        <th>IPv4 address</th>
                        <th>Peripheral devices</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Link to="" style={{ marginRight: 10 }}>
                                <FaEdit />
                            </Link>
                            <Link to="">
                                <FaTrashAlt color={'red'} />
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Link to="" style={{ marginRight: 10 }}>
                                <FaEdit />
                            </Link>
                            <Link to="">
                                <FaTrashAlt color={'red'} />
                            </Link>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

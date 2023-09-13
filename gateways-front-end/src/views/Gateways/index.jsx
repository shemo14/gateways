import {useEffect, useState} from 'react'
import { Button, Container, Modal, Table, Badge } from 'react-bootstrap';
import { FaPlusSquare, FaEdit, FaTrashAlt } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteGateway, getGateways} from "../../redux/features/Gateways/GatewaysActions";

export default function Gateways(){
    const gateways = useSelector(state => state.gateways.allGateways)
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [selectedGateway, setSelectedGateway] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getGateways())
    }, [])

    const onDeleteGateway = (gateway) => {
        setSelectedGateway(gateway)
        setShowModal(true)
    }

    const confirmDeleteGateway = () => {
        dispatch(deleteGateway(selectedGateway?.id)).then(() => {
            setShowModal(false)
            setSelectedGateway(null)
            dispatch(getGateways())
        })
    }

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
                        <th>Devices counter</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        gateways.map((gateway, i) => (
                            <tr key={i}>
                                <td>{gateway.id}</td>
                                <td>{gateway.name}</td>
                                <td>{gateway.IPv4}</td>
                                <td>
                                    <Button size={'sm'} onClick={() => navigate('/add-gateway')} variant="primary">
                                        <Badge onClick={() => navigate('/add-gateway')} bg="secondary">{(gateway.devices).length}</Badge>
                                        &nbsp; Devices
                                    </Button>
                                </td>
                                <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Link to={`/update-gateway/${gateway.id}`} style={{ marginRight: 10 }}>
                                        <FaEdit />
                                    </Link>
                                    <Link to="#" onClick={() => onDeleteGateway(gateway)}>
                                        <FaTrashAlt color={'red'} />
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting {selectedGateway?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure, Do you want to delete {selectedGateway?.name} gateway ?!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => confirmDeleteGateway()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}

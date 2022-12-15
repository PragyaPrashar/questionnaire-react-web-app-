import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useSelector} from "react-redux";

const LoginErrorModal = ({initialValue}) => {
    const [show, setShow] = useState(initialValue);
    const currentLoggedInUser = useSelector(s=>s.users.currentUser);
    const handleClose = () => setShow(false);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Invalid Credentials!</Modal.Title>
                </Modal.Header>

                <Modal.Body>Please sign in</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose()}>
                        Close
                    </Button>
                    {/*<Button variant="primary" onClick={handleClose}>*/}
                    {/*    Save Changes*/}
                    {/*</Button>*/}
                </Modal.Footer>

            </Modal>
        </>
    );
}

// render(<Example />);

export default LoginErrorModal;
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaFacebook, FaTwitch, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const LoginOption = () => {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item className='mb-3'><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-3'><FaTwitch /> Twitch</ListGroup.Item>
                <ListGroup.Item className='mb-3'><FaTwitter /> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default LoginOption;
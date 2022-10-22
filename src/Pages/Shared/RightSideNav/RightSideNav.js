import React, { useContext } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle ,FaFacebook,FaWhatsapp,FaTwitter,FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from "../brandCarousel/BrandCarousel"
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {

  const {providerLogin} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () =>{

    providerLogin(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error));
  }
  return (
    <>
      <ButtonGroup vertical>
      <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle/>Login with Google</Button>
      <Button variant='outline-dark'>Login with Github</Button>

    </ButtonGroup>
    <div className='mt-4'>
      <h5 className='mb-3'>Find Us On </h5>
    <ListGroup>
      <ListGroup.Item className='mb-4'><FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-4'><FaWhatsapp/> Whatsapp</ListGroup.Item>
      <ListGroup.Item className='mb-4'><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-4'><FaTwitch/> Twitch</ListGroup.Item>
      
    </ListGroup>
      
    </div>
    <div>
      <BrandCarousel/>
    </div>
    </>
  );
}


export default RightSideNav
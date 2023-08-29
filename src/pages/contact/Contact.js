import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import ikon from '../../assets/HK-ikon.png'


const Contact = () => {
  return (
       <div>
         
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                       <h1 style={{ color: "#28B219" }}> İletişim Bilgileri</h1>
                    </div>

                    
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text fw-bold mb-4' style={{color: '#28B219'}}>
                                    <MDBIcon icon={ikon} className="me-3" />
                                      Dr. Halil Kunt (Ph.D.)
                                </h6>
                                <p style={{color: '#28B219'}}>
                                    Yaşam Boyu Sağlık
                                </p>
                            </MDBCol>

                            

                           

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4' style={{color: '#28B219'}}>Contact</h6>
                                <p style={{color: '#28B219'}}>
                                    <MDBIcon icon="home" className="me-2" />
                                    Kütahya, Türkiye
                                </p>
                                <p style={{color: '#28B219'}}>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    halilkunt@gmail.com
                                </p>
                                <p style={{color: '#28B219'}}>
                                    <MDBIcon icon="phone" className="me-3" /> + 90 541 140 4309
                                </p>
                                <p style={{color: '#28B219'}}>
                                    <MDBIcon icon="print" className="me-3" /> + 90 541 140 4309
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

               
            </MDBFooter>
       
         
        </div>
    )
}

export default Contact


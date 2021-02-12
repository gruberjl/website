import * as React from "react"
import Page from '../components/page'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import M365CertificationImg from '../images/microsoft365-security-administrator-associate-600x600.png'

// styles
const landingStyles = {
  alignItems: 'center',
  display: 'flex',
  minHeight: 'calc(100vh - 66px)',
  position: 'relative',
  zIndex: 1,
  backgroundColor: '#212529',
  color: 'white'
}

const alignCenterStyles = {
  display: 'flex',
  alignItems: 'center',
}

const imageCenterStyles = {
  display: 'flex',
  justifyContent: 'center',
}

const buttonStyles = {
  padding: '12px 0px'
}

const IndexPage = () => {
  return (
    <Page>
      <main>
        <div style={landingStyles}>
          <Container>
            <Row style={alignCenterStyles}>
              <Col style={imageCenterStyles}>
                <img src={M365CertificationImg} alt="Microsoft 365 MS-500 Logo"/>
              </Col>
              <Col>
                <Row>
                  <h1>Get Certified in MS-500 Microsoft 365 Security Administration</h1>
                </Row>
                <Row style={buttonStyles}>
                  <Button variant="primary" size="lg">Get Started Now</Button>
                </Row>
                <Row>
                  <Button variant="secondary" size="lg">I already have an account</Button>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </Page>
  )
}

export default IndexPage

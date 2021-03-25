import React, { Fragment } from 'react'
import Navigation from '../../shared/Navigation'
import Seo from '../../shared/Seo'
import { Container, Row, Col, Form } from 'react-bootstrap'

function Subscription() {
  return (
    <Fragment>
      <Seo page="subscription">
        <header>
          <Navigation />
        </header>
        <main id="main" className="subscribe-main">
          <section>
            <Container>
              <Row>
                <Col md={{ offset: 1, span: 5 }}>
                  <img
                    src="/asset/img/big-dstv.png"
                    alt="Dstv Subscription"
                    className="subscribe-img"
                  />
                  <article className="product-desc">
                    <span className="product-desc--heading">
                      Product Description
                    </span>
                    <p className="white manrope mt-5 text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Velit lacus sagittis velit erat odio habitasse. At euismod
                      ac sit augue quis posuere elit. Enim rutrum tristique nunc
                      gravida at. In turpis enim eu nunc quis. Dictumst lorem
                      sollicitudin volutpat neque.{' '}
                    </p>
                  </article>
                </Col>
                <Col md={{ offset: 1, span: 4 }}>
                  <div className="service-info">
                    <span className="service-info--heading">
                      CABLE SUBSCRIBTION
                    </span>
                    <span className="service-info--product">
                      Dstv Cable Subscription
                    </span>
                  </div>
                  <Form>
                    <Form.Group controlId="packages">
                      <Form.Label className="white">Packages</Form.Label>
                      <Form.Control as="select">
                        <option value="asia">ASIA</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="smart">
                      <Form.Label className="white">
                        Dstv Smart Card Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="3838 3883 8838 8862"
                      />
                    </Form.Group>
                    <Form.Group controlId="smart">
                      <Form.Label className="white">Amount</Form.Label>
                      <Form.Control type="text" placeholder="6,200" />
                    </Form.Group>
                    <button className="btn-one d-block w-100 m-t2 xs-font">
                      PROCEED
                    </button>
                    <button className="btn-two d-block w-100 m-t2 xs-font">
                      BACK TO PACKAGES
                    </button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </Seo>
    </Fragment>
  )
}

export default Subscription

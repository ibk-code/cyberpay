import React, { Fragment } from 'react'
import Seo from '../../shared/Seo'
import Navigation from '../../shared/Navigation'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function home() {
  return (
    <Fragment>
      <Seo>
        <header className="header">
          <Navigation />
          <img
            src="./asset/img/shape.png"
            alt="globe shape"
            className="globe-img"
          />
          <div className="heading">
            <h1 className="text-center white">
              Make payment - Whenever, <br /> Wherever, With CyberPay
            </h1>
            <p className="text-center white">
              Don’t get stranded,Discover Various payment option <br /> on our
              platform.
            </p>
            <button className="btn-one mx-auto mt-2 home-btn mt-2 manrope">
              <span className="btn-wrap">
                <span>Learn more</span>
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </span>
            </button>
          </div>
        </header>
        <main id="main" className="main-wrap">
          <section>
            <Container>
              <Row>
                <Col md={2} xs={6}>
                  <img
                    src="/asset/img/dstv.png"
                    alt="dstv logo"
                    className="img-fluid"
                  />
                </Col>
                <Col md={2} xs={6}>
                  <img
                    src="/asset/img/gotv.png"
                    alt="gotv logo"
                    className="img-fluid"
                  />
                </Col>
                <Col md={2} xs={6}>
                  <img
                    src="/asset/img/starttime.png"
                    alt="starttimes logo"
                    className="img-fluid"
                  />
                </Col>
                <Col md={2} xs={6}>
                  <img
                    src="/asset/img/irokotv.png"
                    alt="Iroko logo"
                    className="img-fluid"
                  />
                </Col>
                <Col md={2} xs={6}>
                  <img
                    src="/asset/img/daar.png"
                    alt="DAAR logo"
                    className="img-fluid"
                  />
                </Col>
                <Col md={2} xs={6}>
                  <img
                    src="/asset/img/actv.png"
                    alt="actv logo"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="activity-section">
            <Container>
              <Row>
                <Col md={{ offset: 2, span: 8 }}>
                  <article>
                    <h2 className="white manrope w-light">
                      Monitor your activity as a <br /> Merchant & Make decision{' '}
                    </h2>
                    <p className="manrope white pt-2">
                      Know how your busines is faring and set thing back to
                      order
                    </p>
                  </article>
                  <button className="btn-one mt-2 home-btn mt-2 manrope">
                    <span className="btn-wrap">
                      <span>Merchant Dashboard</span>
                      <span>
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </span>
                  </button>
                  <img
                    src="/asset/img/dashboard.png"
                    alt="Dashboard Overview"
                    className="img-fluid dashboard-img"
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="cyberpay-app">
            <Container className="about-app">
              <div className="app-info">
                <Row>
                  <Col md={6}>
                    <article>
                      <h2 className="blue manrope w-ebold">
                        Download Our Mobile App
                      </h2>
                      <p className="text-justify manrope mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Condimentum diam orci pretium a pharetra, feugiat
                        cursus. Dictumst risus, sem egestas odio cras{' '}
                      </p>
                    </article>
                    <Link to="#" className="manrope blue2 w-bold">
                      Get Started&nbsp;
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                    <div className="app-btn">
                      <img src="/asset/img/apple.png" alt="Apple playstore" />
                      <img src="/asset/img/apple.png" alt="Apple playstore" />
                    </div>
                  </Col>
                </Row>
                <img
                  src="/asset/img/mockup.png"
                  alt="Apple playstore"
                  className="app-mockup"
                />
              </div>
            </Container>
          </section>
        </main>
      </Seo>
    </Fragment>
  )
}

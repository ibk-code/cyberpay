import React, { Fragment } from 'react'
import Navigation from '../../shared/Navigation'
import Seo from '../../shared/Seo'

function Checkout() {
  return (
    <Fragment>
      <Seo page="checkout">
        <header>
          <Navigation />
        </header>
        <main id="main" className="checkout-main">
          <section className="checkout-wrapper">
            <div className="order-summary">
              <span className="order-summary--heading">Order Summary</span>
              <div className="order-body">
                <span className="order-body--title">SubTotal</span>
                <span className="order-body--value">NGN 6,200.00</span>
              </div>
              <div className="order-body">
                <span className="order-body--title">Package Details</span>
                <span className="order-body--value">
                  Asia (Dstv Cable Subscription)
                </span>
              </div>
              <div className="order-footer">
                <span className="order-footer--title">Total</span>
                <span className="order-footer--value">NGN 6,200.00</span>
              </div>
            </div>
            <button className="btn-one d-block w-100 m-t2 xs-font">
              PROCEED
            </button>
            <button className="btn-two d-block w-100 m-t2 xs-font">
              BACK TO PACKAGES
            </button>
            <div className="payment-methods">
              <img src="/asset/img/svgs/verve.svg" alt="Verve Payment" />
              <img src="/asset/img/svgs/mastercard.svg" alt="Verve Payment" />
              <img src="/asset/img/svgs/visa.svg" alt="Verve Payment" />
            </div>
          </section>
        </main>
      </Seo>
    </Fragment>
  )
}

export default Checkout

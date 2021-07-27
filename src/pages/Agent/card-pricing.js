import PropTypes from 'prop-types'
import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col } from "reactstrap"

const CardPricing = props => {
  return (
    <React.Fragment>
      <Col xl="4" md="8">
        <Card className="pricing-box">
          <CardBody className="p-4">
            <div className="d-flex mt-2">
              <i className={props.pricing.icon + " h2 align-self-center"}></i>
              <div className="flex-1 ms-auto text-end">
                <h4 className="mt-0">{props.pricing.title}</h4>
              </div>
            </div>
            <div className="pricing-features mt-5 pt-2">
              {props.pricing.features.map((feature, key) => (
                <p key={"_feature_" + key}>
                  <i className={feature.icon + " text-primary me-2"} />{" "}
                  {feature.title}
                </p>
              ))}
            </div>
            <div className="d-grid mt-5">
              <Link
                to="#"
                className="btn btn-primary btn-block waves-effect waves-light"
              >
                Buy Now
                    </Link>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

CardPricing.propTypes = {
  pricing: PropTypes.object
}

export default CardPricing
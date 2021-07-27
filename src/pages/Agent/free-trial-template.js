import PropTypes from 'prop-types'
import React,{useState} from "react"
import MetaTags from 'react-meta-tags';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap"
import { Link } from "react-router-dom"

// Custom Scrollbar
import SimpleBar from "simplebar-react";

// import images
import servicesIcon1 from "../../assets/images/services-icon/01.png";

import "chartist/dist/scss/chartist.scss";

//i18n
import { withTranslation } from "react-i18next"

const Dashboard = props => {
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard | PreList Pro - Admin Dashboard</title>
        </MetaTags>
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Free Trial for 7 days</h6>
                {/* <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">Template Allocation</li>
                </ol> */}
              </Col>
            </Row>
          </div>
         

          <Row>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-start mini-stat-img me-4">
                      <img src={servicesIcon1} alt="" />
                    </div>
                    <h4 className="fw-medium font-size-24">
                    Free Trail Template 

                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>

    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any
}

export default withTranslation()(Dashboard)

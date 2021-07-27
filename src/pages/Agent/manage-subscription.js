import React from "react"
import { Container, Row } from "reactstrap"
import MetaTags from 'react-meta-tags';


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Pricing Cards
import CardPricing from "./card-pricing"

const PagesPricing = () => {
  const pricings = [
  
    {
      id: 1,
      title: "Free Trial for 7 Days",
      description: "Quis autem iure",
      icon: "ion ion-ios-trophy",
      price: "29",
      duration: "Per month",
      link: "",
      features: [
        { icon: "mdi mdi-check" , title: "For Free :- One Template Available" },
      ],
    },
   
    {
      id: 2,
      title: "Be a Pro ",
      description: "Itaque earum hic",
      icon: "ion ion-ios-cube",
      link: "",
      features: [
        { icon: "mdi mdi-check" , title: "For Pro :- 6 Template Available" }
      ],
    },
  ]
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Pricing |  Admin Dashboard</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs maintitle="Prelist Pro" title="Subscription" breadcrumbItem="Plan" />

          <Row>
            {pricings.map((pricing, key) => (
              <CardPricing pricing={pricing} key={"_pricing_" + key} />
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
export default PagesPricing
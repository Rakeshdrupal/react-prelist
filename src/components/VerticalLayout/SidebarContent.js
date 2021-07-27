import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Main")} </li>
            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="ti-home"></i>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>

            <li>
              <Link to="manage-agent" className="has-arrow waves-effect">
                <i className="ti-user"></i>
                <span>{props.t("Manage Agent")}</span>
              </Link>
              <ul className="sub-menu">

              <Link to="all-register-agent" className="waves-effect">
                <i className="ti-user"></i>
                <span>{props.t("All Registered Agent")}</span>
              </Link>


              <Link to="agent-free" className="waves-effect">
                <i className="ti-user"></i>
                <span>{props.t("Registered Agent ( For Free Trial )")}</span>
              </Link>
              <Link to="agent-pro" className="waves-effect">
                <i className="ti-user"></i>
                <span>{props.t("Registered Agent ( For Paid  )")}</span>
              </Link>
             </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-archive"></i>
                <span>{props.t("Template")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/mange-template">{props.t("Manage Template")}</Link>
                </li>
                <li>
                  <Link to="/template-allocation">{props.t("Template Allocation")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="manage-subscription" className="has-arrow waves-effect">
                <i className="ti-archive"></i>
                <span>{props.t("Manage Subscription")}</span>
              </Link>
              <ul className="sub-menu">
              <li>
                  <Link to="/manage-subscription">{props.t("Subscription Plan")}</Link>
                </li>
                <li>
                  <Link to="/free-trial-template">{props.t("Free Trial for 7 days")}</Link>
                </li>
                <li>
                  <Link to="/be-pro-template">{props.t("Be a Pro")}</Link>
                </li>
              </ul>
            </li>

           
              <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-archive"></i>
                <span>{props.t("Manage Web site")}</span>

              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/form-elements">{props.t("Home")}</Link>
                </li>
                <li>
                  <Link to="/form-elements">{props.t("About Us ")}</Link>
                </li>
                <li>
                  <Link to="/form-elements">{props.t("Proposal ")}</Link>
                </li>
              </ul>
            </li>

            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-archive"></i>
                <span>{props.t("Authentication")}</span>

              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/pages-login-2">{props.t("Login")}</Link>
                </li>
                <li>
                  <Link to="/pages-register-2">{props.t("Register")}</Link>
                </li>
                <li>
                  <Link to="/page-recoverpw-2">
                    {props.t("Recover Password")} 
                  </Link>
                </li>
                <li>
                  <Link to="/auth-lock-screen-2">
                    {props.t("Lock screen")} 
                  </Link>
                </li> 
              </ul>
            </li>*/}

           

          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))

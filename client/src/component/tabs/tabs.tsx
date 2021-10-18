import React, { Suspense } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { useHistory, useLocation } from 'react-router';
import Setting from '../../pages/Profile/underPages/setting/Setting';
import Dictionary from '../../pages/Profile/underPages/Dictionary/Dictionary';
import Results from '../../pages/Profile/underPages/Results/Results';
import AllTest from '../../pages/Profile/underPages/All-test/All-test';
import './tabs.scss';

const CreateTest = React.lazy(() => import('../../pages/Profile/underPages/Create-test/Cteate-test'));

const Tabs: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="tabs-border">
      <Nav tabs className="nav-mobile">
        <NavItem>
          <NavLink
            className={classnames({ active: location.pathname === "/profile/setting" })}
            onClick={() => { 
              history.push("/profile/setting");
            }}
          >
            <span>setting</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: location.pathname === "/profile/dictionary" })}
            onClick={() => { 
              history.push("/profile/dictionary");
            }}
          >
            <span>dictionary</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: location.pathname === "/profile/results" })}
            onClick={() => {
              history.push("/profile/results");
            }}
          >
            <span>results</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: location.pathname === "/profile/all tests" })}
            onClick={() => { 
              history.push("/profile/all tests");
            }}
          >
            <span>all tests</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: location.pathname === "/profile/create test" })}
            onClick={() => { 
              history.push("/profile/create test");
            }}
          >
            <span>create test</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={location.pathname}>
        {
          location.pathname.includes("/profile/setting") && (
            <TabPane tabId="/profile/setting">
            <Row>
              <Col sm="12">
                <Setting />
              </Col>
            </Row>
          </TabPane>
          )
        }
        {
          location.pathname.includes("/profile/dictionary") && (
          <TabPane tabId="/profile/dictionary">
            <Row>
              <Col sm="12">
                  <Dictionary />
                </Col>
            </Row>
          </TabPane>
          )
        }
        {
        location.pathname.includes("/profile/results") && (
          <TabPane tabId="/profile/results">
            <Row>
              <Col sm="12">
                  <Results />
              </Col>
            </Row>
          </TabPane>
          )
        }
        {
        location.pathname.includes("/profile/all tests") && 
          <TabPane tabId="/profile/all tests">
            <Row>
              <Col sm="12">
                <AllTest />
              </Col>
            </Row>
          </TabPane>
        }
        {
          location.pathname.includes("/profile/create test") && (
            <TabPane tabId="/profile/create test">
              <Row>
                <Col sm="12">
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <CreateTest />
                  </Suspense>
                </Col>
              </Row>
            </TabPane>
          )
        }
      </TabContent>
    </div>
  );
}

export default Tabs;
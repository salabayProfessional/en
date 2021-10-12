import React, { Suspense, useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { useHistory, useLocation } from 'react-router';
import Setting from '../../pages/Profile/underPages/setting/Setting';
import Dictionary from '../../pages/Profile/underPages/Dictionary/Dictionary';
import Results from '../../pages/Profile/underPages/Results/Results';
import AllTest from '../../pages/Profile/underPages/All-test/All-test';
const CreateTest = React.lazy(() => import('../../pages/Profile/underPages/Create-test/Cteate-test'));

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('');
  const history = useHistory();
  const location = useLocation();
  const toggle = (tab: any) => {
    if(activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="tabs-border">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: location.pathname === "/profile/setting" })}
            onClick={() => { 
              history.push("/profile/setting");
            }}
          >
            setting
          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink
          className={classnames({ active: location.pathname === "/profile/dictionary" })}
          onClick={() => { 
            history.push("/profile/dictionary");
           }}
        >
         dictionary
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: location.pathname === "/profile/results" })}
          onClick={() => { 
            history.push("/profile/results");
           }}
        >
         results
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: location.pathname === "/profile/all tests" })}
          onClick={() => { 
            history.push("/profile/all tests");
           }}
        >
          all tests
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: location.pathname === "/profile/create test" })}
          onClick={() => { 
            history.push("/profile/create test");
           }}
        >
          create test
        </NavLink>
      </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="/profile/setting">
          <Row>
            <Col sm="12">
              <Setting />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="/profile/dictionary">
          <Row>
            <Col sm="12">
                <Dictionary />
              </Col>
          </Row>
        </TabPane>
        <TabPane tabId="/profile/results">
          <Row>
            <Col sm="12">
                <Results />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="/profile/all tests">
          <Row>
            <Col sm="12">
              <AllTest />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="/profile/create test">
          <Row>
            <Col sm="12">
              <Suspense fallback={<h1>Loading...</h1>}>
                <CreateTest />
              </Suspense>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Tabs;
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { useHistory } from 'react-router';
import Setting from '../../pages/Profile/underPages/setting/Setting';
import Dictionary from '../../pages/Profile/underPages/Dictionary/Dictionary';
import Results from '../../pages/Profile/underPages/Results/Results';
import AllTest from '../../pages/Profile/underPages/All-test/All-test';
import CreateTest from '../../pages/Profile/underPages/Create-test/Cteate-test';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('setting');
  const history = useHistory();

  const toggle = (tab: any) => {
    if(activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="tabs-border">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "setting" })}
            onClick={() => { 
              toggle("setting");
              history.push("setting");
            }}
          >
            setting
          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink
          className={classnames({ active: activeTab === "dictionary" })}
          onClick={() => { 
            toggle("dictionary");
            history.push("dictionary");
           }}
        >
         dictionary
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === "results" })}
          onClick={() => { 
            toggle("results");
            history.push("results");
           }}
        >
         results
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === "all tests" })}
          onClick={() => { 
            toggle("all tests");
            history.push("all tests");
           }}
        >
          all tests
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === "create test" })}
          onClick={() => { 
            toggle("create test");
            history.push("create test");
           }}
        >
          create test
        </NavLink>
      </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="setting">
          <Row>
            <Col sm="12">
              <Setting />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="dictionary">
          <Row>
            <Col sm="12">
                <Dictionary />
              </Col>
          </Row>
        </TabPane>
        <TabPane tabId="results">
          <Row>
            <Col sm="12">
                <Results />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="all tests">
          <Row>
            <Col sm="12">
              <AllTest />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="create test">
          <Row>
            <Col sm="12">
              <CreateTest />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Tabs;
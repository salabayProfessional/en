import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { useHistory } from 'react-router';
import Setting from '../../pages/Profile/underPages/setting/Setting';
import Dictionary from '../../pages/Profile/underPages/Dictionary/Dictionary';
import Results from '../../pages/Profile/underPages/Results/Results';
import AllTest from '../../pages/Profile/underPages/All-test/All-test';
import CreateTest from '../../pages/Profile/underPages/Create-test/Cteate-test';
import { generateString } from '../../specialFunction/specialFunction';

const arr = ["setting", "dictionary", "results", "all tests", "create test"];

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('setting');
  const history = useHistory();

  const toggle = (tab: any) => {
    if(activeTab !== tab) setActiveTab(tab);
  };

  const tabsLinks = arr.map((item) => {

    return (
      <NavItem key={generateString()}>
        <NavLink
          className={classnames({ active: activeTab === item })}
          onClick={() => { 
            toggle(item);
            history.push(item);
           }}
        >
          {item}
        </NavLink>
      </NavItem>
    );
  });

  return (
    <div className="tabs-border">
      <Nav tabs>
        { tabsLinks }
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
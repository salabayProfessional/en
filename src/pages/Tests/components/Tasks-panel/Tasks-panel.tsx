import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import { set_test } from '../../../../store/slices/testsReducer';
import './Tasks-panel.scss';

const TasksPanel: React.FC<{
  tests: any,
}> = ({
  tests,
}) => {
  const tasksList = tests.map((item: any, idx: number) => {
    return (
      <div key={idx}>
        <Card color="dark">
          <CardBody className="task__item">
            <CardTitle tag="h5">{item.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
            <Button color="success" onClick={() => set_test(tests[idx])}>INFO</Button>
          </CardBody>
        </Card>
      </div>
    )
  });

  return (
    <>
      <div className="tasks-panel">
        <div className="tasks-panel__inner">
          { tasksList }
        </div>
      </div>
    </>
  )
};

export default TasksPanel;
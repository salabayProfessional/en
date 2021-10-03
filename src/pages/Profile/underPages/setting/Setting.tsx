import React, { useRef } from 'react';
import "./Setting.scss";
import { Form, Formik } from 'formik';
import DeleteSetting from './components/DeleteSetting/DeleteSetting';
import ChangesSetting from './components/ChangeSetting/ChangesSetting';

const Setting: React.FC = () => {
  const ref = useRef(null);

  const onSubmit = (values: any) => {

  };

  return (
    <Formik initialValues={{}} onSubmit={(values: any) => onSubmit(values)}>
      {({values}) => {
        return (
          <Form>
            <div className="setting-page">
              <div className="user-data">

                <ChangesSetting  ref={ref}/>

                <div className="user-data-body">
                  <h2>Add tariff plan</h2>
                </div>

                <DeleteSetting />
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Setting;

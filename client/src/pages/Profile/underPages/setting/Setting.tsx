import React from 'react';
import "./Setting.scss";
import { Form, Formik } from 'formik';
import DeleteSetting from './components/DeleteSetting/DeleteSetting';
import ChangesSetting from './components/ChangeSetting/ChangesSetting';

const Setting: React.FC = () => {
  // const ref = useRef(null);

  const onSubmit = (values: any) => {
    console.log(values)
  };

  return (
    <Formik initialValues={{}} onSubmit={(values: any) => onSubmit(values)}>
      {({values}) => {
        return (
          <Form>
            <div className="setting-page">
              <div className="user-data">
                <ChangesSetting />
                <div className="wid-200"></div>
                <DeleteSetting />
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default React.memo(Setting);

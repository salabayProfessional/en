import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import Tabs from '../../component/tabs/tabs';
import "./Profile.scss";

const Profile: React.FC = () => {
  return (
    <div className="profile bg-dark">
      <Tabs />
    </div>
  )
};

export default Profile;

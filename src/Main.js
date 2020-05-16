import React from 'react';
import Adress from'./profile/Adress'
import FullName from './profile/FullName'
import ProfilPhoto from './profile/ProfilPhoto'
import './Style.css'

import './App.css';

function Main() {
  return (
    <div className="Main">
    <div className="body">
    <div>
    <FullName/>
    <Adress/>
    </div>
    <ProfilPhoto />
    
     </div>
     </div>

  );
}

export default Main;
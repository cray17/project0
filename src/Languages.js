
import React from 'react';
import { FaPython, FaCuttlefish, FaJava, FaDatabase, FaLinux, FaRProject, FaAws } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function LanguageIcons() {
  return (
    <div className="language-icons">
      <IconContext.Provider value={{ className: 'icon' }}>
        <div className="icon-container">
          <div className="icon-circle"><FaPython /></div>
      </div>
      <div className="icon-container">
          <div className="icon-circle"><FaAws /></div>
        </div>

        <div className="icon-container">
          <div className="icon-circle"><FaCuttlefish /></div>
        </div>
        <div className="icon-container">
          <div className="icon-circle"><FaJava /></div>
        </div>
        <div className="icon-container">
          <div className="icon-circle"><FaDatabase /></div>
        </div>
        <div className="icon-container">
          <div className="icon-circle"><FaLinux /></div>
        </div>
        <div className="icon-container">
          <div className="icon-circle"><FaRProject /></div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default LanguageIcons;


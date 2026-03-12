'use client';
import { useState } from 'react';
import { Star } from '@/assets/icons/Icons';
import SwitchToggle from '../Form/SwitchToggle';
import { Squircle } from 'corner-smoothing';
import SearchInput from '../Form/SearchInput';
import PillGroup from '../Form/PillGroup';
import PatientCard from './PatientCard';
import { dummyImg } from '@/assets/images';

const PatientList = () => {
  const [autoSwitch, setAutoSwitch] = useState(true);
  const [search, setSearch] = useState('');

  return (
    <div className="patient-list-container">
      <div className="patient-top-section">
        <h4 className="patient-title">Patients(4)</h4>
        <Squircle cornerRadius={20} as={'div'} className="patient-top-box">
          <p className="patient-des">
            You can set either an AI chat response as the default or a manual
            reply (when you are online) for each patient individually. If you go
            offline or your session expires (typically after more than 2 hours
            of inactivity), the system will automatically switch to the default
            AI response for all patients.
          </p>
          <div className="session-box">
            <p className="session-title">
              Auto-switch to AI Reply for all on Session Expiry <Star />
            </p>
            <SwitchToggle isOn={autoSwitch} setIsOn={setAutoSwitch} />
          </div>
        </Squircle>
        <div className="patient-search-box">
          <SearchInput
            placeholder="Search"
            value={search}
            onChange={setSearch}
          />
          <PillGroup label="" options={['New', 'Active', 'In Active']} />
        </div>
      </div>
      {/* card list */}

      {/* Individual patient cards would go here */}
      <div className="patient-card-list">
        <PatientCard
          name="John Doe"
          age={30}
          gender="Male"
          image={dummyImg}
          online
        />
        <PatientCard
          name="John Doe"
          age={30}
          gender="Male"
          image={dummyImg}
          online
        />
        <PatientCard
          name="John Doe"
          age={30}
          gender="Male"
          image={dummyImg}
          online
        />

        <PatientCard
          name="John Doe"
          age={30}
          gender="Male"
          image={dummyImg}
          online
        />

      </div>
    </div>
  );
};

export default PatientList;

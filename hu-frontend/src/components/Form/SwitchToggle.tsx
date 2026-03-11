'use client';
import React from 'react';

interface SwitchToggleProps {
  isOn: boolean;
  setIsOn: (value: boolean) => void;
  disabled?: boolean;
  customClass?: string;
}

const SwitchToggle = ({ isOn, setIsOn, disabled, customClass = '' }:SwitchToggleProps) => (
  <div className={`${customClass} switch ${isOn ? 'on' : 'off'}`}>
    <input
      type="checkbox"
      checked={isOn}
      disabled={disabled}
      onChange={() => {
        setIsOn(!isOn);
      }}
    />
    <span className="slider" />
  </div>
);
export default SwitchToggle;

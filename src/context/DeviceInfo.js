import React, { useEffect, useState, createContext, useContext } from 'react';

// Create a context for DeviceInfo
const DeviceInfoContext = createContext();

function DeviceInfoProvider({ children }) {
  const [device, setDevice] = useState('');
  const [browser, setBrowser] = useState('');

  useEffect(() => {
    const userAgent = navigator.userAgent;

    // Check for device type
    if (/Android/i.test(userAgent)) {
      setDevice('Android');
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      setDevice('iOS');
    } else if (/Windows/i.test(userAgent)) {
      setDevice('Windows');
    } else if (/Mac/i.test(userAgent)) {
      setDevice('Mac');
    } else {
      setDevice('Other');
    }

    // Check for browser type
    if (/Chrome/i.test(userAgent)) {
      setBrowser('Chrome');
    } else if (/Firefox/i.test(userAgent)) {
      setBrowser('Firefox');
    } else if (/Safari/i.test(userAgent)) {
      setBrowser('Safari');
    } else if (/Edge/i.test(userAgent)) {
      setBrowser('Edge');
    } else if (/Opera|OPR\//i.test(userAgent)) {
      setBrowser('Opera');
    } else if (/Trident/i.test(userAgent)) {
      setBrowser('Internet Explorer');
    } else {
      setBrowser('Other');
    }
  }, []);

  // Provide the device and browser values to consuming components
  return (
    <DeviceInfoContext.Provider value={{ device, browser }}>
      {children}
    </DeviceInfoContext.Provider>
  );
}

function useDeviceInfo() {
  return useContext(DeviceInfoContext);
}

export { DeviceInfoProvider, useDeviceInfo };

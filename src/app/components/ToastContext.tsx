'use client'

import React, { useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';
import { setToastRef } from '../services/ToastService';

export const ToastProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const toastRef = useRef<Toast>(null);

  useEffect(() => {
    setToastRef(toastRef); // Register the ref globally
  }, []);

  return (
    <>
      {children}
      <Toast ref={toastRef} position="top-right" />
    </>
  );
};

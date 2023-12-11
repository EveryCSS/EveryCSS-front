'use client';

import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';

import store from '@/redux/configureStore';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

export default Providers;

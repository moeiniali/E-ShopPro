"use client"

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import appReducer from './appReducer';

interface State {
  step: string | null;
  controller: string | null;
  userStep: string | null;
}

interface ContextProps extends State {
  changeSteps: (step: string) => void;
  changeController: (controller: string) => void;
  changeUserStep: (userStep: string) => void;

}

const initialState: State = {
  // step: localStorage.getItem('stp_step') || '0',
  // controller: localStorage.getItem('stp_controller') || 'null',
  // userStep: localStorage.getItem('user_step') || 'null'
};

const AppContext = createContext<ContextProps | undefined>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // const changeSteps = (step: string) => {
  //   dispatch({ type: 'STEP', payload: step });
  // };

  // const changeController = (controller: string) => {
  //   dispatch({ type: 'CONTROLLER', payload: controller });
  // };
  // const changeUserStep = (userStep: string) => {
  //   dispatch({ type: 'USERSTEP', payload: userStep });
  // };





  // useEffect(() => {
  //   if (state.step) {
  //     localStorage.setItem('stp_step', state.step);
  //   }
  // }, [state.step]);

  // useEffect(() => {
  //   if (state.controller) {
  //     localStorage.setItem('stp_controller', state.controller);
  //   }
  // }, [state.controller]);

  // useEffect(() => {
  //   if (state.userStep) {
  //     localStorage.setItem('user_step', state.userStep);
  //   }
  // }, [state.userStep]);

  return (
    <AppContext.Provider
    // value={{ ...state, changeSteps, changeController, changeUserStep }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppWrapper');
  }
  return context;
}

import React, { useReducer } from 'react';

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type State = {
  aboutRef?: any;
  experienceRef?: any;
  projectsRef?: any;
  contactRef?: any;
};

export enum ActionTypes {
  SetAboutRef = 'SET_ABOUT_REF',
  SetExperienceRef = 'SET_EXPERIENCE_REF',
  SetProjectsRef = 'SET_PROJECTS_REF',
  SetContactRef = 'SET_CONTACT_REF',
}

export type NavPayload = {
  [ActionTypes.SetAboutRef]: { aboutRef: any };
  [ActionTypes.SetExperienceRef]: { experienceRef: any };
  [ActionTypes.SetProjectsRef]: { projectsRef: any };
  [ActionTypes.SetContactRef]: { contactRef: any };
};

export type NavActions = ActionMap<NavPayload>[keyof ActionMap<NavPayload>];

export const navReducer = (state: State, action: NavActions): State => {
  switch (action.type) {
    case ActionTypes.SetAboutRef:
      console.log(action.payload.aboutRef);
      return {
        ...state,
        aboutRef: action.payload.aboutRef,
      };
    case ActionTypes.SetExperienceRef:
      return {
        ...state,
        experienceRef: action.payload.experienceRef,
      };
    case ActionTypes.SetProjectsRef:
      return {
        ...state,
        projectsRef: action.payload.projectsRef,
      };
    case ActionTypes.SetContactRef:
      return {
        ...state,
        contactRef: action.payload.contactRef,
      };
    default:
      return state;
  }
};

export type navContextType = {
  state: State;
  dispatch: React.Dispatch<NavActions>;
};

const initialState = {};

const defaultNavContext: navContextType = {
  state: initialState,
  dispatch: () => null,
};

const NavContext = React.createContext(defaultNavContext);

const NavProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(navReducer, initialState);

  return (
    <NavContext.Provider value={{ state, dispatch }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavContext, NavProvider };

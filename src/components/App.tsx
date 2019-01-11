import React, { Fragment, ReactNode } from 'react';

export interface ITestProps {
  children?: ReactNode;
}

export const App = (props: ITestProps) => <Fragment>{props.children}</Fragment>;

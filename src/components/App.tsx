import React, { Fragment, ReactNode } from 'react';

export interface TestProps {
  children?: ReactNode;
}

export const App = (props: TestProps): JSX.Element => <Fragment>{props.children}</Fragment>;

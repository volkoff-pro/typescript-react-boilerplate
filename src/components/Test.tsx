import * as React from 'react';

export interface ITestProps {
  compiler: string;
  framework: string;
}

export const Test = (props: ITestProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}
  </h1>
);

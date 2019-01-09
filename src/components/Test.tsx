import React from 'react';
import styles from './styles.module.scss';

export interface ITestProps {
  compiler: string;
  framework: string;
}

export const Test = (props: ITestProps) => (
  <h1 className={styles.header}>
    Hello from {props.compiler} and {props.framework}
  </h1>
);

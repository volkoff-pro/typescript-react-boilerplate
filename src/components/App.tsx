import React, { ReactNode } from 'react';

export interface TestProps {
  children?: ReactNode;
}

export const App: React.FC<TestProps> = ({children}: TestProps) => <>{children}</>;

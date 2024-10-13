import { Provider } from 'react-redux';
import { store } from '@store';
import { PropsWithChildren } from 'react';
import { BreakpointsProvider } from './breakpoints-provider';
import { ThemeProvider } from './theme-provider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BreakpointsProvider>{children}</BreakpointsProvider>
      </ThemeProvider>
    </Provider>
  );
};

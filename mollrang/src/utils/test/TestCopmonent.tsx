import {PropsWithChildren, ReactElement} from 'react';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@libs/tanstack';

export function wrapper({children}: PropsWithChildren): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

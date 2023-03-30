import React from "react";
import { QueryClientProvider as Provider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { isDevEnv } from "lib/isEnv";
import reactQueryClient from "lib/reactQueryClient";


const QueryClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider client={reactQueryClient}>
      {children}
      {isDevEnv() ? <ReactQueryDevtools /> : null}
    </Provider>
  );
};

export default QueryClientProvider;

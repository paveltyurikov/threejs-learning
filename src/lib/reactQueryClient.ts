import { QueryClient } from "react-query";


const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default reactQueryClient;

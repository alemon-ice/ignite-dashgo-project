import { useQuery, UseQueryOptions } from 'react-query';
import { getUsers } from '../user.service';

export default function useUsers(page: number, options: UseQueryOptions) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 5,
    ...options,
  });
}

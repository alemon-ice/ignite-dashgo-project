import { useQuery } from 'react-query';
import { getUsers } from '../user.service';

export default function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 5,
  });
}

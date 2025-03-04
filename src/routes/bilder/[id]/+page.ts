import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const id = Number.parseInt(params.id);

  if (!id) {
    error(404, 'invalid image id');
  }

  return {
    id,
    nextId: id < 10 ? id + 1 : undefined,
    previousId: id > 1 ? id - 1 : undefined,
  };
};

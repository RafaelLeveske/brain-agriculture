import { v4 as uuidv4 } from 'uuid';

export default {
  createUUID(): string {
    return uuidv4();
  },
};

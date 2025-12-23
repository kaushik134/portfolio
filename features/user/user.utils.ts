import { UserProfile } from './user.types';

export const getFullName = (user: UserProfile) => {
    return `${user.firstName} ${user.lastName}`;
};

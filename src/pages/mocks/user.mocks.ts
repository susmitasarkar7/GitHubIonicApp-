import { User } from '../models/user.interface';

const userList : User[] = [
    {
        name: 'Susmita Sarkar',
        company: 'WDS',
        location: 'Kolkata, India',
        bio: 'UI Developr',
        avatar_url: '.png',
        email: 'abc123@gmail.com'
    },
    {
        name: 'John Doe',
        company: 'WDD',
        location: 'Pune, India',
        bio: 'Web Developr',
        avatar_url: '.png',
        email: 'dev123@gmail.com'
    }
];

export const USER_LIST = userList;
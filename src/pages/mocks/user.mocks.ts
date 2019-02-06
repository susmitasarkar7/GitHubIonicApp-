import { User } from '../models/user.interface';

const userList : User[] = [
    {
        name: 'Suman Sarkar',
        company: 'WDS',
        location: 'Kolkata, India',
        bio: 'Software Developr',
        avatar_url: '.png',
        email: 'abc123@gmail.com'
    },
    {
        name: 'Dwipraj Dutta',
        company: 'WDD',
        location: 'Pune, India',
        bio: 'APP Developr',
        avatar_url: '.png',
        email: 'dev123@gmail.com'
    }
];

export const USER_LIST = userList;
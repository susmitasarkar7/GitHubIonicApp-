import { User } from '../models/user.interface';

const userList : User[] = [
    {
        name: 'Suman Sarkar',
        company: 'WDS',
        location: 'Kolkata, India',
        bio: 'Software Developr',
        avatar_url: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
        email: 'abc123@gmail.com'
    },
    {
        name: 'Dwipraj Dutta',
        company: 'WDD',
        location: 'Pune, India',
        bio: 'APP Developr',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxjRIYT8pG0zgzKTilbko-MOv8pSnmO63M9FkOvfHoR9FvInm',
        email: 'dev123@gmail.com'
    }
];

export const USER_LIST = userList;
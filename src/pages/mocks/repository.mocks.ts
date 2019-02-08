import { Repository } from "../models/repository.interface";
import { USER_LIST } from "./user.mocks";

const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'This repository shows the useage of the Camera funtionality within Ionic 3.',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 SMS',
        description: 'This repository shows the useage of the SMS funtionality within Ionic 3.',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 Geolocation',
        description: 'This repository shows the useage of the Geolocation funtionality within Ionic 3.',
        owner: USER_LIST[1]
    },
    {
        name: 'Ionic 3 Vibration',
        description: 'This repository shows the useage of the Vibration funtionality within Ionic 3.',
        owner: USER_LIST[1]
    }
];

export const REPOSITORY_LIST = repositoryList;
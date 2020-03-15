import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
    country: {
        idCountry: any
    };
    state: {
        idState: any
    };
    photo: any;
    time: any;
}

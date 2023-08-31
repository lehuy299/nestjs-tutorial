import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {

    private users = [
        {
            id: 1,
            email: 'danny@gmail.com',
            createAt: new Date()
        },
        {
            id: 2,
            email: 'adam@gmail.com',
            createAt: new Date()
        },
        {
            id: 3,
            email: 'spencer@gmail.com',
            createAt: new Date()
        }
    ]

    findCustomerById(id: number) {
        return this.users.find(user => user.id === id);
    }
}

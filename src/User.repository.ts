import Database, { UserRequestDto } from './Database'

// NOTE: Make db public instead of private. This is required for the tests.
export class UserRepository {
    db: typeof Database;
    constructor(){
        this.db = Database;
    }

    async createUser(user: UserRequestDto): Promise<UserRequestDto>{
        return this.db.create(user)

    }
}

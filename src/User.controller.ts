import { UserRequestDto } from './Database'
import { UserService } from './User.service'

// NOTE: Make userService public and not private. This is required for the tests!
export class UserController {
    
    constructor(public userService:UserService){}

    async store(user: UserRequestDto): Promise<UserRequestDto>{
        return await this.userService.createUser(user)
    }
}

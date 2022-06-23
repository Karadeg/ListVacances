import { User } from "./user.model";

export class Task {

    constructor(public id: number,
        public name: string,
        public done: boolean,
        public description: string,
        public user?: User) {}
}
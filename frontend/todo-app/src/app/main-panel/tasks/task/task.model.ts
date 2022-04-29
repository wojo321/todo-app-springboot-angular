import { Category } from "src/app/shared/category.model";

export class Task {
    constructor(public id: number,
        public description: string,
        public category: Category,
        public done: boolean = false) { }
}
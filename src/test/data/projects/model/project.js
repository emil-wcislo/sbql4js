export default class Project {
    constructor(name, budget, beginDate, finishDate) {
        this.name = name;
        this.budget = budget;
        this.beginDate = beginDate;
        this.finishDate = finishDate;
        this.tasks = [];
        this.manager = undefined;
    }
}
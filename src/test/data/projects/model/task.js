export default class Task {
    constructor(description, startDate, finishDate) {
        this.description = description;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.project = undefined;
        this.employee = undefined;
    }
}
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function Task(description, startDate, finishDate) {
    _classCallCheck(this, Task);

    this.description = description;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.project = undefined;
    this.employee = undefined;
};

exports.default = Task;
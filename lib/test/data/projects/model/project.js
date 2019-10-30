"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Project = function Project(name, budget, beginDate, finishDate) {
    _classCallCheck(this, Project);

    this.name = name;
    this.budget = budget;
    this.beginDate = beginDate;
    this.finishDate = finishDate;
    this.tasks = [];
    this.manager = undefined;
};

exports.default = Project;
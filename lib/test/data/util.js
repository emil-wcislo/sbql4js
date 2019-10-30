"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function createAssociaction(end1, end2, roleName1, roleName2) {
    var ref1 = end1[roleName1];
    if (ref1 && Array.isArray(ref1)) {
        if (!ref1.includes(end2)) {
            ref1.push(end2);
        }
    } else {
        end1[roleName1] = end2;
    }

    var ref2 = end2[roleName2];
    if (ref2 && Array.isArray(ref2)) {
        if (!ref2.includes(end1)) {
            ref2.push(end1);
        }
    } else {
        end2[roleName2] = end1;
    }
}

exports.default = createAssociaction;
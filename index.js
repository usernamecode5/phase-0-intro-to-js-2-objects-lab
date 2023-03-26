// Write your solution in this file!

const employee = {
    name: "P. Sherman",
    streetAddress: "42 Wallaby Way",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {employee};
    employee[key] = "Sam";
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key]
    return employee;
}
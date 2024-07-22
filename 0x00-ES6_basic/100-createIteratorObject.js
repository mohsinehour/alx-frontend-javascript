export default function createIteratorObject(report) {
    let departments = Object.values(report);
    let employees = [];

    for (let department of departments) {
        employees.push(...department.employees);
    }

    let currentIndex = 0;

    return {
        next() {
            if (currentIndex < employees.length) {
                return { value: employees[currentIndex++], done: false };
            } else {
                return { done: true };
            }
        }
    };
}
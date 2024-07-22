export default function createReportObject(employeesList) {
    return {
        allEmployees: {
            engineering: [...employeesList],
        },
        getNumberOfDepartments() {
            return Object.keys(this.allEmployees).length;
        },
    };
}
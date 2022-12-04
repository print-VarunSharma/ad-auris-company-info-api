interface EmployeeInterface {
    employeeId: number;
    firstName: string;
    lastName: string;
    role: string;
    readonly company: string;
}

class Employee implements EmployeeInterface {
    employeeId: number;
    firstName: string;
    lastName: string;
    role: string;
    readonly company: string = "Ad Auris";

    constructor(employeeId: number, firstName: string, lastName: string, role: string) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }

    getEmployeeId(): number {
        return this.employeeId;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }
    getRole() {
        return this.role;
    }
    getFullInformation() {
        return `Employee Id: ${this.employeeId} Employee Name: ${this.firstName} ${this.lastName}`;
    }
}

interface EmployeeServiceInterface {
    employeeProfileData(): EmployeeInterface;
}

class EmployeeService implements EmployeeServiceInterface {
    public employeeProfileData(): EmployeeInterface {
        try {
            const varun = new Employee(1, "Varun", "Sharma", "CTO");
            console.log(varun);
            return varun;
        } catch (e) {
            throw e;
        }
    }
}

export default new EmployeeService();

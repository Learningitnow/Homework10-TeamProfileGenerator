// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor( name, id, email, office ){
        // inherating from the Master Employee Class's properties.
        super( name, id, email, "Manager")
        this.officeNumber = office
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = Manager
const Employee = require("./Employee")
class Manager extends Employee {
    constructor(role, name, id, email, office){
        super(role, name, id, email)
        this.office = office
    }
    getOffice(){
        return this.office
    }
    getRole(){
        return "manager"
    }
}
module.exports = Manager
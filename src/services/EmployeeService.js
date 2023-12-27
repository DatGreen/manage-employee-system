import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employee/"
const EMPLOYEE_API_GETALL_URL = "http://localhost:8080/api/v1/employee/get-all"
const EMPLOYEE_API_DELETE_URL = "http://localhost:8080/api/v1/employee/delete"

class EmployeeService {
    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+"add",employee)
    }
    getAllEmployees(){
        return axios.get(EMPLOYEE_API_GETALL_URL)
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_DELETE_URL + "/" + id)
    }
    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL + id)
    }
    updateEmployeeById(employee,id){
        return axios.put(EMPLOYEE_API_BASE_URL+id,employee)
    }
}

export default new EmployeeService();
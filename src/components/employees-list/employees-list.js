
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employees, Ondelete, onIncrease}) => {

    

    return (
        <ul className="app-list list-group">
            {employees.map((employee) => <EmployeesListItem 
            name={employee.name} 
            salary={employee.salary} 
            key={employee.id} 
            Ondelete={Ondelete} 
            id={employee.id} 
            onIncrease={onIncrease}
            increase={employee.increase}/>)
            }
        </ul>
    )
}

export default EmployeesList;
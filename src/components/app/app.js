import { useState, useEffect } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [filterFunc, setFilterFunc] = useState("all");
  const [serchStr, setSerchStr] = useState("");

    useEffect(() => {
    let employeesStorage = JSON.parse(localStorage.getItem("employees"))

    if(employeesStorage){
      setEmployees(employeesStorage)
    }

  }, [])  

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees))
  }, [employees])

  function addNewEmpoyee(data){
    setEmployees([...employees, data]);
  }

  function OndeleteEmployee(id){
    setEmployees(employees.filter(item => item.id !== id))
  }


  function onIncrease(id){
    const newEmployeesList = [...employees];

    let index = newEmployeesList.findIndex(item => item.id === id);
    newEmployeesList[index].increase = !newEmployeesList[index].increase;

    setEmployees(newEmployeesList);
  }

  function filterEmpolayees(employees){
    let filtredEmployees = employees.slice(0);
    switch(filterFunc){
      case "increase": filtredEmployees = filtredEmployees.filter(item => item.increase === true);
      break;
      case "more1000": filtredEmployees = filtredEmployees.filter(item => item.salary > 1000);
      break;
      default: break;
    }


    return filtredEmployees.filter(item => item.name.includes(serchStr))
  }


  return (
    <div className="app">
        <AppInfo employees={employees}/>

        <div className="search-panel">
            <SearchPanel serchStr={serchStr} setSerchStr={setSerchStr}/>
            <AppFilter OnFilterFunc={setFilterFunc} filterFunc={filterFunc}/>
        </div>
        
        <EmployeesList employees={filterEmpolayees(employees)} Ondelete={OndeleteEmployee} onIncrease={onIncrease}/>
        <EmployeesAddForm addNewEmpoyee={addNewEmpoyee}/>
    </div>
  );
}

export default App;

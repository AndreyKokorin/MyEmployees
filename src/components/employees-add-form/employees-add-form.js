import { useState } from 'react';
import './employees-add-form.css';
import uuid from 'react-uuid';

const EmployeesAddForm = ({addNewEmpoyee}) => {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");


    function sendData(e){
        e.preventDefault();
        if(name && salary){
            e.preventDefault();
            addNewEmpoyee({name, salary, id: uuid(), increase: false});
            setName("");
            setSalary("");
            console.log(Boolean(name))
            console.log(Boolean(salary))

        }
    }
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" 
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" 
                    value={salary}
                    onChange={(e) => {setSalary(e.target.value)}}/>

                <button type="submit"
                        className="btn btn-outline-light"
                        onClick={sendData}
                        onKeyDown={(e) => {
                            if(e.key === "Enter"){
                                sendData()
                            }
                        }}
                        >Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;
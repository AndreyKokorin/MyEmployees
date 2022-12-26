import "./app-info.css";

const AppInfo = ({employees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании {employees.length}</h1>
            <h2>Общее число сотрудников: {employees.length}</h2>
            <h2>Премию получат: {(employees.filter(item => item.increase === true)).length}</h2>
        </div>
    )
}

export default AppInfo;
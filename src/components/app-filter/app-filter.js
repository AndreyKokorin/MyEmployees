
import "./app-filter.css";

const AppFilter = ({OnFilterFunc,filterFunc}) => {

    

    return (
        <div className="btn-group">
            <button type="button"
                    className={(filterFunc === "all")? "btn btn-light" : "btn btn-outline-light"}
                    onClick={() => OnFilterFunc("all")}>
                    Все сотрудники
            </button>
            <button type="button"
                    className={(filterFunc === "increase")? "btn btn-light" : "btn btn-outline-light"}
                   onClick={() => OnFilterFunc("increase")}
                    >
                    На повышение
            </button>
            <button type="button"
                   className={(filterFunc === "more1000")? "btn btn-light" : "btn btn-outline-light"}
                   onClick={() => OnFilterFunc("more1000")}
                    >
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;
import "./filter-panel.css";

const FilterPanel = () => {
    return (
        <div className="filter-panel">
            <button className="filter-panel__btn filter-panel__btn_light">Все сотрудники</button>
            <button className="filter-panel__btn filter-panel__btn_outline">На повышение</button>
            <button className="filter-panel__btn filter-panel__btn_outline">З/П больше 1000</button>
        </div>
    );
}
export default FilterPanel;
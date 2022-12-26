
import './search-panel.css';

const SearchPanel = ({setSerchStr, serchStr}) => {
    
    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={serchStr}
                onChange={(e) => {setSerchStr(e.target.value)}}/>
    )
}

export default SearchPanel;
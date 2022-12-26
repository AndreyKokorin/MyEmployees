import { Component } from "react";

import "./serch-panel.css";

class SerchPanel extends Component {
     constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.getSerchSlice(term)
    }

   render(){
    return (
        <input type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onUpdateSearch}/>
    )
   }
}

export default SerchPanel;
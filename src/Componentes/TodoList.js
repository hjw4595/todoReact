import React from "react";

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list : [],
            inputValue : "",
        }
    }
    AddItem(){
        const { inputValue } = this.state;
        const updateList = this.state.list;
        updateList.push(inputValue);
        this.setState({
            inputValue,
            updateList
        })
    }
    DeletItem(index){
        const list  = this.state.list;
        const updateList = list.filter( item => list[index] !== item)
            this.setState({
                list : updateList
        })
    }

    HandleSubmit = e => {
        e.preventDefault();
        const {inputValue} = this.state;
        if(inputValue !== ""){
            this.AddItem(inputValue);
        }

    }

    UpdateValue = event => {
        const {target : {value}} = event;
        this.setState({
            inputValue: value
        })
    }


    render(){
        return(
            <div>
                <form onSubmit={this.HandleSubmit}>
                    <input value={this.state.inputValue} onChange={this.UpdateValue}/>
                </form>
                <ul>{this.state.list.map((listItem, index) => (
                    <li key={index}>
                        {listItem}
                        <button onClick={() => this.DeletItem(index)}>delet</button>
                    </li>
                ))}</ul>
            </div>
        )
    }
}

export default TodoList
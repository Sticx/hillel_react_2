import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import { v4 as idGenerator } from 'uuid';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [],
            inputValue: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }

    handleChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.inputValue) {
            const newItem = {
                text: this.state.inputValue,
                id: idGenerator(),
                done: false,
            };
            this.setState({
                todoList: [newItem, ...this.state.todoList],
                inputValue: '',
            });
        }
    }

    handleDone(e) {
        const todoList = [...this.state.todoList];
        todoList.map(element => {
            if (e.id === element.id) {
                element.done = !element.done;
            }
            return element;
        });
        this.setState({ todoList });
    }

    render() {
        return (
            <div>
                <div className='wrapper'>
                    <Main state={this.state}
                          handleChange={this.handleChange}
                          handleSubmit={this.handleSubmit}
                          handleDone={this.handleDone}
                    />
                </div>
            </div>
        );
    }

}

export default App;
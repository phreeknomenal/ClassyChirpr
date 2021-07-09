import React, { Component } from 'react';
import Chirps from './components/Chirps';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [], 
            newUser: "",
            newMessage: ""
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                chirps: [
                    { username: 'Clark', message: 'Truth, Justice and the American way!' },
                    { username: 'Bruce', message: 'I... am... BATMAN!!' },
                    { username: 'John', message: `By green lantern's light` }
                ]
            })
        }, 500)
    }

    handleNewUserChange = (e) => this.setState({ newUser: e.target.value });
    handleNewMessageChange = (e) => this.setState({ newMessage: e.target.value });
    handleCreateNewChirp = (e) => {
        e.preventDefault();
        const newChirp = {
            username: this.state.newUser,
            message: this.state.newMessage
        };
        const newestFirstArr = [...this.state.chirps, newChirp]

        this.setState({ chirps: newestFirstArr });
    }


    render() {
        return (
            <>
                <main className="container">
                    <header className="row justify-content-center">
                        <div className="col-2">
                            <img className="logo" src="https://1.bp.blogspot.com/-QSl6hd4rVUY/ULNgN899KqI/AAAAAAAACXA/5r8ZVEy6bBM/s1600/pigeon+in+hat.jpg" alt="" />
                        </div>
                        <div className="col-12 text-center">
                            <h1>
                                Classy Chirpr
                            </h1>
                        </div>
                    </header>
                    <section className="row justify-content-center mt-5">
                        <div className="col-md-7 shadow border rounded py-3">
                            <form className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={this.handleNewUserChange}
                                />
                                <label>Chirp:</label>
                                <input
                                    value={this.state.task}
                                    className="form-control"
                                    onChange={this.handleNewMessageChange}
                                />
                                <button
                                    className="btn btn-primary mt-3"
                                    type="submit"
                                    onClick={this.handleCreateNewChirp}>
                                    Submit Chirp
                                </button>
                            </form>
                        </div>
                    </section>
                    <section className="row justify-content-center mt-5 mb-5">
                        <div className="col-md-7 shadow border rounded py-3">
                        {this.state.chirps.slice(0).reverse().map(chirp => <Chirps chirp={chirp} />)}
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default App;
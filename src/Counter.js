import React, { Component } from 'react';
import movies from './fakeData/BreakFastDataLoad.json'
class Counter extends Component {
    state = {
        movies: movies
    }

    deleteHandle = (movie) => {
        const movies = this.state.movies.filter(m => m.id !== movie.id)
        this.setState({
            movies
        })
    }
    render() {
        if (this.state.movies.length == 0) {
            return <p>There are No Movies</p>
        }
        return (

            <div>
                <div className="row">
                    <div className="col-md-10">
                        <button type="button" className="btn btn-primary my-2 mx-2">
                            Movies <span className="badge badge-light">{this.state.movies.length}</span>
                            <span className="sr-only">unread messages</span>
                        </button>
                    </div>
                    <div className="col-md-2">
                        <h1>Movie Masti</h1>
                    </div>
                </div>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.movies.map(movie =>
                                (
                                    <tr>
                                        <td>{movie.id}</td>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td>
                                            <button onClick={() => this.deleteHandle(movie)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )

                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Counter;
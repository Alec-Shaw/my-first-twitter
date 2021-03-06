import React, { Component } from "react";

import './post-list-item.css'

export default class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggleLike, important, like} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        
        if (important) {
            classNames += ' important'
        }

        if (like) {
            classNames += ' like'
        }

        return (
            <div className={classNames}>
                <span className="app-list-item-label"
                      onClick={onToggleLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-item-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}>
                        <i className="bi bi-star-fill"></i>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="bi bi-trash"></i>
                    </button>
                    <i className="bi bi-heart"></i>
                </div>
            </div>
        )
    }
}


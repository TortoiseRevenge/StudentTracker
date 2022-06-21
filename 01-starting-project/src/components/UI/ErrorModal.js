import React from "react";
import Button from "./Button";
import Card from "./Card";
import './ErrorModal.css';

const ErrorModal = props => {
    return(
        <div>
            <div className="backdrop">
                <div className="modal">
                    <Card>
                        <header className="header">
                            <h2>{props.title}</h2>
                        </header>
                        <div className="content">
                            <p>
                                {props.message}
                            </p>
                        </div>
                        <footer className="actions">
                            <Button ClickHandler={props.onHandleError}>
                                Okay
                            </Button>
                        </footer>
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default ErrorModal;
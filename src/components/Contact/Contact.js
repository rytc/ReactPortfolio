import { Component } from "react/cjs/react.production.min";
import Alert from "./Alert"

class Contact extends Component{
    constructor(props) {
        super(props)
        this.state = {
            errors: []
        }
        this.onNameFocus = this.onNameFocus.bind(this);
        this.onEmailFocus = this.onEmailFocus.bind(this);
        this.onMessageFocus = this.onMessageFocus.bind(this);
    }

    onNameFocus(event) {
        const nameRequiredMsg = "Name is required.";
        const name = event.target.value;
        let nameRequiredMsgIndex = this.state.errors.indexOf(nameRequiredMsg);
        console.log(nameRequiredMsgIndex);

        if(name.length === 0) {
            if(nameRequiredMsgIndex === -1) {
                this.setState({errors: [...this.state.errors, nameRequiredMsg]})
            }
        } else {
            this.setState({
                errors: this.state.errors.filter((error) => {
                            return error !== nameRequiredMsg;
                        })
            });
        }
    }

    onMessageFocus(event) {
        const messageRequiredMsg = "Message is required.";
        const message = event.target.value;
        let messageRequiredMsgIndex = this.state.errors.indexOf(messageRequiredMsg);
        console.log(messageRequiredMsgIndex);

        if(message.length === 0) {
            if(messageRequiredMsgIndex === -1) {
                this.setState({errors: [...this.state.errors, messageRequiredMsg]})
            }
        } else {
            this.setState({
                errors: this.state.errors.filter((error) => {
                            return error !== messageRequiredMsg;
                        })
            });
        }
    }

    onEmailFocus(event) {
        const emailRequiredMsg = "Email is required.";
        const invalidEmailMsg = "Email address is invalid.";

        const email = event.target.value;

        let requiredMsgIndex = this.state.errors.indexOf(emailRequiredMsg)
        let invalidMsgIndex = this.state.errors.indexOf(invalidEmailMsg);

        if(email.length === 0 ) {
            if(requiredMsgIndex === -1) {
                this.setState({errors: [...this.state.errors, emailRequiredMsg]})
            }
        } else {
            this.setState({
                errors: this.state.errors.filter(err => {
                    return err !== emailRequiredMsg;
                })
            });
                        
            if(!email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
                if(invalidMsgIndex == -1) {
                    this.setState({errors: [...this.state.errors, invalidEmailMsg]});
                }
            } else {
                this.setState({
                    errors: this.state.errors.filter(err => {
                        return err !== invalidEmailMsg;
                    })
                });
            }
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <>
            <h2>Contact</h2>
            {errors.map((error, index) => {return <Alert key={index} message={error} />; })}
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name: </label>
                    <input type="text" className="form-control" name="name" id="name" onBlur={this.onNameFocus}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email: </label>
                    <input type="text" className="form-control" name="email" id="email" onBlur={this.onEmailFocus} />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <input type="text" className="form-control" name="message" id="message" onBlur={this.onMessageFocus} />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
            </>
        );
    }

}

export default Contact;
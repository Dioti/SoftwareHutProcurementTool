// update webpack with the following command:
// node_modules\.bin\webpack app.tsx --config webpack-config.js

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

/* form class that creates an order form using controlled fields */
export class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            forename: '',
            surname: '',
            accNo: '',
            supplier: '',
            desc: '',
            quantity: 1,
            estCost: 0.00
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleInputChange(e) {
        var name = e.target.name;
        var value;

        // most of these cases are redundant but allow for more
        // complex updates for additional/modified fields
        switch (name) {
            case "forename": value = e.target.value.toUpperCase(); break;
            case "surname": value = e.target.value.toUpperCase(); break;
            //case "accNo": break;
            case "supplier": value = e.target.value.toUpperCase(); break;
            //case "desc": break;
            //case "quantity": break;
            //case "estCost": break;
            default: value = e.target.value; break;
        }

        this.setState({
            [name]: value
        })

        //console.log(name + ": " + value);
    }

    validateInput(input) {
        // validate any submitted data
    }

    handleSubmit(e) {
        e.preventDefault();

        // alert used for testing purposes
        // final version will redirect the user to a success page
        alert("Order was successfully submitted.");
        alert("name=" + this.state.forename + " " + this.state.surname +
            ",accNo=" + this.state.accNo + ",supplier=" + this.state.supplier +
            ",desc='" + this.state.desc + "',quantity=" + this.state.quantity +
            ",estCost=" + this.state.estCost);
        
        this.clearAllFields();
    }

    handleReset(e) {
        console.log("Resetting...");
        this.clearAllFields();
    }

    clearAllFields() {
        this.setState({
            forename: '',
            surname: '',
            accNo: '',
            supplier: '',
            desc: '',
            quantity: 1,
            estCost: 0
        })
    }

    render() {
        return (
            <div>
                {/* disable autofill for testing purposes */}
                <form method="POST" action="/submit" onReset={this.handleReset} autoComplete="off">
                    <p>
                        <label>Forename: </label>
                        <input type="text" name="forename" value={this.state.forename} onChange={this.handleInputChange} required />
                    </p>
                    <p>
                        <label>Surname: </label>
                        <input type="text" name="surname" value={this.state.surname} onChange={this.handleInputChange} required />
                    </p>
                    <p>
                        <label>Account Number: </label>
                        <input type="text" name="accNo" value={this.state.accNo} onChange={this.handleInputChange} minLength="8" maxLength="8" required />
                    </p>
                    <p>
                        <label>Supplier: </label>
                        <input type="text" name="supplier" value={this.state.supplier} onChange={this.handleInputChange} required />
                    </p>
                    <p>
                        <label>Description: </label>
                        <textarea rows="5" name="desc" value={this.state.desc} onChange={this.handleInputChange} />
                    </p>
                    <p>
                        <label>Quantity: </label>
                        <input type="number" min="1" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} required />
                    </p>
                    <p>
                        <label>Estimated cost(£): </label>
                        <input type="number" min="0" name="estCost" step="0.01" value={this.state.estCost} onChange={this.handleInputChange} required />
                    </p>
                    <br />
                    <input type="reset" value="Clear" /><input type="submit" value="Submit" />

                </form>
            </div>
        );
    }
}

ReactDOM.render(<Form />, document.getElementById('root'));
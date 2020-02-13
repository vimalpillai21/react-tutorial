import React, { Component } from 'react';
import PropTypes from 'prop-types';
class AppValid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table border='2'>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>Array</td>
                            <td>{this.props.propArray.map((value)=>{return value+30})} </td>
                        </tr>
                        <tr>
                            <td>Boolean</td>
                            <td>{this.props.propBool ? "True" : "False"}</td>
                        </tr>
                        <tr>
                            <td>Function</td>
                            <td>{this.props.propFunc(15)}</td>
                        </tr>
                        <tr>
                            <td>Number</td>
                            <td>{this.props.propNumber}</td>
                        </tr>
                        <tr>
                            <td>String</td>
                            <td>{this.props.propString}</td>
                        </tr>
                        <tr>
                            <td>Object</td>
                            <td>{this.props.propObj.fname + ' ' + this.props.propObj.lname}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }


}

AppValid.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObj: PropTypes.object
}

AppValid.defaultProps =
{
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (x) { return x + 65 },
    propNumber: 78,
    propString: "hello",
    propObj: {
        fname: "haris",
        lname: "raju",
    }
}
export default AppValid;
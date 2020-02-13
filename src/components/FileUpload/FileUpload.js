import React, { Component }  from 'react'


class FileUpload extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Vimal",
            nameError: "",
            fileError: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.fileHandler = this.fileHandler.bind(this);
        // setInterval(() => {console.log(this.state)},2000);
    }
        
    handleChange(event){
        let formName = event.target.value;
        if(formName.length === 0){
            console.log("name error");
            this.setState({
                nameError: "Please Enter name!!",
                // name: ''
            })
        } else{
            console.log("name correct");
            this.setState({
                name: event.target.value,
                file: null
            })
        }
    }

    submitForm(){
        console.log("Api called");
    }

    fileHandler(event){
        console.log(event.target.files[0]);
        this.setState({
            file: event.target.files[0]
        })
        if(event.target.files[0] === undefined || event.target.files[0] === null){
            console.error('No file Found');
            this.setState({
                fileError: "Please upload file!!"
            })
        } else {
            this.setState({
                fileError: ""
            })
        }
    }

    render(){
        return(
            <div>
                <form>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
                        {this.state.nameError.length>0 ? (
                            <>
                            <br /><span>{this.state.nameError}</span>
                            </>
                         ): ''}
                    </div>
                    <div>
                        <input type="file" name="dwgFile" onChange={this.fileHandler}
                         defaultValue={this.state.file} />
                        {this.state.fileError.length>0 ? (
                            <>
                            <br /><span>{this.state.fileError}</span>
                            </>
                         ): ''}
                        
                    </div>
                    <input type="submit" value="button" />
                    </form>
            </div>
        );
    }
}
export default FileUpload;
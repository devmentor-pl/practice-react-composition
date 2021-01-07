import React from 'react';
class File extends React.Component {

    onChange= e => {
        const {onChange} = this.props;
        // const{getFile} = this.props;
    
    
        const  file  = e.target.files[0];
        console.log(file)
        if(file && file.type.includes('text')) {
            const reader = new FileReader();
         
          
            reader.onload = function(readerEvent) {
                const fileItems = {
                    name: file.name,
                    size: file.size
                }
                // this.props.onChange(fileItems)
                //this.props.getFile(fileItems)
                
            }
            reader.readAsText(file, 'UTF-8')
        }
    }
    render() {
    
        return  (        
            <input onChange={this.onChange} type="file"multiple  ref={(node) => (this.input = node)}  ></input>
        )
    
    }
}

export default File;
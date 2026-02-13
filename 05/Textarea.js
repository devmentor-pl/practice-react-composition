import React from 'react';

class Textarea extends React.Component {

constructor(props){
    super(props)

    this.textareaRef = React.createRef()
    this.maxHeight = 200
}

getSnapshotBeforeUpdate(prevProps){
    
    const textarea = this.textareaRef.current

    if(!textarea) return {resize: false}

    if(prevProps.content !==this.props.content){

        const currentHeight = textarea.offsetHeight

        if(currentHeight < this.maxHeight){
            return{resize: true}
        }
    }

    return{resize: false}
         
}

componentDidUpdate(prevProps, prevState, snapshot){
    
    if(!snapshot || !snapshot.resize) return

    const textarea = this.textareaRef.current

    if(!textarea) return

    const currentHeight = textarea.offsetHeight
    const scrollHeight = textarea.scrollHeight

    if(currentHeight < scrollHeight && currentHeight < this.maxHeight){
        
        const newHeight = Math.min(scrollHeight + 40, this.maxHeight) // + 40 dodatkowa przestrzeń - bardziej user friendly
        textarea.style.height = newHeight + 'px'
    }
}


heightChange = (e) => {
    if(this.props.onChange){
        this.props.onChange(e)
    }
}

    render() {
        return <textarea
        ref={this.textareaRef}
                value={this.props.content}
                onChange={this.heightChange}
                ></textarea>
    }
}

export default Textarea;
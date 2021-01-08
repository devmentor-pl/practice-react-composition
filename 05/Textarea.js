import React from 'react';
class Textarea extends React.Component {

    /*tu chyba dość namieszałam... działa bo dziala, ale nie jestem z tego kodu zadowolona, nie wiem dlaczego resize zwraca false, powinno chyba true ? bo currentHeight jest większy od scroll więc dlaczego zwraca to co jest po lewej stronie czyli false ?. Prosze o wskazówki, poprawie :)  */

    extraHeight = 10
    maxHeight = 100
    
    textAreaRef = React.createRef();

    handleText = event => {
       const  {changeTextArea} = this.props;
       const textAreaVaue = this.textAreaRef.current.value;

       const currentHeight = this.textAreaRef.current.offsetHeight;
       console.log(`currentHeight: ${currentHeight}`)
       const scrollHeight = event.target.scrollHeight;
       console.log(`scrollHeight: ${scrollHeight}`)


       changeTextArea(textAreaVaue)

    }

    getSnapshotBeforeUpdate = (currentHeight, scrollHeight) => {
      
        return currentHeight > scrollHeight && currentHeight >= this.maxHeight 
        ?

        {
            resize: true
        }
        :
        {
            resize: false
        }
    }

    
    componentDidUpdate = (prevProps, prevState, snapshot) => {
        const currentHeight = this.textAreaRef.current.offsetHeight;
 

            if(snapshot.resize === false && currentHeight < this.maxHeight) {

            this.textAreaRef.current.style.height = `${currentHeight + this.extraHeight}px `
            }
        
    }


    render() {
        return <textarea ref={this.textAreaRef} onChange={this.handleText} > </textarea>
    }
}
export default Textarea;
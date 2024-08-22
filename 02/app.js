import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
    
    state = {
        usersList: ["Jan Kowalski"],
    }

    passData = (passedData) => {
   

          this.setState ( prevState => ({
            usersList: [...prevState. usersList,  passedData]
        }))
           
          
        
    };

    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form passData={this.passData} />
                <List items={ usersList } />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);

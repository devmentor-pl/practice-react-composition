import {v4 as uuid} from 'uuid';

function readFiles([...files]) {
    
    const promises = [];
    
    files.forEach(file => {
        if (file.type.includes('text')) { 
            promises.push(getDataFile(file))
        }
    });

    return Promise.all(promises);
}

function getDataFile(file) {           
    return new Promise((resolve, reject) => {
        
        const fileReader = new FileReader();    
        
        fileReader.onload = (e) => {
            const fileObj = {id : uuid(),
                             name : file.name,
                             size : file.size,
                             content : e.target.result 
                            }

            resolve(fileObj);
        }
    
        fileReader.onerror = () => {
            reject('Error reading file')
        }              
        fileReader.readAsText(file)            
    })    
}

export  { readFiles }
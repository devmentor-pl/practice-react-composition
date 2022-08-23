function readFiles([...files]) {
    
    const filesData= [];
    
    files.forEach(file => filesData.push(getDataFile(file)));

    return Promise.all(filesData);
}

function getDataFile(file) {        
    return new Promise((resolve, reject) => {
        
        const fileReader = new FileReader();    
        
        fileReader.onload = (e) => {
            const fileObj = {name : file.name,                            
                             size : file.size,
                             content : e.target.result
                            }

            resolve(fileObj);
        }
    
        fileReader.onerror = () => {
            reject('Error reading file')
        }
        
        if (file.type.includes('text')) {
            fileReader.readAsText(file)
        }
        else {
            reject('Only txt files are excepted');
        }
    
    })    
}

export  { readFiles }
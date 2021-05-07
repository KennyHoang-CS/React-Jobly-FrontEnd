function createSearchObject(formData) {
        
    let obj = {};
    
    for (const [key, value] of Object.entries(formData)) {
        if (value !== '') {
            obj[key] = value;
        }
    }

    return obj;
}

export default createSearchObject;

const getLS = (keyName) => {
    const localStorageData = JSON.parse(localStorage.getItem(keyName))
    if (localStorageData) {
        return localStorageData;
    }
    return [];
}

const alreadyExists=(id, keyName)=>{
    const StoreData = getLS(keyName);
    const oldData = StoreData.find(data => data.id === id)
    return oldData;
}

const setLS = (id, keyName) => {
    const StoreData = getLS(keyName);
    const oldData = alreadyExists(id, keyName)
    if (oldData) {
        return 'error';
    }
    else {
        const newSTData = JSON.stringify([...StoreData, {id}])
        localStorage.setItem(keyName, newSTData)
        return 'ok';
    }
}




export {getLS, setLS, alreadyExists};
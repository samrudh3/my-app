export const  setLocalStorage =(response) => {
    return localStorage.setItem("account", JSON.stringify(response));
  }
  
  export const getLocalStorage = (key) =>{
      let data =  localStorage.getItem('key');
      return JSON.parse(data);
  }
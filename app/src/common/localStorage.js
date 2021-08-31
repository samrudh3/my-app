export const  setLocalStorage =(response) => {
    return localStorage.setItem("account", JSON.stringify(response));
  }
  
  export const getLocalStorage = () =>{
      let data =  localStorage.getItem('account');
      return JSON.parse(data);
  }
export const GetToken = () => {
    return localStorage.getItem("token");
}
export const SetToken = (token) =>{
    localStorage.setItem('token', token)
}
export const RemoveToken = () =>{
    console.log("token removed");
    localStorage.removeItem("token")    
}
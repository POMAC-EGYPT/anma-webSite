export const userInfo = () => {
    return(
        localStorage.getItem("report") ? JSON.parse(localStorage.getItem("report")) : undefined
    )
   
}
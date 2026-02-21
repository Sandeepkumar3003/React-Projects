
function ConditionalRendering(){
    const isloggedin = true;
    /*
    if(isloggedin){
        return <h1>Welcome Back!</h1>
    }
    else{
        return <h1>Please login!!</h1>
    }

    */
   const element = <h1>{isloggedin ? "Welcome Back!" : "Please Login"}</h1>

   const message = [1,"kskdmd"];

   return (
    <div>
        {element}
        {message.length>0 && <h2>You have {message.length} unread message</h2>}

    </div>
   )

    
   

}

export default ConditionalRendering;
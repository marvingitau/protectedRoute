import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({
    component:Component,
    isAuthenticated:isAuthenticated,
    logout:logout,
    ...rest
}) => {

    return ( 
        <Route
        {...rest}
        render={(props)=>{
            if(isAuthenticated){
                return <Component logout={logout}/>
            }else{
                return(
                    <Redirect to={{ pathname:"/",state:{ from:props.location }}}/>
                );
            }
        }}
        />
     );
}
 
export default ProtectedRoute;
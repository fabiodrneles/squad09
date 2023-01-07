import { Navigate} from 'react-router-dom';
export const CheckLogin = ({ children }) =>{
	
	if(localStorage.getItem('login') !== null){
		return <Navigate to='/search'/>
	}

	return children;
}
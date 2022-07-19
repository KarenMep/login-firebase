import React from 'react'
import { auth } from '../firebase'
import {withRouter} from 'react-router'
import Firestore from './Firestore'

const Admin = (props) => {

  const [user, setUser] = React.useState(null)
  
  React.useEffect(() => {

    if(auth.currentUser){
      console.log('Existe usario')
      setUser(auth.currentUser)
    }else{
      console.log('No existe el usuario')
      props.history.push('./login')
    }
  }, [props.history])
  return (
    <div>
        <h2>Ruta protegida</h2>
        {
          user && (
            <Firestore user={user}/>
          )
        }
    </div>
  )
}

export default withRouter(Admin)
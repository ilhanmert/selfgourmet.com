import { useState } from "react";
import { loginAction, registerAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import ListedItem from "../components/ListedItem";

function Test() {
    const [signUp, setSignUp] = useState(true);
    const [authData, setAuthData] = useState({user_name: "", email:"", password: "", country: "", first_name: "", last_name: ""});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setAuthData({...authData, [e.target.name] : e.target.value})
    };
    console.log("authData", authData);

    const authFunc = () => {
        if(signUp) {
        console.log("register active");

        dispatch(registerAction(authData));
        } else {
        console.log("login active");

        dispatch(loginAction(authData));
        }
    }

  return (
    <div>
        <div>
            <h1>{signUp ? "REGISTER" : "LOGIN"}</h1>
            <div>
                {signUp && <input value={authData.user_name} name="user_name" onChange={handleChange} type="text" placeholder="Username"/>}
                <input value={authData.email} name="email" onChange={handleChange} type="text" placeholder="Email"/>
                <input value={authData.password} name="password" onChange={handleChange} type="text" placeholder="Password"/>
                <input value={authData.country} name="country" onChange={handleChange} type="text" placeholder="ulke"/>
                <input value={authData.first_name} name="first_name" onChange={handleChange} type="text" placeholder="isim"/>
                <input value={authData.last_name} name="last_name" onChange={handleChange} type="text" placeholder="soyisim"/>

            </div>
            <div>
                {
                
                signUp ? <span onClick={() => setSignUp(false)}>Daha önce kayıt oldunuz mu?</span> : <span onClick={() => setSignUp(true)}>Kayıt olmak için</span>
                }
                
            </div>
            <div onClick={authFunc}>{signUp ? "Kayıt ol" : "Giriş Yap"}</div>
        </div>
        <ListedItem title={"Mc Donald's"}/>
    </div>
  )
}

export default Test
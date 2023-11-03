import React, {ChangeEventHandler, FormEventHandler} from 'react';
import './App.css';
import axios from 'axios';


const BASE_API_URL = 'http://localhost:5000';
function App() {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [userName, setUsername] = React.useState('');

    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
    });

    const onChangeValue = React.useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value}));
    }, []);

    const onSubmit = React.useCallback<FormEventHandler>((event) => {
        event.preventDefault();
        axios.post(`${BASE_API_URL}/ajax`, {
            data: formData,
        }, {
            withCredentials: true,
        })
            .then(response => {
                setIsLoggedIn(response.status === 201);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, [formData]);

    React.useEffect(() => {
        if (isLoggedIn) {
            axios.get(`${BASE_API_URL}/user`, {
                withCredentials: true,
            })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log('Error:', error);
                });
        }
    }, [isLoggedIn])


    if (isLoggedIn) {
        console.log('isLoggedIn: ', isLoggedIn)
    }

    return (
        <div className="login-page">
            <div className="form">
                <h2>Login form</h2>
                <form onSubmit={onSubmit} className="login-form">
                    <input type="text" placeholder="username" name="username" value={formData.username} onChange={onChangeValue} />
                    <input type="password" placeholder="password" name="password" value={formData.password} onChange={onChangeValue} />
                    <button type="submit">login</button>
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>
    );
}

export default App;

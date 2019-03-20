import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, email, password) => {
    return this.service.post('/signup', { username, email, password})
    .then(response => response.data)
  }
}

export default AuthService;
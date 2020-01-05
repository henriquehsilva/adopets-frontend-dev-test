import axios from 'axios';

const AUTH_SESSION_URL = "https://test.adopets.app/v1/auth/session-request";
const AUTH_REGISTER_URL = "https://test.adopets.app/v1/auth/session-register";

interface registerUserInterface {
  organization_user: {
    email: string;
    password: string;
  };
}

interface headerConfigInterface {
  headers: {
    Authorization: string;
  };
}

class AuthService {

  async authenticate(api_key: string){
    interface sessionConfigInterface {
      system_api_key: string;
    }

    let sessionConfig: sessionConfigInterface = {
      system_api_key: api_key
    }

    let sessionResponse = await axios.post(AUTH_SESSION_URL, sessionConfig);

    let authToken = sessionResponse.data.data.access_key;

    let registerUserData: registerUserInterface = {
      organization_user: {
        email: "usuario-test@adopets.com",
        password: "123123"
      }
    };

    let registerHeaderConfig: headerConfigInterface = {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    };

    let registerResponse = await axios.post(
      AUTH_REGISTER_URL,
      registerUserData,
      registerHeaderConfig
    );

    let data: string = registerResponse.data.data.access_key;

    return data;
  }

  getToken(): string | null {
    let token: string | null= localStorage.getItem('token');

    return token;
  }

  getAuthHeader() {
    return {headers: {Authorization: 'Bearer ' + this.getToken() }};
  }
}

export default new AuthService();

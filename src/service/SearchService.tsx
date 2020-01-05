import axios from 'axios';
import AuthService from './AuthService';

const PET_SEARCH_BASE_URL = "https://test.adopets.app/v1/pet/search";

interface petDataInterface {
  age_key: string;
  branch: {
    id: number;
    uuid: string;
  };
  branch_id: number;
  breed_primary: {
    id: number;
    name: string;
  };
  breed_primary_id: number;
  created_date: string;
  custom_code: null;
  id: number;
  name: string;
  payment_model_key: string;
  price: string;
  sex_key: string;
  size_key: string;
  specie: {
    id: number;
    name: string;
  };
  specie_id: number;
  status_key: string;
  uuid: string;
}

const petDataDefault: Array<petDataInterface> = [
  {
    age_key: "",
    branch: {
      id: 0,
      uuid: ""
    },
    branch_id: 0,
    breed_primary: {
      id: 0,
      name: ""
    },
    breed_primary_id: 0,
    created_date: "",
    custom_code: null,
    id: 0,
    name: "",
    payment_model_key: "",
    price: "",
    sex_key: "",
    size_key: "",
    specie: {
      id: 0,
      name: ""
    },
    specie_id: 0,
    status_key: "",
    uuid: ""
  }
];

class SearchService {
  async search(
    sex: string = "FEMALE",
    size: string = "XL",
    age: string = "SENIOR",
    page: number = 1
  ) {
    let response = await axios.post(PET_SEARCH_BASE_URL, {
      search: {
        sex_key: sex,
        size_key: size,
        age_key: age,
        _fields: [
          "id",
          "uuid",
          "custom_code",
          "name",
          "specie_id",
          "breed_primary_id",
          "price",
          "created_date",
          "status_key",
          "branch_id",
          "payment_model_key",
          "sex_key",
          "size_key",
          "age_key"
        ],
        specie: {
          with: {
            _fields: ["id", "name"]
          }
        },
        breed_primary: {
          with: {
            _fields: ["id", "name"]
          }
        },
        branch: {
          with: {
            uuid: "ef71cadf-fa9b-4c8b-a1a8-0e31e784c3ff",
            _fields: ["id", "uuid"]
          }
        }
      },
      options: {
        page,
        limit: 5,
        sort: ["name"]
      }
    }, AuthService.getAuthHeader());

    let data: Array<petDataInterface> = response.data.data.result;

    return data;
  }

  async getPetDataDefault() {
    let result: Array<petDataInterface> = petDataDefault;

    return result;
  }
}

export default new SearchService();

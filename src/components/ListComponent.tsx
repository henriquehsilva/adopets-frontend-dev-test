import React, { useEffect, useState }  from 'react';
import PetComponent from './PetComponent';
import SearchService from '../service/SearchService';
import {
  Layout,
  Pagination,
  Row,
  Col,
  Alert
} from 'antd';

  const { Header, Content } = Layout;

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

type listProps = {
  gender: string,
  age: string,
  size: string,
  loaded: boolean
}

const ListComponent: React.FC<listProps> = ({ gender, age, size, loaded }) => {

  const [petsData, setPetsData] = useState(petDataDefault);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleSearch(gender, size, age, page);
    // eslint-disable-next-line
  }, [gender, age, size, page]);

  async function handleSearch(
    gender: string,
    size: string,
    age: string,
    page: number
  ) {
    let data: Array<petDataInterface> = await SearchService.search(
      gender,
      size,
      age,
      page
    );
    setPetsData(data);
  }

  return (
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: "#fff", padding: 0 }}>
        <Row type="flex" justify="space-around">
          <Col>{gender}</Col>
          <Col>{age}</Col>
          <Col>{size}</Col>
        </Row>
      </Header>
      {petsData.length === 0 && (

        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Alert
            message="Informational Notes"
            description="We regret to inform you that there are no animals available with these
            specifications."
            type="info"
            showIcon
          />
        </Content>
      )}
      {loaded &&
        petsData.map(pet => (
          <PetComponent pet={ pet } />
        ))}
      <Content
        style={{ margin: "24px 16px 0", overflow: "initial" }}
        className="pagination"
      >
        <Pagination
          defaultCurrent={1}
          onChange={e => setPage(e)}
          total={20}
        />
      </Content>
    </Layout>
  )
}

export default ListComponent;

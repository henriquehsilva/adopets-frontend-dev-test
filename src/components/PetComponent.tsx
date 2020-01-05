import React from 'react';
import { Layout, PageHeader, Statistic, Descriptions } from 'antd';

const { Content } = Layout;

interface petInterface {
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

type petProps = {
  pet: petInterface
}

const PetComponent: React.FC<petProps> = ({ pet }) => {

  console.log(pet.id)

  return (
    <PageHeader
      style={{
        border: '1px solid rgb(235, 237, 240)',
        background: '#ffffff',
        width: '80%'
      }}
      title={ pet.name }
      subTitle={ pet.breed_primary.name }
    >
      <Descriptions size="small" column={2} >
        <Descriptions.Item label="Specie">{ pet.specie.name }</Descriptions.Item>
        <Descriptions.Item label="Sex">{ pet.sex_key }</Descriptions.Item>
        <Descriptions.Item label="Age">{ pet.age_key }</Descriptions.Item>
        <Descriptions.Item label="Size">{ pet.size_key }</Descriptions.Item>
      </Descriptions>
      <Content>
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            justifyContent: 'flex-end',
          }}
        >
          <Statistic
            title="Status"
            value={ pet.status_key }
            style={{
              marginRight: 32
            }}
          />
          <Statistic title="Price" prefix="$" value={ pet.price } />
        </div>
      </Content>
    </PageHeader>
  )
}

export default PetComponent;

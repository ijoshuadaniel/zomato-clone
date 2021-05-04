import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MenuItem from './menuitem'

const MenuList = () => {
  const ItemArray = [
    {
      image:
        'https://b.zmtcdn.com/data/pictures/chains/6/19253946/00aa4e3528c5f0d83aad699256d333a6_o2_featured_v2.jpg?output-format=webp',
      title: 'Gopal Mistanna Bhandar',
      ratings: '4.1 (2,229 Delivery Reviews)',
      keyword: 'Mithai, Desserts, Street Food',
      price: '50',
      time: '20',
    },
    {
      image:
        'https://b.zmtcdn.com/data/pictures/2/19034552/1183140b69b9721e4133cc36b0bbfb20_o2_featured_v2.jpg?output-format=webp',
      title: 'Heritage',
      ratings: '4.0 (6.1k Delivery Reviews)',
      keyword: 'Mithai, Desserts, Street Food',
      price: '150',
      time: '31',
    },
    {
      image:
        'https://b.zmtcdn.com/data/pictures/5/19619465/52e57db2a31850c5b852da6700108549_o2_featured_v2.jpeg?output-format=webp',
      title: 'Sherowali Restaurant',
      ratings: '4.4 (499 Delivery Reviews)',
      keyword: 'North Indian, South Indian',
      price: '150',
      time: '23',
    },
    {
      image:
        'https://b.zmtcdn.com/data/pictures/2/19029872/c589dfe0fe77991cacb0507c266aa9c1_o2_featured_v2.jpg?output-format=webp',
      title: 'Brewbakes Cafe',
      ratings: '4.3 (11.9k Delivery Reviews)',
      keyword: 'North Indian, Rolls',
      price: '150',
      time: '20',
    },
    {
      image:
        'https://b.zmtcdn.com/data/pictures/1/19041391/311428208389601286c247c527e78106_o2_featured_v2.jpg?output-format=webp',
      title: 'Trinayani Fast Food',
      ratings: '4.2 (1,946 Delivery Reviews)',
      keyword: 'Tibetian, Chinese',
      price: '150',
      time: '28',
    },
    {
      image:
        'https://b.zmtcdn.com/data/pictures/3/19159333/0426c554ad14eb07e39915b399b09c1f_o2_featured_v2.png?output-format=webp',
      title: 'Lets DimSum',
      ratings: '4.1 (1,920 Delivery Reviews)',
      keyword: 'Mithai, Desserts, Street Food',
      price: '50',
      time: '20',
    },
    {
      image:
        'https://b.zmtcdn.com/data/pictures/6/19178996/ec4dc057f7612ec5b78ea2a854785767_o2_featured_v2.jpg?output-format=webp',
      title: 'Smoke N Spice',
      ratings: '4.1 (1,743 Delivery Reviews)',
      keyword: 'Biryani, Chinese',
      price: '150',
      time: '25',
    },
    {
      image:
        'https://b.zmtcdn.com/data/pictures/1/19582191/024283be0bffba38e1e34df452c013bf_o2_featured_v2.jpg?output-format=webp',
      title: 'Me N Momo',
      ratings: '4.6 (189 Delivery Reviews)',
      keyword: 'Chinese, Momos',
      price: '200',
      time: '42',
    },
  ]

  return (
    <div style={{ marginTop: '40px' }}>
      <Container>
        <Row>
          {ItemArray.map((item) => {
            return (
              <Col md='4' xs='6'>
                <MenuItem
                  image={item.image}
                  title={item.title}
                  ratings={item.ratings}
                  keyword={item.keyword}
                  price={item.price}
                  time={item.time}
                />
                <br />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default MenuList

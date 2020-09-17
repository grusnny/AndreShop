import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
const extra = (
    <a>
      <Icon name='user' />
      16 Friends
    </a>
  )
const Producto=(props)=>{
    const {thumbnail,title,original_price,state_name}=props.producto;
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-mb-4" >
            <Card fluid>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>
            </Card>
        </div>
    )
}

export default Producto;
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
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" >
                <Card >
                    <Image src={thumbnail} size='small' centered />
                    <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{original_price}</span>
                    </Card.Meta>
                    <Card.Description>
                        {state_name}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                    </a>
                    </Card.Content>
                </Card>
            </div>
    )
}

export default Producto;
import React from 'react'
import PropTypes from 'prop-types'
import { Card, Carousel, Button, Icon } from 'antd';

const InfoBox = (props) => {
  return (
    <Card key={props.marker.id} title={props.marker.name} bordered={false} style={{ width: 300,position:'fixed',left:'20px', top:'120px',zIndex:10000 }}>
       <Carousel style={{height:'170px'}}>
       {props.marker.photos.map((url,index) => {
         return(<img src={url} key={index} />)
         })
       }
       </Carousel>
       <div className='marker-meta'>
         <span>{props.marker.author}</span> <span style={{float:'right'}}>{props.marker.date}</span>
       </div>
       <div className='marker-content'>
         <p>{props.marker.description}</p>
       </div>
       <Button onClick={this.initUserChooseLocation} style={{marginRight:'10px'}}>
           <Icon type="plus" /> add more photos
         </Button>
  </Card>
  )
}

export default InfoBox

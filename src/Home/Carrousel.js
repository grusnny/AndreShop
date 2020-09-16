import  React  from  'react';
import  Carousel  from  'semantic-ui-carousel-react';
import { Image, Button } from  'semantic-ui-react'
import { Container, Header } from 'semantic-ui-react'
import './Carrousel.css';
const  Carrousel  = () => {
	let  elements  = [
        {
		    render:()=>{
				return <div className="container" aling="center" >
                <a href="default.asp">
                <img  className="crop" src="https://www.esan.edu.pe/apuntes-empresariales/2016/07/27/tiendavirtual_principal.jpg" />
                </a>
                </div>
			}
        },
        {
		    render:()=>{
				return <div className="container" align="center">
                <a href="default.asp">
                <img className="crop" src="https://bloximages.newyork1.vip.townnews.com/heraldcourier.com/content/tncms/assets/v3/editorial/f/69/f69b1da8-5f24-11e6-9321-5bf82348c0d5/57ab6d004cf59.image.jpg?resize=1200%2C800" />
                </a>
                </div>
			}
        },
        {
		    render:()=>{
				return <div className="container" align="center">
                <a href="default.asp">
                <img className="crop" src="https://www.fuegoyamana.com/wp-content/uploads/2018/05/main-1080x675.png" />
                </a>
                </div>
			}
		},
		
	]
	return (
		<div>
			<Carousel
				elements  =  {  elements  }
				duration  ={8000}
				animation  ='slide left'
				showNextPrev  =  {false}
				showIndicators  ={true}
			/>
		</div>
	)

}
export  default  Carrousel ;
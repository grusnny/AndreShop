import  React  from  'react';
import  Carousel  from  'semantic-ui-carousel-react';
import './Carrousel.css';
const  Carrousel  = () => {
	let  elements  = [
        {
		    render:()=>{
				return <div className="container1" align="center" >
                <a href="default.asp">
                <img  className="crop" src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mco-home-desktop-slider-picture-baddaccc-7de2-4ea0-b124-cac3503dc550.jpg" />
                </a>
                </div>
			}
        },
        {
		    render:()=>{
				return <div className="container1" align="center">
                <a href="default.asp">
                <img className="crop" src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mco-home-desktop-slider-picture-81fbe9f3-b51e-4fdb-9f68-39b8dc51c78a.jpg" />
                </a>
                </div>
			}
        },
        {
		    render:()=>{
				return <div className="container1" align="center">
                <a href="default.asp">
                <img className="crop" src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mco-home-desktop-slider-picture-f41b7439-0a2d-4a50-b970-a1173b51c4fe.jpg" />
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
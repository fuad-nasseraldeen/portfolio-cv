import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

import './Carousel.css'
//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

/*
inject a global window. jQuery first.
you can use html script tag to inject jquery as well.
go to the index.html of your react project.

public/index.html

<body>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> 
</body>
*/

export interface Props {
    children?: React.ReactNode
    slide?: number
}


export class Carousel extends React.Component<Props, object> {

    // Owl Carousel Settings
    options = {
        items: 1,                 // Show one item at a time
        loop: true,               // Enable looping
        center: true,             // Center the active item
        margin: 10,               // Margin between items
        nav: true,                // Enable navigation buttons
        dots: true,               // Enable dots navigation
        // autoplay: true,           // Enable autoplay
        // autoplayTimeout: 3000,    // Set autoplay interval to 3 seconds
        // autoplayHoverPause: true, // Pause on hover
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsiveClass: true,
        // stagePadding: 20,
        responsive: {
            0: {
                items: this.props.slide !== undefined ? this.props.slide : 1
            },
            700: {
                items: this.props.slide !== undefined ? this.props.slide : 2
            },
            1170: {
                items: this.props.slide !== undefined ? this.props.slide : 3
            }
        }
    };


    render() {
        return (
            <OwlCarousel className="slider-items owl-carousel" {...this.options}>
                {this.props.children}
            </OwlCarousel >
        )
    }
}

export default Carousel
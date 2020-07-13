import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  // Testimonial Carousel
  public testimonial = [{
    image: 'assets/images/bikash.jpg',
    name: 'Bikash Shaw',
    designation: 'Designer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  }, {
    image: 'assets/images/bikash.jpg',
    name: 'Bikash Shaw',
    designation: 'Content Writer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  }, {
    image: 'assets/images/bikash.jpg',
    name: 'Bikash Shaw',
    designation: 'Lead Developer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  }]

  // Teastimonial Slick slider config
  public testimonialSliderConfig = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Team 
  public team = [{
    image: 'assets/images/team/1.jpg',
    name: 'Bikash Shaw',
    designation: 'CEO & Founder at Company'
  }, {
    image: 'assets/images/team/1.jpg',
    name: 'Bikash Shaw',
    designation: 'CEO & Founder at Company'
  }, {
    image: 'assets/images/team/1.jpg',
    name: 'Bikash Shaw',
    designation: 'Designer & Content Writer'
  }, {
    image: 'assets/images/team/1.jpg',
    name: 'Bikash Shaw',
    designation: 'Lead Developer'
  }]

  // Team Slick slider config
  public teamSliderConfig = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

}


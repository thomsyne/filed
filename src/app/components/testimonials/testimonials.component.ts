import { TestimonialModel } from './../../core/models/testimonial.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonialList: TestimonialModel[] = [
    {
      quoteText: "It surpassed our expectations",
      comment: "Filed has completely surpassed our expectations. I will refer everyone I know. Filed is worth much more than I paid.",
      imageUrl: "../../../assets/img/lady1.jpg",
      fullName: "Tonia Y.",
      role: "Flex Content @Hello",
    },
    {
      quoteText: "The essential marketing tool",
      comment: "Filed is the most valuable business resource we have EVER purchased. I was amazed at the quality of filed. We were treated like royalty.",
      imageUrl: "../../../assets/img/man1.jpg",
      fullName: "Jack Francis",
      role: "Manager @ Accidents",
    },
    {
      quoteText: "Your company is truly upstanding",
      comment: "The service was excellent. After using filed my business skyrocketed! It really saves me time and effort.",
      imageUrl: "../../../assets/img/lady2.jpg",
      fullName: "Dawna N.",
      role: "Editor @ Musuem",
    },
    
  ]

  constructor() { }

  ngOnInit() {
  }

}

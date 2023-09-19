import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards =[ 
    {
      title: "card1",
      imgUrl: "img1",
      desc: "desc1"
    },
    {
      title: "card2",
      imgUrl: "img2",
      desc: "desc2"
    },
    {
      title: "card3",
      imgUrl: "img3",
      desc: "desc3"
    },
    {
      title: "card4",
      imgUrl: "img4",
      desc: "desc4"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

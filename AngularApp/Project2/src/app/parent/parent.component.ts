import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }
  products=[
    {
      id:1,
      'img':'https://images.all-free-download.com/images/wallpapers_large/pink_flower_wallpaper_flowers_nature_wallpaper_1183.jpg',
      'price':122,
      'pid':"yi",
      'pname':"qwe"

    },
    {
      id:2,
      'img':"https://www.onlygfx.com/wp-content/uploads/2018/08/15-flower-bouquet-watercolor-painting-background-1-1024x1024.jpg",
      'price':126,
      'pid':"ccv",
      'pname':"qwe"

    },
    {
       id:3,
      'img':"https://www.onlygfx.com/wp-content/uploads/2018/08/15-flower-bouquet-watercolor-painting-background-cover.jpg",
      'price':129,
      'pid':"hj",
      'pname':"qwe"

    }
  ]
  imgvar=false
  showimg()
  {
      this.imgvar=!this.imgvar;
    
  }

  ngnInit(): void {
  }

}

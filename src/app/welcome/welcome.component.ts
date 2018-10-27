import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  selectedFile = null;
  imageToShow: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
       // here you can save base64-image to session/localStorage
       console.log(reader.result);
       localStorage.setItem('image', reader.result);
    }, false);

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    this.router.navigate(['/editing']);
  }

  onUpload() {
    console.log(this.selectedFile);
  }

  getBase64Image(img) {
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    let ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    let dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

}

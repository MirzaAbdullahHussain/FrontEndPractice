import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
//   name = 'aoun';
//   nameChanged(){
//     this.name = 'Umais jani:)';
//   }
//   info = '0';
//   myinfo(){
//     this.info='03352557162';
//   }
//   maths:any;
//   english:any;
//   urdu:any;
//   chemistry:any
//   physics:any
//   islamiat:any
//   computer:any
//   total:any;
//   percentage :any;
//   Status:any;
// Percentage1(){
//   this.total = this.maths+ this.english + this.urdu+this.islamiat+this.computer+this.physics+this.chemistry
//   this.percentage= (this.total/700)*100
//   if(this.total<350){
//   this.Status="SORRY YOU ARE NOT ELIGIBLE"
//   }
//   else
// this.Status= "YOU CAN JOIN"
// this.percentage= this.percentage.toFixed(2)
// }
NAME:any
PASSWORD:any
LOGIN:any
visible = false
visible2=false

visible5 =false

Login_status="     "
login_status1(){
 
if(this.NAME=='Yazdaan' || this.NAME == 'Abdullah' || this.NAME == 'Aown' )
{
  if(
    this.PASSWORD=="QWERTY"
  ){
   this.visible = true
  this.visible2= true
  
  this.visible5=true
 
 this.Login_status='YOU ARE LOGGED IN'
  
}
else{
  alert('YOUR PASSWORD IS INCORRECT')
}

}
else{
  alert('YOUR NAME IS INCORRECT')
}
}
  
}
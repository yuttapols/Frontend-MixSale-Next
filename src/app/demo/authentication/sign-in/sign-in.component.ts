// angular import
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AuthenService } from '../authen.service';
import { FormBuilder, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { SharingService } from 'src/app/SharingService';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export default class SignInComponent implements OnInit{

  constructor(
    private callService : AuthenService,
    private formBuilider : FormBuilder,
    private sharing : SharingService,
    private router: Router,
  ) { 
  }



  ngOnInit() {
    sessionStorage.removeItem("userData")
    this.sharing.userData.next(true);
  }

  loginForm = this.formBuilider.group({
    username : new FormControl(),
    password : new FormControl(),
    remember : false
  })

  onSubmit(){
    console.log("Data:" ,this.loginForm.value)
    // this.callService.login()
    if(this.validForm()){
      
      this.callService.login(this.loginForm.value?.username, this.loginForm.value?.password).subscribe(resp=>{
        if(resp.data){

          Swal.fire({
            icon: 'success',
            title: 'เข้าสู่ระบบสำเร็จ!',
            // text: 'เข้าสู่ระบบสำเร็จ',
            confirmButtonText: 'ตกลง',
            heightAuto: false,
          }).then(res=>{
            if(res.isConfirmed){
              // Set session
              sessionStorage.setItem("userData", JSON.stringify(resp.data))
              this.sharing.userData.next(true);
              this.router.navigate(['/analytics']);
            }
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'เข้าสู่ระบบไม่สำเร็จ!',
            text: 'กรุณาตรวจสอบข้อมูล',
            confirmButtonText: 'ตกลง',
            heightAuto: false,
          });
        }
      })

    }
  }

  validForm(){
    let title = 'กรุณาตรวจสอบข้อมูล!';
    let text = 'กรุณากรอก : ';
    if(!this.loginForm.value?.username){
      Swal.fire({
        icon: 'warning',
        title: title,
        text: text + 'Username',
        confirmButtonText: 'ตกลง',
        heightAuto: false,
      })
      return false;
    }else
    if(!this.loginForm.value?.password){
      Swal.fire({
        icon: 'warning',
        title: title,
        text: text + 'Password',
        confirmButtonText: 'ตกลง',
        heightAuto: false,
      })
      return false;
    }else
    if (this.loginForm.valid) {
      return true;
    }
    return false;
  }



}

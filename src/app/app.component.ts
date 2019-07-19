import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medicine-reminder';

  medicine=[];
  medicineName;
  morningDose;
  noonDose;
  nightDose;

  onAddMedicine(form:NgForm){
    console.log(form.value);
  }

  onSubmitMedicineData(){

  }
}

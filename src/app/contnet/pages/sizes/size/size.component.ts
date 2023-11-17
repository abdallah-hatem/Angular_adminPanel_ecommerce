import { Component, OnInit, inject } from '@angular/core';
import { SizeService } from '../../../../core/services/size.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss'],
})
export class SizeComponent implements OnInit {
  myForm: FormGroup;
  sizeService = inject(SizeService);

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    this.sizeService
      .addSize(this.myForm.value)
      .subscribe((res) => console.log(res));
  }
}

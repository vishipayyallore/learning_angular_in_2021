import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private localStorageService: LocalstorageService) { 
    
    this.bookForm = this.formBuilder.group({
      title: '',
      author: '',
      isbn: '',
      pages: 0.0,
      isActive: false
    });

  }

  ngOnInit(): void {
  }

  onProfessorAdd(professorData: any): void {
    console.warn(`Professor Add Request received`);

    // this.professorsService.AddProfessor(professorData).subscribe(res => {

    //   console.log('Professor Added!')
    //   this.toastr.success('Professor Added.', 'College');
    //   this.ngZone.run(() => this.router.navigateByUrl('/professors'))
    // });
  }

}

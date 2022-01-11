import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { List } from '../data/datas';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data:FormGroup = this.fb.group({
    id: new FormControl('1'),
    title: new FormControl('',[Validators.required,Validators.minLength(4)]),
    description: new FormControl('',[Validators.required,Validators.minLength(4)])
  })
  list:List[]=[];
  update:boolean=false;

  constructor(private fb:FormBuilder,private api : ServiceService) { }

  ngOnInit(): void {
    this.api.List().subscribe(res=>{
      this.list=res['data'];
    })
  }
  submit(){
    if(this.update){
      this.updateList()
    }else{this.save()}
  }
  save(){
    if(this.data.valid){
      this.api.SaveToList(this.data).subscribe(res=>{
      console.log(res)  
      })
    }else{ console.log("form not valide")}
  }
  deleteitem(id:any){
    this.api.deleteItem(id).subscribe(res=>{
      console.log(res)
      //window.location.reload();
    })
  }
  Update(u_id:any,u_title:string,u_description:string){
    this.data.get('id')?.setValue(u_id);
    this.data.get('title')?.setValue(u_title);
    this.data.get('description')?.setValue(u_description);
    this.update=true;
  }
  updateList(){
    this.api.updateItem(this.data.get('id')?.value,this.data).subscribe(res=>{
      console.log(res)
    })
  }
}

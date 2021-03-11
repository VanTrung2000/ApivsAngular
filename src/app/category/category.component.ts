import { Component, OnInit, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $:any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  public res: any;
  public listCategory: [];
  category:any={
    categoryId:0,
    categoryName:"Bong da"
  }
  isEdit: boolean=true;
  isDelete: boolean=true;


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get('https://localhost:44398/' + 'api/category/gets').subscribe(result => {
      this.res = result;
      this.listCategory =  this.res;
      console.log(this.listCategory);
    }, error => console.error(error));

  }
  opModal(isNew,index){
    if(isNew){
      this.isEdit=false;
      this.category={
        categoryId:0,
        categoryName:'',
      }
    }
    else{
      this.isEdit=true;
      this.category = index;
    }
    $('#mo').modal("show");
  }
  opModal1(isNew,index){
    if(isNew){
      this.isDelete=false;
      this.category={
        categoryId:0,
      }
    }
    else{
      this.isDelete=true;
      this.category = index;
    }
    $('#mo1').modal("show");
  }
  addCategory(){
    var x = this.category;
    this.http.post('https://localhost:44398/'+'api/category/create',x).subscribe(result => {
      var res:any = result;
      if(res.success){
      this.category = this.category.res;
      this.isEdit=true;
      }
      location.reload();
    }, error => console.error(error));

  }
  updateCategory(){
    var x = this.category;
    this.http.put('https://localhost:44398/' +'api/category/update',x).subscribe(result => {
      var res:any = result;
      if(res.success){
      this.category = this.category.res;
      this.isEdit=true;
      }
      location.reload();
    }, error => console.error(error));
  }
  deleteCategory(){
    this.http.delete('https://localhost:44398/' +'api/category/delete').subscribe(result => {
      var res:any = result;
      if(res.success){
      this.category = this.category.res;
      this.isDelete=true;
      }
      location.reload();
    }, error => console.error(error));
  }
  ngOnInit(){
  }

}

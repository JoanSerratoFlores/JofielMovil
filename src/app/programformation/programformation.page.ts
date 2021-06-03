import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { DataService } from '../services/data.services';
import { LevelService } from '../services/level.service';
import { ProgramService } from '../services/progra.formation.service';
import { UtilService } from '../utils/Util';

@Component({
  selector: 'app-programformation',
  templateUrl: './programformation.page.html',
  styleUrls: ['./programformation.page.scss'],
})
export class ProgramformationPage implements OnInit {

  public form: FormGroup
  public name: AbstractControl
  public description: AbstractControl
  public submitted = false
  public ctg: any
  public levels: any
  public send  = []
  public stc = false
  

  constructor( public dataService: DataService,
               public utilService: UtilService,
               private ctgService: CategoryService,
               private levelService: LevelService,
               private programService: ProgramService,
               private formBuilder: FormBuilder) 
               { 

                this.form = this.formBuilder.group({
                  name: ['', Validators.compose([Validators.required])],
                  description: ['', Validators.compose([Validators.required])]
                })
                this.name = this.form.controls.name
                this.description = this.form.controls.description

               }

  ngOnInit() { 

  }

  get f() {
    return this.form.controls
  }

  onSearch(event: any, opc: number){
    if(opc == 1)
    {
      this.ctgService.searchSena({ name: event.target.value }).subscribe((res: any) =>{
        this.ctg = res
      })
    }else{
      this.levelService.searchSena({ name: event.target.value }).subscribe((res: any) =>{
        this.levels = res
      })
    }
  }

  add(name: any, opc: number){
    if(opc == 1)
    {
      this.dataService.msg = name
      this.ctg.forEach(i => {
        if(i.name == name ){
          this.ctg.splice(i,1)
        }
      })
      this.stc = !this.stc
    }
    else
    {
      this.send.push({name: this.dataService.msg , level: name})
      this.levels.forEach(i => {
        if(i.name == name )
         this.levels.splice(i,1)
      })
      this.stc = !this.stc
    }
  }

  save(){
    if(this.send.length > 0)
    {
      this.programService.create(this.send).subscribe((res:any)=>{
        if(res.status){
          this.utilService.alertMsg("Gestión de Programas de formación","Registro",'programa registrado satisfactoriamente',"ios")
          this.utilService.closeModal()
          this.dataService.sendMessage('prgformacion')
        }
      })
    }
    else
     this.utilService.alertMsg("Gestión de Programas de Formación SENA","Registro",'por favor seleccinar categorias y novedades',"ios")
  }


}

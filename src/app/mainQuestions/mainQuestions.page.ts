import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config-service';
import { SkillService } from '../services/skill.service';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { UtilService } from '../utils/Util';
import { UploadPage } from '../upload/upload.page';
import { CategoryService } from '../services/category.service';
import { RoleService } from '../services/role.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './mainQuestions.page.html',
  styleUrls: ['./mainQuestions.page.scss'],
})
export class MainQuestionsPage implements OnInit {

  public submitted = false
  public frol: FormGroup
  public rolname: AbstractControl
  public desrole: AbstractControl

  public listModules: any
  public skc = 3
  public action = 0
  public skills : any
  public ctg : any
  public roles : any
  
  public skillsSearch: any
  public simport = false
  public willDownload = false

  constructor(
    private formBuilder: FormBuilder,
    private config: ConfigService,
    private skillService: SkillService,
    private categoryService: CategoryService,
    private roleService: RoleService,
    private utilService: UtilService,
    public alertController: AlertController) {

      this.frol = this.formBuilder.group({
        rolname: ['', Validators.compose([Validators.required])],
        desrole: ['', Validators.compose([Validators.required])]
      });
  
      this.rolname = this.frol.controls.rolname;
      this.desrole = this.frol.controls.desrole;
  }

  get f() {
    return this.frol.controls;
  }

  
  ngOnInit() {
    this.getListModules()
    this.getSkills()
    this.getCategory()
    this.getRols()
  }

  openModal(){
    this.utilService.showModalMsg("Cargue o suelte aquí su archivo","Cargar desde mi equipo", UploadPage)
  }

  getCategory()
  {
    this.categoryService.getAll().subscribe( (res:any)=>{
      console.log( res)
      res.forEach((i:any) => {
        i.created_at = moment(i.created_at).format('DD/MM/YYYY') 
        i.hour = moment(i.hour).format('HH:mm:ss') 
        i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
        i.description = i.description.charAt(0).toUpperCase() + i.description.slice(1)
        i.edit = false
      })
      this.ctg = res
    })
  }
  
  getRols()
  {
    this.roleService.getAll().subscribe( (res:any)=>{
      console.log( res )
      res.forEach((i:any) => {
        i.created_at = moment(i.created_at).format('DD/MM/YYYY') 
        i.hour = moment(i.hour).format('HH:mm:ss') 
        i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
        i.description = i.description.charAt(0).toUpperCase() + i.description.slice(1)
        i.edit = false
      })
      this.roles = res
    })
  }

  getListModules()
  {
    this.listModules = this.config.getConfig().modulos
  }

  call(menu: string){
    switch (menu) {
      case 'Gestión de Habilidades':
        this.skc = 3
       break;
       case 'Gestión de Categorias':
        this.skc = 5
       break;
       
       case 'Gestión de Roles':
        this.skc = 6
       break;

       case 'Gestión de Niveles':
        this.skc = 1
       break;
      
       case 'Gestión de Modalidades':
        this.skc = 2
       break;
       case 'Gestión de Centros de Formación':
        this.skc = 4
       break;
       
       
   
     default:
       break;
   }
  }

  import(){
    this.simport = !this.simport
  }

  getSkills()
  {
   this.skillService.getAll().subscribe( (res:any)=>{
     res.forEach((i:any) => {
       i.created_at = moment(i.created_at).format('DD/MM/YYYY') 
       i.hour = moment(i.hour).format('HH:mm:ss') 
       i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
       i.description = i.description.charAt(0).toUpperCase() + i.description.slice(1)
       i.edit = false
     })
     this.skills = res
   })
  }

  enable(item:any, type: number){
    switch(type){
      case 1:
        this.skills.forEach((i:any) => {
          if(item._id == i._id){
            i.enable = !i.enable
            this.skillService.enable({ _id: item._id, enable: i.enable }).subscribe((res:any)=>{
              if(res.status)
                this.utilService.alertMsg("Gestión de Habilidades","Activación",`Habilidad ${i.enable == true ? 'activada satisfactoriamente' : 'inactivada satisfactoriamente'} `,"ios")
            })
          }
       })  
      break;

      case 2:
        this.ctg.forEach((i:any) => {
          if(item._id == i._id){
            i.enable = !i.enable
            this.categoryService.enable({ _id: item._id, enable: i.enable }).subscribe((res:any)=>{
              if(res.status)
                this.utilService.alertMsg("Gestión de Categorias","Activación",`Categoria ${i.enable == true ? 'activada satisfactoriamente' : 'inactivada satisfactoriamente'} `,"ios")
            })
          }
       })  
      break;

      case 3:
        this.roles.forEach((i:any) => {
          if(item._id == i._id){
            i.enable = !i.enable
            this.roleService.enable({ _id: item._id, enable: i.enable }).subscribe((res:any)=>{
              if(res.status)
                this.utilService.alertMsg("Gestión de Roles","Activación",`Rol ${i.enable == true ? 'activada satisfactoriamente' : 'inactivado satisfactoriamente'} `,"ios")
            })
          }
       })  
      break;
    }
  }

  chageValue(event: any, item: any, opc : number, type: number){
    console.log("chageValue  type",   type )
    switch (type) {
      case 1:
        this.skills.forEach((i:any) => {
          if(item._id == i._id){
            if(opc == 1)
             i.name = event.target.value
            else
             i.description = event.target.value
          }
       })
     break;

     case 2:

      this.ctg.forEach((i:any) => {
        if(item._id == i._id){
          if(opc == 1)
           i.name = event.target.value
          else
           i.description = event.target.value
        }
     })
     break;

     case 3:
      this.roles.forEach((i:any) => {
        if(item._id == i._id){
          if(opc == 1)
           i.name = event.target.value
          else
           i.description = event.target.value
        }
     })
     break;
    }
 }

 onSearch(event: any, opc: number){
   switch (opc) {
     case 1:
      this.skillService.search({ name: event.target.value }).subscribe((res:any)=>{
        res.forEach((i:any) => {
         i.created_at = moment(i.created_at).format('DD/MM/YYYY') 
         i.hour = moment(i.hour).format('HH:mm:ss') 
         i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
         i.description = i.description.charAt(0).toUpperCase() + i.description.slice(1)
         i.edit = false
       })
       this.skills = res
     })
     break;

     case 2:
      this.categoryService.search({ name: event.target.value }).subscribe((res:any)=>{
        res.forEach((i:any) => {
         i.created_at = moment(i.created_at).format('DD/MM/YYYY') 
         i.hour = moment(i.hour).format('HH:mm:ss') 
         i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
         i.description = i.description.charAt(0).toUpperCase() + i.description.slice(1)
         i.edit = false
       })
       this.ctg = res
     })
     break;
   
   }
 }

 getSkillByID(_id: string){
   console.log( _id )
   this.skillService.getSkillByID({ _id: _id }).subscribe((res:any)=>{
    this.skills = res
   })
 }

 edit(item:any,type: number){
    console.log( type )
    switch (type) {
      case 1:
        this.skills.forEach((i:any) => {
          if(item._id == i._id){
            i.edit = !i.edit
            if(i.edit == false){
             this.confirm("ios", "¿Está seguro que desea Editar esta habilidad?", "", 2 , i)
            }
          }
       })
     break;

     case 2:
        this.ctg.forEach((i:any) => {
          if(item._id == i._id){
            i.edit = !i.edit
            if(i.edit == false){
             this.confirm("ios", "¿Está seguro que desea Editar esta categoria ?", "", 6 , i)
            }
          }
       })
     break;

     case 3:
      this.roles.forEach((i:any) => {
        if(item._id == i._id){
          i.edit = !i.edit
          if(i.edit == false){
           this.confirm("ios", "¿Está seguro que desea Editar este rol ?", "", 9 , i)
          }
        }
     })
   break;
    
     
    }
  }

  delete(_id:string, type?: number){
    switch (type) {
      case 1:
        this.confirm("ios", "¿Está seguro que desea Eliminar esta habilidad?", "", 1 , _id)
      break;

      case 2:
        this.confirm("ios", "¿Está seguro que desea Eliminar esta categoria?", "", 7, _id)
      break;
    }
    
  }

  
  async confirm(mode: any, title: any, message: any, action: number, data: any){
    const alert = await this.alertController.create({
      header: title,
      //cssClass: 'cnaction',
      message: message,
      mode: mode,
      buttons: [
        {
          text: 'Si',
          handler: () => {
            switch (action) {
              case 1:
                this.skillService.delete({ _id: data }).subscribe((res:any)=>{
                  if(res.status){
                    this.utilService.alertMsg("Gestión de Habilidades","Eliminación",'Habilidad Eliminada satisfactoriamente',"ios")
                    this.getSkills()
                  }
                })
              break;

              case 2:
                this.skillService.update(data).subscribe((res:any)=>{
                  if(res.status){
                    this.utilService.alertMsg("Gestión de Habilidades","Actualización",'habilidad actualizada satisfactoriamente',"ios")
                    this.getSkills()
                  }
                })
              break

              case 3:
                this.skillService.create(data).subscribe((res:any)=>{
                  if(res.status){
                    this.utilService.alertMsg("Gestión de Habilidades","Registro",'habilidad registrada satisfactoriamente',"ios")
                    this.getSkills()
                  }
                })
              break

              case 5:
                this.categoryService.create(data).subscribe((res:any)=>{
                  if(res.status){
                    this.utilService.alertMsg("Gestión de Categorias","Registro",'cateroria registrada satisfactoriamente',"ios")
                    this.getCategory()
                  }
                })
              break

              case 6:
                this.categoryService.update(data).subscribe((res:any)=>{
                  if(res.status){
                    this.utilService.alertMsg("Gestión de Categorias","Actualización",'Categoria actualizada satisfactoriamente',"ios")
                    this.getCategory()
                  }
                })
              break

              case 7:
                this.categoryService.delete({ _id: data }).subscribe((res:any)=>{
                  if(res.status){
                    this.utilService.alertMsg("Gestión de Categorias","Eliminación",'Categoria Eliminada satisfactoriamente',"ios")
                    this.getSkills()
                  }
                })
              break;

              case 8:
                this.roleService.create(data).subscribe((res:any)=>{
                  if(res.status){
                    this.utilService.alertMsg("Gestión de Roles","Registro",'role registrado satisfactoriamente',"ios")
                    this.frol.reset()
                    this.getRols()
                  }
                })
              break

              case 9:
                this.roleService.update(data).subscribe((res:any)=>{
                  if(res.status){
                    this.utilService.alertMsg("Gestión de Roles","Actualización",'rol actualizado satisfactoriamente',"ios")
                    this.getRols()
                  }
                })
              break
            }
          }
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present()
  }


  async addSkill() {
    const alert = await this.alertController.create({
      header: 'Registro de Habilidades',
      mode: 'ios',
      inputs: [
        {
          name: 'name',
          type: 'text',
          label: 'Habilidad',
          placeholder:'Habilidad'
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
          placeholder:'Descripción'
        }
      ],
      buttons: [
        {
          text: 'Si',
          handler: (data) => {
            this.confirm("ios","¿Está seguro que desea guardar esta habilidad?", "", 3, data)
          }
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }
      ]
    })
    await alert.present()
   }
 
   close(){
     this.skillsSearch = null
   }

   async addCtg() {
    const alert = await this.alertController.create({
      header: 'Registro de Categorias',
      mode: 'ios',
      inputs: [
        {
          name: 'name',
          type: 'text',
          label: 'Categoria',
          placeholder:'Categoria'
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
          placeholder:'Descripción'
        }
      ],
      buttons: [
        {
          text: 'Si',
          handler: (data) => {
            this.confirm("ios","¿Está seguro que desea guardar esta categorias ?", "", 5, data)
          }
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }
      ]
    })
    await alert.present()
   }


   async addRole() {
    this.submitted = true;
    if (this.frol.invalid) {
      return false
    }

    this.confirm("ios","¿Está seguro que desea agregar un nuevo  rol?", "", 8, this.frol.value)

   
   /* const alert = await this.alertController.create({
      header: 'Registro de Roles',
      mode: 'ios',
      inputs: [
        {
          name: 'name',
          type: 'text',
          label: 'Rol',
          placeholder:'Rol'
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
          placeholder:'Descripción'
        }
      ],
      buttons: [
        {
          text: 'Si',
          handler: (data) => {
            this.confirm("ios","¿Está seguro que desea agregar un nuevo  rol?", "", 8, data)
          }
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }
      ]
    })
    await alert.present()*/
   }
 
}

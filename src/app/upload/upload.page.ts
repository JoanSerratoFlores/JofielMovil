import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ConfigService } from '../services/config-service';
import { DataService } from '../services/data.services';
import { UtilService } from '../utils/Util';
import * as XLSX from 'xlsx';
import { SkillService } from '../services/skill.service';
import { CategoryService } from '../services/category.service';
import { ProgramService } from '../services/progra.formation.service';
import { KnowledgeService } from '../services/knowledge.service';
import { TechnologyService } from '../services/technology.service';
import { LanguageService } from '../services/language.service';
import { DocumentTypeService } from '../services/documentType.service';
import { OccupationService } from '../services/occupation.service';
import { CountryService } from '../services/country.service';
import { ProfessionService } from '../services/profession.service';
import { SectorService } from '../services/sector.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  public disabledCheck = false
  constructor(public navParams: NavParams,
    public utilService: UtilService,
    public dataService: DataService,
    private ctgService: CategoryService,
    private skillService: SkillService,
    private programService: ProgramService,
    private professionService: ProfessionService,
    private occupationService: OccupationService,
    private sectorService: SectorService,
    private countryService: CountryService,
    private languageService: LanguageService,
    private documentTypeService: DocumentTypeService,
    private knowledgeService: KnowledgeService,
    private technologyService: TechnologyService,
    public configuration: ConfigService) { }

  ngOnInit() {
    this.dataService.msg = this.navParams.get('msg');
    this.dataService.title = this.navParams.get('title');
  }

  onFileChange(event: any) {
    this.utilService.presentLoading()
    let workBook, jsonData = null
    const reader = new FileReader()
    const file = event.addedFiles[0]
    reader.onload = async (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' })
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet)
        return initial
      }, {})
      let keys = Object.values(jsonData)

      if (keys.length > 0) {

        switch (this.dataService.storage) {
          case 3:
            const resultS = await this.utilService.validatorXLXS(keys[0][0], 2)
            if (resultS) {
              this.skillService.createMultiple(keys[0]).subscribe(async (res: any) => {
                if (res.status) {
                  const result = await this.utilService.closeModal()
                  if (result) {
                    await this.dataService.sendMessage('skill')
                    this.utilService.hideLoading()
                  }
                }
              }, error => {
                this.utilService.hideLoading()
                this.utilService.alertMsg("Error", "Un error interno del servidor", "", "ios")
              })
            } else {
              this.utilService.hideLoading()
              this.utilService.alertMsg("Error", "El Excel debe contener los campos name y description", "", "ios")
            }
            break

          case 4:
            const resultK = await this.utilService.validatorXLXS(keys[0][0], 1)
            if (resultK) {
              this.knowledgeService.createMultiple(keys[0]).subscribe(async (res: any) => {
                if (res.status) {
                  const result = await this.utilService.closeModal()
                  if (result) {
                    await this.dataService.sendMessage('knowledge')
                    this.utilService.hideLoading()
                  }
                }
              },
                error => {
                  this.utilService.hideLoading()
                  this.utilService.alertMsg("Error", "Un error interno del servidor", "", "ios")
                })
            } else {
              this.utilService.hideLoading()
              this.utilService.alertMsg("Error", "El Excel debe contener los campos name", "", "ios")
            }
            break

          case 5:
            const resultC = await this.utilService.validatorXLXS(keys[0][0], 2)
            if (resultC) {
              this.ctgService.createMultiple(keys[0]).subscribe(async (res: any) => {
                if (res.status) {
                  const result = await this.utilService.closeModal()
                  if (result) {
                    await this.dataService.sendMessage('ctg')
                    this.utilService.hideLoading()
                  }
                }
              },
                error => {
                  this.utilService.hideLoading()
                  this.utilService.alertMsg("Error", "Un error interno del servidor", "", "ios")
                })
            } else {
              this.utilService.hideLoading()
              this.utilService.alertMsg("Error", "El Excel debe contener los campos name y description", "", "ios")
            }
            break

          case 8:
            const resultP = await this.utilService.validatorXLXS(keys[0][0], 2)
            if (resultP) {
              this.programService.createMultiple(keys[0]).subscribe(async (res: any) => {
                if (res.status) {
                  const result = await this.utilService.closeModal()
                  if (result) {
                    await this.dataService.sendMessage('prgformacion')
                    this.utilService.hideLoading()
                  }
                }
              },
                error => {
                  this.utilService.hideLoading()
                  this.utilService.alertMsg("Error", "Un error interno del servidor", "", "ios")
                })
            } else {
              this.utilService.hideLoading()
              this.utilService.alertMsg("Error", "El Excel debe contener los campos name y description", "", "ios")
            }
            break

          case 11:
            const resultT = await this.utilService.validatorXLXS(keys[0][0], 1)
            if (resultT) {
              this.technologyService.createMultiple(keys[0]).subscribe(async (res: any) => {
                if (res.status) {
                  const result = await this.utilService.closeModal()
                  if (result) {
                    await this.dataService.sendMessage('technology')
                    this.utilService.hideLoading()
                  }
                }
              },
                error => {
                  this.utilService.hideLoading()
                  this.utilService.alertMsg("Error", "Un error interno del servidor", "", "ios")
                })
            } else {
              this.utilService.hideLoading()
              this.utilService.alertMsg("Error", "El Excel debe contener los campos name", "", "ios")
            }
            break

          case 12:
            const resultL = await this.utilService.validatorXLXS(keys[0][0], 1)
            if (resultL) {
              this.languageService.createMultiple(keys[0]).subscribe(async (res: any) => {
                if (res.status) {
                  const result = await this.utilService.closeModal()
                  if (result) {
                    await this.dataService.sendMessage('language')
                    this.utilService.hideLoading()
                  }
                }
              },
                error => {
                  this.utilService.hideLoading()
                  this.utilService.alertMsg("Error", "Un error interno del servidor", "", "ios")
                })
            } else {
              this.utilService.hideLoading()
              this.utilService.alertMsg("Error", "El Excel debe contener los campos name", "", "ios")
            }
            break

          case 13:
            const resultD = await this.utilService.validatorXLXS(keys[0][0], 1)
            if (resultD) {
              this.documentTypeService.createMultiple(keys[0]).subscribe(async (res: any) => {
                if (res.status) {
                  const result = await this.utilService.closeModal()
                  if (result) {
                    await this.dataService.sendMessage('document')
                    this.utilService.hideLoading()
                  }
                }
              },
                error => {
                  this.utilService.hideLoading()
                  this.utilService.alertMsg("Error", "Un error interno del servidor", "", "ios")
                })
            } else {
              this.utilService.hideLoading()
              this.utilService.alertMsg("Error", "El Excel debe contener los campos name", "", "ios")
            }
            break

          case 14:
            const resultPr = await this.utilService.validatorXLXS(keys[0][0], 1)
            if (resultPr) {
              this.professionService.createMultiple(keys[0]).subscribe(async (res: any) => {
                if (res.status) {
                  const result = await this.utilService.closeModal()
                  if (result) {
                    await this.dataService.sendMessage('profession')
                    this.utilService.hideLoading()
                  }
                }
              },
                error => {
                  this.utilService.hideLoading()
                  this.utilService.alertMsg("Error", "Un error interno del servidor", "", "ios")
                })
            } else {
              this.utilService.hideLoading()
              this.utilService.alertMsg("Error", "El Excel debe contener los campos name", "", "ios")
            }
            break

          case 15:
            const resultO = await this.utilService.validatorXLXS(keys[0][0], 1)
            if (resultO) {
              this.occupationService.createMultiple(keys[0]).subscribe(async (res: any) => {
                if (res.status) {
                  const result = await this.utilService.closeModal()
                  if (result) {
                    await this.dataService.sendMessage('occupation')
                    this.utilService.hideLoading()
                  }
                }
              },
                error => {
                  this.utilService.hideLoading()
                  this.utilService.alertMsg("Error", "Un error interno del servidor", "", "ios")
                })
            } else {
              this.utilService.hideLoading()
              this.utilService.alertMsg("Error", "El Excel debe contener los campos name", "", "ios")
            }
            break

          case 16:
            const resultSe = await this.utilService.validatorXLXS(keys[0][0], 1)
            if (resultSe) {
              this.sectorService.createMultiple(keys[0]).subscribe(async (res: any) => {
                if (res.status) {
                  const result = await this.utilService.closeModal()
                  if (result) {
                    await this.dataService.sendMessage('sector')
                    this.utilService.hideLoading()
                  }
                }
              },
                error => {
                  this.utilService.hideLoading()
                  this.utilService.alertMsg("Error", "Un error interno del servidor", "", "ios")
                })
            } else {
              this.utilService.hideLoading()
              this.utilService.alertMsg("Error", "El Excel debe contener los campos name", "", "ios")
            }
            break

          case 17:
            const resultCo = await this.utilService.validatorXLXS(keys[0][0], 1)
            if (resultCo) {
              this.countryService.createMultiple(keys[0]).subscribe(async (res: any) => {
                if (res.status) {
                  const result = await this.utilService.closeModal()
                  if (result) {
                    await this.dataService.sendMessage('country')
                    this.utilService.hideLoading()
                  }
                }
              },
                error => {
                  this.utilService.hideLoading()
                  this.utilService.alertMsg("Error", "Un error interno del servidor", "", "ios")
                })
            } else {
              this.utilService.hideLoading()
              this.utilService.alertMsg("Error", "El Excel debe contener los campos name", "", "ios")
            }
            break
        }
      }
    }
    reader.readAsBinaryString(file)
  }


  onSelect(event: any) {
    console.log(event.addedFiles[0].size)
    /* if(event.addedFiles[0].size > 3000000)
     {
       this.utilService.notificationToast(
       this.configuration.getConfigMessage().alert.notice, 
       'The file must not exceed 3MB', "error")
     }
     else
     {
       this.loadingfile = true
       this.files.push(...event.addedFiles);
       const formData = new FormData();
       formData.set("idTaskFile", this.idtask);
       formData.set("file", this.files[0]);
       this.taskService.upload(formData).subscribe((res:any) => {
         if(res.status){
           this.webSockeService.upload(this.idtask)
           this.files = []
         }
       },error =>{
         this.loadingfile = false
         this.utilService.notificationToast(
           this.configuration.getConfigMessage().alert.notice, 
           this.configuration.getConfigMessage().alert.errorserver, "error")
       }) 
     }*/
  }


}

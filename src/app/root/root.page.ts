import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from '../services/config-service';
import { SkillService } from '../services/skill.service';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { UtilService } from '../utils/Util';
import { UploadPage } from '../upload/upload.page';
import { CategoryService } from '../services/category.service';
import { RoleService } from '../services/role.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.services';
import { UserService } from '../services/user.service';
import { LevelService } from '../services/level.service';
import { ProgramService } from '../services/progra.formation.service';
import { ProgramformationPage } from '../programformation/programformation.page';
import { IonReorderGroup } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { GranstService } from '../services/grants.service';
import { ModalPage } from '../modal/modal.page';
import { ModalProfilePage } from '../modal-profile/modal-profile.page';
import { UtilBackendService } from '../services/util.service';
import { ModalUserPage } from '../modal-user/modal-user.page';
import { ModalityService } from '../services/modality.service';
import { KnowledgeService } from '../services/knowledge.service';
import { TechnologyService } from '../services/technology.service';
import { DocumentTypeService } from '../services/documentType.service';
import { LanguageService } from '../services/language.service';
import { CountryService } from '../services/country.service';
import { SectorService } from '../services/sector.service';
import { OccupationService } from '../services/occupation.service';
import { ProfessionService } from '../services/profession.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.page.html',
  styleUrls: ['./root.page.scss'],
})
export class RootPage implements OnInit {

  public subs = new Subscription();

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  public p: number = 1
  public pct: number = 1
  public prl: number = 1
  public submitted = false
  public frol: FormGroup
  public rolname: AbstractControl
  public desrole: AbstractControl

  public flevel: FormGroup
  public name: AbstractControl
  public query: AbstractControl

  public dataFilter: any
  public listModules: any
  public skc = 3
  public action = 0
  public skills: any
  public ctg: any
  public roles: any
  public profiles: any
  public pgformations: any
  public levels: any
  public technology: any
  public modalities: any
  public user: any
  public knowledge: any
  public documentType: any
  public professions: any
  public occupations: any
  public sectors: any
  public countries: any
  public language: any
  public storage = []
  public rolesUser: any
  public newGrants = []

  public skillsSearch: any
  public simport = false
  public willDownload = false
  public options = false
  public grants = true
  public status = true
  public rol: string
  public dataEdit: any

  public fmodality: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    public config: ConfigService,
    public dataService: DataService,
    private skillService: SkillService,
    private categoryService: CategoryService,
    private roleService: RoleService,
    private levelService: LevelService,
    private userService: UserService,
    private programService: ProgramService,
    private utilService: UtilService,
    private granstService: GranstService,
    private modalityService: ModalityService,
    private professionService: ProfessionService,
    private occupationService: OccupationService,
    private sectorService: SectorService,
    private countryService: CountryService,
    private languageService: LanguageService,
    private documentTypeService: DocumentTypeService,
    private knowledgeService: KnowledgeService,
    private technologyService: TechnologyService,
    private utilBackendService: UtilBackendService,
    public alertController: AlertController) {

    this.frol = this.formBuilder.group({
      rolname: ['', Validators.compose([Validators.required])],
      desrole: ['', Validators.compose([Validators.required])]
    })
    this.rolname = this.frol.controls.rolname
    this.desrole = this.frol.controls.desrole

    this.flevel = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      query: ['',]
    })
    this.name = this.flevel.controls.name
    this.query = this.flevel.controls.query

    this.fmodality = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      query: ''
    })
    this.name = this.fmodality.controls.name
    this.query = this.fmodality.controls.query
  }


  ngOnInit() {
    if (sessionStorage.getItem('username') != null)
      this.dataService.storageUser = sessionStorage.getItem('username')
    else
      this.dataService.storageUser = ""

    this.getListModules()
    this.getSkills()
    this.getCategory()
    this.getRols()
    this.getUser()
    this.getLevels()
    this.getModalities()
    this.getPrograms()
    this.getKnownledge()
    this.getTechnology()
    this.getLanguages()
    this.getDocumentTypes()
    this.getProfessions()
    this.getOccupations()
    this.getSectors()
    this.getCountries()
    this.dataService.currentMessage.subscribe((res: any) => {
      switch (res) {
        case 'skill':
          this.getSkills(1)
          break
        case 'ctg':
          this.getCategory(1)
          break;
        case 'prgformacion':
          this.getPrograms(1)
          break;
        case 'knowledge':
          this.getKnownledge(1)
          break
        case 'technology':
          this.getTechnology(1)
          break
        case 'language':
          this.getLanguages(1)
          break
        case 'document':
          this.getDocumentTypes(1)
          break
        case 'profession':
          this.getProfessions(1)
          break
        case 'occupation':
          this.getOccupations(1)
          break
        case 'sector':
          this.getSectors(1)
          break
        case 'country':
          this.getCountries(1)
          break
      }
    })
  }

  get f() {
    return this.frol.controls
  }

  get fl() {
    return this.flevel.controls
  }

  get fm() {
    return this.fmodality.controls
  }

  detail(item: any, type: number) {
    this.dataService.storage = item
    switch (type) {
      case 1:
        item.title = 'DE LA HABILIDAD'
        this.redirectPageModal(1, item.title)
        break;

      case 2:
        item.title = 'DE LA CATEGORÍA'
        this.redirectPageModal(1, item.title)
        break;

      case 3:
        item.title = 'DEL ROL'
        this.redirectPageModal(1, item.title)
        break;

      case 4:
        item.title = 'DEL USUARIO'
        this.redirectPageModal(2, item.title)
        break;

      case 5:
        item.title = 'DEL PROGRAMA DE FORMACIÓN'
        this.redirectPageModal(1, item.title)
        break;

      case 6:
        item.title = 'DEL NIVEL'
        this.redirectPageModal(1, item.title)
        break;

      case 7:
        item.title = 'DE LA MODALIDAD'
        this.redirectPageModal(1, item.title)
        break;

      case 8:
        item.title = 'DE LA RED DE CONOCIMIENTO'
        this.redirectPageModal(1, item.title)
        break;

      case 9:
        item.title = 'DE LA TECNOLOGÍA INFORMÁTICA'
        this.redirectPageModal(1, item.title)
        break;

      case 10:
        item.title = 'DEL IDIOMA'
        this.redirectPageModal(1, item.title)
        break;

      case 11:
        item.title = 'DEL TIPO DE DOCUMENTO'
        this.redirectPageModal(1, item.title)
        break;

      case 12:
        item.title = 'DE LA PROFESIÓN'
        this.redirectPageModal(1, item.title)
        break;

      case 13:
        item.title = 'DE LA OCUPACIÓN'
        this.redirectPageModal(1, item.title)
        break;

      case 14:
        item.title = 'DEL SECTOR'
        this.redirectPageModal(1, item.title)
        break;

      case 15:
        item.title = 'DEL PAÍS'
        this.redirectPageModal(1, item.title)
        break;

    }

  }

  redirectPageModal(opc: number, title: string) {
    if (opc == 1)
      this.utilService.showModalMsg(`Información ${title}`, "", ModalPage)
    else
      this.utilService.showModalMsg(`Información ${title}`, "", ModalUserPage)
  }

  sortTable(item: any, type: number, crud: number) {
    switch (crud) {
      case 1:
        this.config.getConfig().skillColunms.forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('k', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('k', 1)
            }
          }
        });
        break;

      case 2:
        this.config.getConfig().ctgColunms.forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('c', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('c', 1)
            }
          }
        });
        break;

      case 3:
        this.config.getConfig().rolesColunms.forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('r', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('r', 1)
            }
          }
        });
        break;

      case 4:
        this.config.getConfig().profilColunms.forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('u', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('u', 1)
            }
          }
        });
        break;

      case 5:
        this.config.getConfig().programColunms.forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('p', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('p', 1)
            }
          }
        });
        break;

      case 6:
        this.config.getConfig().levelsColunms.forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('l', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('l', 1)
            }
          }
        });
        break;

      case 7:
        this.config.getConfig().modalitiesColunms.forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('2', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('2', 1)
            }
          }
        });
        break;

      case 8:
        this.config.getConfig().knowledgeColunms.forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('3', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('3', 1)
            }
          }
        });
        break;

      case 9:
        this.config.getConfig().technologyColunms.forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('4', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('4', 1)
            }
          }
        });
        break;

      case 10:
        this.config.getConfig().languageColunms.forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('5', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('5', 1)
            }
          }
        });
        break;

      case 11:
        this.config.getConfig().documentTypeColunms.forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('6', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('6', 1)
            }
          }
        });
        break;

      case 12:
        this.config.getConfig().professionColunms.forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('7', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('7', 1)
            }
          }
        });
        break;

      case 13:
        this.config.getConfig().occupationColunms.forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('8', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('8', 1)
            }
          }
        });
        break;

      case 14:
        this.config.getConfig().sectorColunms.forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('9', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('9', 1)
            }
          }
        });
        break;

      case 15:
        this.config.getConfig()['countryColunms'].forEach(i => {
          i.up = false
          i.down = false
          if (i.name == item.name) {
            if (type == 1) {
              i.up = !i.up
              i.down = false
              this.descOrAsc('10', -1)
            }
            else {
              i.up = false
              i.down = !i.down
              this.descOrAsc('10', 1)
            }
          }
        });
        break;

    }
  }

  descOrAsc(collection: string, type: any) {
    this.utilBackendService.sort({ letter: collection, type: type }).subscribe((res: any) => {
      switch (collection) {
        case 'k':
          res.forEach((i: any) => {
            i.created_at = moment(i.created_at).format('DD/MM/YYYY')
            i.hour = moment(i.hour).format('HH:mm:ss')
            i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
            i.description = i.description.charAt(0).toUpperCase() + i.description.slice(1)
            i.edit = false
          })
          this.skills = res
          break;

        case 'c':
          res.forEach((i: any) => {
            i.created_at = moment(i.created_at).format('DD/MM/YYYY')
            i.hour = moment(i.hour).format('HH:mm:ss')
            i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
            i.description = i.description.charAt(0).toUpperCase() + i.description.slice(1)
            i.edit = false
          })
          this.ctg = res
          break;

        case 'l':
          res.forEach((i: any) => {
            i.created_at = moment(i.created_at).format('DD/MM/YYYY')
            i.hour = moment(i.hour).format('HH:mm:ss')
            i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
            i.edit = false
          })
          this.levels = res
          break;

        case 'u':
          res.forEach((i: any) => {
            i.edit = false
          })
          this.user = res
          break;

        case 'r':
          res.forEach((i: any) => {
            i.created_at = moment(i.created_at).format('DD/MM/YYYY')
            i.hour = moment(i.hour).format('HH:mm:ss')
            i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
            i.description = i.description.charAt(0).toUpperCase() + i.description.slice(1)
            i.edit = false
          })
          this.roles = res
          break;

        case 'p':
          res.forEach((i: any) => {
            i.created_at = moment(i.created_at).format('DD/MM/YYYY')
            i.hour = moment(i.hour).format('HH:mm:ss')
            i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
            i.description = i.description.charAt(0).toUpperCase() + i.description.slice(1)
            i.edit = false
          })
          this.pgformations = res
          break;

        case '2':
          res.forEach((i: any) => {
            i.created_at = moment(i.created_at).format('DD/MM/YYYY')
            i.hour = moment(i.hour).format('HH:mm:ss')
            i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
            i.edit = false
          })
          this.modalities = res
          break;

        case '3':
          res.forEach((i: any) => {
            i.created_at = moment(i.created_at).format('DD/MM/YYYY')
            i.hour = moment(i.hour).format('HH:mm:ss')
            i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
            i.edit = false
          })
          this.knowledge = res
          break;

        case '4':
          res.forEach((i: any) => {
            i.created_at = moment(i.created_at).format('DD/MM/YYYY')
            i.hour = moment(i.hour).format('HH:mm:ss')
            i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
            i.edit = false
          })
          this.technology = res
          break;

        case '5':
          res.forEach((i: any) => {
            i.created_at = moment(i.created_at).format('DD/MM/YYYY')
            i.hour = moment(i.hour).format('HH:mm:ss')
            i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
            i.edit = false
          })
          this.language = res
          break;

        case '6':
          res.forEach((i: any) => {
            i.created_at = moment(i.created_at).format('DD/MM/YYYY')
            i.hour = moment(i.hour).format('HH:mm:ss')
            i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
            i.edit = false
          })
          this.documentType = res
          break;

        case '7':
          res.forEach((i: any) => {
            i.created_at = moment(i.created_at).format('DD/MM/YYYY')
            i.hour = moment(i.hour).format('HH:mm:ss')
            i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
            i.edit = false
          })
          this.professions = res
          break;

        case '8':
          res.forEach((i: any) => {
            i.created_at = moment(i.created_at).format('DD/MM/YYYY')
            i.hour = moment(i.hour).format('HH:mm:ss')
            i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
            i.edit = false
          })
          this.occupations = res
          break;

        case '9':
          res.forEach((i: any) => {
            i.created_at = moment(i.created_at).format('DD/MM/YYYY')
            i.hour = moment(i.hour).format('HH:mm:ss')
            i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
            i.edit = false
          })
          this.sectors = res
          break;

        case '10':
          res.forEach((i: any) => {
            i.created_at = moment(i.created_at).format('DD/MM/YYYY')
            i.hour = moment(i.hour).format('HH:mm:ss')
            i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
            i.edit = false
          })
          this.countries = res
          break;
      }
    })
  }

  actionOP(name: string) {
    switch (name) {
      case 'Perfil':
        break;
      case 'Cerrar':
        this.utilService.closeSesion()
        break;
    }
  }

  showOp() {
    this.options = !this.options
  }

  addGrants(item: any) {
    this.rol = item.name
    this.getGrantsByRol(item.name)
    this.roles.forEach(i => {
      i.mod = false
      if (i._id == item._id)
        i.mod = true
    })
  }


  getGrantsByRol(rol: string) {
    this.granstService.get(rol).subscribe((res: any) => {
      if (res.length > 0) {
        for (let i = 0; i < res.length; i++) {
          for (let j = 0; j < this.config.getConfig().modulos.length; j++) {
            if (res[i].module == this.config.getConfig().modulos[j].id) {
              this.config.getConfig().modulos[j].mod = true
            }
          }
        }
      }
      else {
        for (let j = 0; j < this.config.getConfig().modulos.length; j++) {
          this.config.getConfig().modulos[j].mod = false
        }
      }
    })
  }

  addModules(item: any) {
    this.config.getConfig().modulos.forEach(i => {
      if (i.id == item.id) {
        i.mod = !i.mod
        item.mod = i.mod
      }
    })

    this.granstService.create({ rol: this.rol, grant: item }).subscribe((res: any) => {
    })
  }

  setGranst() {
    this.grants = !this.grants
  }

  updateGrants() {
    let dataSend = []
    this.roles.forEach(i => {
      if (i.mod == true)
        dataSend.push({ rol: i.name })
    })

    this.config.getConfig().modulos.forEach(i => {
      if (i.mod == true)
        dataSend.push(i)
    })

    dataSend.push({ doc: this.dataService.storage })
    this.granstService.create(dataSend).subscribe((res: any) => {
      if (res.status) {
        this.setModules()
        dataSend = []
        this.utilService.alertMsg("Gestión de Permisos", "", 'registrados satisfactoriamente', "ios")
      }
    })
  }

  setModules() {
    this.roles.forEach(i => {
      i.mod == false
    })
    this.config.getConfig().modulos.forEach(j => {
      j.mod == false
    })
  }


  openModal(opc: number) {
    this.dataService.storage = opc
    this.utilService.showModalMsg("Cargue o suelte aquí su archivo", "Cargar desde mi equipo", UploadPage)
  }

  getCategory(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.categoryService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.created_at = moment(i.created_at).format('DD/MM/YYYY')
          i.hour = moment(i.hour).format('HH:mm:ss')
          //i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
          i.description = i.description.charAt(0).toUpperCase() + i.description.slice(1)
          i.edit = false
        })
        this.ctg = res
      }
      this.utilService.hideLoading()
    })
  }

  getKnownledge(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.knowledgeService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.created_at = moment(i.created_at).format('DD/MM/YYYY')
          i.hour = moment(i.hour).format('HH:mm:ss')
          i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
          i.edit = false
        })
        this.knowledge = res
      }
      this.utilService.hideLoading()
    })
  }

  getTechnology(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.technologyService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.created_at = moment(i.created_at).format('DD/MM/YYYY')
          i.hour = moment(i.hour).format('HH:mm:ss')
          i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
          i.edit = false
        })
        this.technology = res
      }
      this.utilService.hideLoading()
    })
  }

  getProfessions(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.professionService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.created_at = moment(i.created_at).format('DD/MM/YYYY')
          i.hour = moment(i.hour).format('HH:mm:ss')
          i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
          i.edit = false
        })
        this.professions = res
      }
      this.utilService.hideLoading()
    })
  }

  getOccupations(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.occupationService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.created_at = moment(i.created_at).format('DD/MM/YYYY')
          i.hour = moment(i.hour).format('HH:mm:ss')
          i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
          i.edit = false
        })
        this.occupations = res
      }
      this.utilService.hideLoading()
    })
  }

  getSectors(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.sectorService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.created_at = moment(i.created_at).format('DD/MM/YYYY')
          i.hour = moment(i.hour).format('HH:mm:ss')
          i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
          i.edit = false
        })
        this.sectors = res
      }
      this.utilService.hideLoading()
    })
  }

  getCountries(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.countryService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.created_at = moment(i.created_at).format('DD/MM/YYYY')
          i.hour = moment(i.hour).format('HH:mm:ss')
          i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
          i.edit = false
        })
        this.countries = res
      }
      this.utilService.hideLoading()
    })
  }

  getLanguages(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.languageService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.created_at = moment(i.created_at).format('DD/MM/YYYY')
          i.hour = moment(i.hour).format('HH:mm:ss')
          i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
          i.edit = false
        })
        this.language = res
      }
      this.utilService.hideLoading()
    })
  }

  getSkills(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.skillService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.created_at = moment(i.created_at).format('DD/MM/YYYY')
          i.hour = moment(i.hour).format('HH:mm:ss')
          if (i.name) i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
          if (i.description) i.description = i.description.charAt(0).toUpperCase() + i.description.slice(1)
          i.edit = false
        })
        this.skills = res
      }
      this.utilService.hideLoading()
    })
  }

  getDocumentTypes(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.documentTypeService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.created_at = moment(i.created_at).format('DD/MM/YYYY')
          i.hour = moment(i.hour).format('HH:mm:ss')
          if (i.name) i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
          i.edit = false
        })
        this.documentType = res
      }
      this.utilService.hideLoading()
    })
  }

  getUser(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.userService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.edit = false
        })
        this.user = res
      }
      this.utilService.hideLoading()
    })
  }

  getRolByUser(item: any) {
    this.dataService.message = item.username
    this.dataService.storage = this.roles
    this.dataService.storageUser = item.doc
    this.dataService.anyStringData = null
    this.renew()
    this.userService.getRolByUser(item.doc).subscribe((res: any) => {
      if (res.length > 0) {
        this.dataService.anyStringData = res
        this.utilService.showModalMsg("Gestión de Perfiles", "", ModalProfilePage, 'modalMsgPR')
      }
      else {
        this.dataService.anyStringData = null
        this.utilService.showModalMsg("Gestión de Perfiles", "", ModalProfilePage, 'modalMsgPR')
      }
    })
  }

  clearForm(type: number) {
    switch (type) {
      case 1:
        this.frol.reset()
        break;
    }
  }

  renew() {
    this.dataService.storage.forEach(i => {
      i.check = false
    })
  }

  getLevels(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.levelService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.created_at = moment(i.created_at).format('DD/MM/YYYY')
          i.hour = moment(i.hour).format('HH:mm:ss')
          //i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
          i.edit = false
        })
        this.levels = res
      }
      this.utilService.hideLoading()
    })
  }

  getModalities(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.modalityService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.created_at = moment(i.created_at).format('DD/MM/YYYY')
          i.hour = moment(i.hour).format('HH:mm:ss')
          i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
          i.edit = false
        })
        this.modalities = res
      }
      this.utilService.hideLoading()
    })
  }

  getPrograms(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.programService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.created_at = moment(i.created_at).format('DD/MM/YYYY')
          i.hour = moment(i.hour).format('HH:mm:ss')
          i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
          i.description = i.description.charAt(0).toUpperCase() + i.description.slice(1)
          i.edit = false
        })
        this.pgformations = res
      }
      this.utilService.hideLoading()
    })
  }

  getRols(opc?: number) {
    if (opc == 1)
      this.utilService.presentLoading()

    this.roleService.getAll().subscribe((res: any) => {
      if (res.length > 0) {
        res.forEach((i: any) => {
          i.created_at = moment(i.created_at).format('DD/MM/YYYY')
          i.hour = moment(i.hour).format('HH:mm:ss')
          i.name = i.name.charAt(0).toUpperCase() + i.name.slice(1)
          i.description = i.description.charAt(0).toUpperCase() + i.description.slice(1)
          i.edit = false
          i.mod = false
          i.check = false
        })
        this.roles = res
      }
      this.utilService.hideLoading()
    })
  }

  getListModules() {
    this.listModules = this.config.getConfig().modulos
  }

  call(menu: number) {
    this.simport = false
    this.skc = menu
  }

  import() {
    this.simport = !this.simport
  }

  async enable(item: any, type: number) {
    const alert = await this.alertController.create({
      header: "Activar Registro",
      message: "¿Está seguro de modificar registro?",
      mode: "ios",
      buttons: [
        {
          text: 'Si',
          handler: () => {
            switch (type) {
              case 1:
                this.skills.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.skillService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Habilidades", "Activación", `Habilidad ${i.enable == true ? 'activada satisfactoriamente' : 'inactivada satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;

              case 2:
                this.ctg.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.categoryService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Categorias", "Activación", `Categoria ${i.enable == true ? 'activada satisfactoriamente' : 'inactivada satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;

              case 3:
                this.roles.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.roleService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Roles", "Activación", `Rol ${i.enable == true ? 'activada satisfactoriamente' : 'inactivado satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;

              case 4:
                this.levels.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.levelService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Niveles", "Activación", `Nivel ${i.enable == true ? 'activado satisfactoriamente' : 'inactivado satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;

              case 5:
                this.pgformations.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.programService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Programas de Formación", "Activación", `Programa ${i.enable == true ? 'activado satisfactoriamente' : 'inactivado satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;

              case 6:
                this.user.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.userService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Usuarios", "Activación", `Usuario ${i.enable == true ? 'activado satisfactoriamente' : 'inactivado satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;

              case 7:
                this.modalities.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.modalityService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Modalidades", "Activación", `Modalidad ${i.enable == true ? 'activado satisfactoriamente' : 'inactivado satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;

              case 8:
                this.knowledge.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.knowledgeService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Redes de conocimiento", "Activación", `Red de conocimiento ${i.enable == true ? 'activada satisfactoriamente' : 'inactivada satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;

              case 9:
                this.technology.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.technologyService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Tecnologías informáticas", "Activación", `Tecnología informátuca ${i.enable == true ? 'activada satisfactoriamente' : 'inactivada satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;

              case 10:
                this.language.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.languageService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Idiomas", "Activación", `Idioma ${i.enable == true ? 'activada satisfactoriamente' : 'inactivada satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;

              case 11:
                this.documentType.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.documentTypeService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Tipos de documento", "Activación", `Tipo de documento ${i.enable == true ? 'activada satisfactoriamente' : 'inactivada satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;

              case 12:
                this.professions.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.professionService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Profesiones", "Activación", `Profesión ${i.enable == true ? 'activada satisfactoriamente' : 'inactivada satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;

              case 13:
                this.occupations.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.occupationService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Occupaciones", "Activación", `Ocupación ${i.enable == true ? 'activada satisfactoriamente' : 'inactivada satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;

              case 14:
                this.sectors.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.sectorService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Sectores", "Activación", `Sector ${i.enable == true ? 'activada satisfactoriamente' : 'inactivada satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;

              case 15:
                this.countries.forEach((i: any) => {
                  if (item._id == i._id) {
                    i.enable = !i.enable
                    this.countryService.enable({ _id: item._id, enable: i.enable }).subscribe((res: any) => {
                      if (res.status)
                        this.utilService.alertMsg("Gestión de Paises", "Activación", `País ${i.enable == true ? 'activada satisfactoriamente' : 'inactivada satisfactoriamente'} `, "ios")
                    })
                  }
                })
                break;
            }
          }
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        }
      ]
    })

    await alert.present()
  }

  chageValue(event: any, item: any, opc: number, type: number) {
    switch (type) {
      case 1:
        this.skills.forEach((i: any) => {
          if (item._id == i._id) {
            if (opc == 1)
              i.name = event.target.value
            else
              i.description = event.target.value
          }
        })
        break;

      case 2:

        this.ctg.forEach((i: any) => {
          if (item._id == i._id) {
            if (opc == 1)
              i.name = event.target.value
            else
              i.description = event.target.value
          }
        })
        break;

      case 3:
        this.roles.forEach((i: any) => {
          if (item._id == i._id) {
            if (opc == 1)
              i.name = event.target.value
            else
              i.description = event.target.value
          }
        })
        break;

      case 4:
        this.user.forEach((i: any) => {
          if (item._id == i._id) {
            switch (opc) {
              case 1:
                i.username = event.target.value
                break;

              case 2:
                i.doc = event.target.value
                break;

              case 3:
                i.firstname = event.target.value
                break;

              case 4:
                i.lastname = event.target.value
                break;

              case 5:
                i.email = event.target.value
                break;
            }
          }
        })
        break;

      case 5:
        this.levels.forEach((i: any) => {
          if (item._id == i._id) {
            if (opc == 1)
              i.name = event.target.value
          }
        })
        break;

      case 6:
        this.modalities.forEach((i: any) => {
          if (item._id == i._id) {
            if (opc == 1)
              i.name = event.target.value
          }
        })
        break;

      case 7:
        this.knowledge.forEach((i: any) => {
          if (item._id == i._id) {
            if (opc == 1)
              i.name = event.target.value
          }
        })
        break;

      case 8:
        this.technology.forEach((i: any) => {
          if (item._id == i._id) {
            if (opc == 1)
              i.name = event.target.value
          }
        })
        break;

      case 9:
        this.language.forEach((i: any) => {
          if (item._id == i._id) {
            if (opc == 1)
              i.name = event.target.value
          }
        })
        break;

      case 10:
        this.documentType.forEach((i: any) => {
          if (item._id == i._id) {
            if (opc == 1)
              i.name = event.target.value
          }
        })
        break;

      case 11:
        this.professions.forEach((i: any) => {
          if (item._id == i._id) {
            if (opc == 1)
              i.name = event.target.value
          }
        })
        break;

      case 12:
        this.occupations.forEach((i: any) => {
          if (item._id == i._id) {
            if (opc == 1)
              i.name = event.target.value
          }
        })
        break;

      case 13:
        this.sectors.forEach((i: any) => {
          if (item._id == i._id) {
            if (opc == 1)
              i.name = event.target.value
          }
        })
        break;

      case 14:
        this.countries.forEach((i: any) => {
          if (item._id == i._id) {
            if (opc == 1)
              i.name = event.target.value
          }
        })
        break;
    }
  }

  onFocus(event: any, opc: number) {
    if (!event.target.value) {
      switch (opc) {
        case 1:
          this.dataFilter = this.skills
          break

        case 2:
          this.dataFilter = this.ctg
          break

        case 3:
          this.dataFilter = this.user
          break

        case 4:
          this.dataFilter = this.user
          break

        case 5:
          this.dataFilter = this.levels
          break

        case 6:
          this.dataFilter = this.pgformations
          break

        case 7:
          this.dataFilter = this.roles
          break

        case 8:
          this.dataFilter = this.modalities
          break

        case 9:
          this.dataFilter = this.knowledge
          break

        case 10:
          this.dataFilter = this.technology
          break

        case 11:
          this.dataFilter = this.language
          break

        case 12:
          this.dataFilter = this.documentType
          break

        case 13:
          this.dataFilter = this.professions
          break

        case 14:
          this.dataFilter = this.occupations
          break

        case 15:
          this.dataFilter = this.sectors
          break

        case 16:
          this.dataFilter = this.countries
          break
      }
    }

  }

  onSearch(event: any, opc: number) {
    switch (opc) {
      case 1:
        this.skills = this.dataFilter.filter((item: any) => item.name.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break;

      case 2:
        this.ctg = this.dataFilter.filter((item: any) => item.name.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break;

      case 3:
        this.user = this.dataFilter.filter((item: any) => item.doc.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break

      case 4:
        this.user = this.dataFilter.filter((item: any) => item.firstname.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break;

      case 5:
        this.levels = this.dataFilter.filter((item: any) => item.name.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break;

      case 6:
        this.pgformations = this.dataFilter.filter((item: any) => item.name.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break;

      case 7:
        this.roles = this.dataFilter.filter((item: any) => item.name.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break;

      case 8:
        this.modalities = this.dataFilter.filter((item: any) => item.name.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break;

      case 9:
        this.knowledge = this.dataFilter.filter((item: any) => item.name.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break;

      case 10:
        this.technology = this.dataFilter.filter((item: any) => item.name.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break;

      case 11:
        this.language = this.dataFilter.filter((item: any) => item.name.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break;

      case 12:
        this.documentType = this.dataFilter.filter((item: any) => item.name.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break;

      case 13:
        this.professions = this.dataFilter.filter((item: any) => item.name.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break

      case 14:
        this.occupations = this.dataFilter.filter((item: any) => item.name.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break;

      case 15:
        this.sectors = this.dataFilter.filter((item: any) => item.name.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break;

      case 16:
        this.countries = this.dataFilter.filter((item: any) => item.name.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
        break;
    }
  }

  getProfiles(event: any) {
    if (this.dataService.storageUser != null) {
      this.storage.push(event)
      this.roles.forEach(i => {
        if (i.name == event) {
          i.check = true
        }
      })


    }
    else
      this.utilService.alertMsg("Aviso", "Por favor seleccionar un usuario", '', "ios")
  }

  getSkillByID(_id: string) {
    this.skillService.getSkillByID({ _id: _id }).subscribe((res: any) => {
      this.skills = res
    })
  }

  edit(item: any, type: number) {
    switch (type) {
      case 1:
        this.skills.forEach(async (i: any) => {
          if (item._id == i._id) {
            if (i.edit == false) this.editData(i, 1)
            i.edit = !i.edit
            if (i.edit == false) {
              const result = await this.confirm("ios", "¿Está seguro que desea Editar esta habilidad?", "", 2, i)
              if (result.role == 'cancel') {
                item.name = this.dataEdit.name
                item.description = this.dataEdit.description
              }
            }
          }
        })
        break;

      case 2:
        this.ctg.forEach(async (i: any) => {
          if (item._id == i._id) {
            if (i.edit == false) this.editData(i, 1)
            i.edit = !i.edit
            if (i.edit == false) {
              const result = await this.confirm("ios", "¿Está seguro que desea Editar esta categoria?", "", 6, i)
              if (result.role == 'cancel') {
                item.name = this.dataEdit.name
                item.description = this.dataEdit.description
              }
            }
          }
        })
        break;

      case 3:
        this.roles.forEach(async (i: any) => {
          if (item._id == i._id) {
            if (i.edit == false) this.editData(i, 1)
            i.edit = !i.edit
            if (i.edit == false) {
              const result = await this.confirm("ios", "¿Está seguro que desea Editar este rol ?", "", 9, i)
              if (result.role == 'cancel') {
                item.name = this.dataEdit.name
                item.description = this.dataEdit.description
              }
            }
          }
        })
        break;

      case 4:
        this.dataService.storageUser = item
        this.user.forEach(async (i: any) => {
          if (item._id == i._id) {
            i.edit = !i.edit
            if (i.edit == false) {
              this.confirm("ios", "¿Está seguro que desea Editar usuario ?", "", 11, i)
            }
          }
        })
        break;

      case 5:
        this.levels.forEach(async (i: any) => {
          if (item._id == i._id) {
            if (i.edit == false) this.editData(i, 2)
            i.edit = !i.edit
            if (i.edit == false) {
              const result = await this.confirm("ios", "¿Está seguro que desea Editar nivel ?", "", 13, i)
              if (result.role == 'cancel') item.name = this.dataEdit.name
            }
          }
        })
        break;

      case 6:
        this.pgformations.forEach(async (i: any) => {
          if (item._id == i._id) {
            if (i.edit == false) this.editData(i, 1)
            i.edit = !i.edit
            if (i.edit == false) {
              const result = await this.confirm("ios", "¿Está seguro que desea Editar progrma de formación ?", "", 14, i)
              if (result.role == 'cancel') {
                item.name = this.dataEdit.name
                item.description = this.dataEdit.description
              }
            }
          }
        })
        break;

      case 7:
        this.modalities.forEach(async (i: any) => {
          if (item._id == i._id) {
            if (i.edit == false) this.editData(i, 2)
            i.edit = !i.edit
            if (i.edit == false) {
              const result = await this.confirm("ios", "¿Está seguro que desea editar modalidad?", "", 16, i)
              if (result.role == 'cancel') item.name = this.dataEdit.name
            }
          }
        })
        break;

      case 8:
        this.knowledge.forEach(async (i: any) => {
          if (item._id == i._id) {
            if (i.edit == false) this.editData(i, 2)
            i.edit = !i.edit
            if (i.edit == false) {
              const result = await this.confirm("ios", "¿Está seguro que desea Editar esta red de conocimiento?", "", 18, i)
              if (result.role == 'cancel') item.name = this.dataEdit.name
            }
          }
        })
        break;

      case 9:
        this.technology.forEach(async (i: any) => {
          if (item._id == i._id) {
            if (i.edit == false) this.editData(i, 2)
            i.edit = !i.edit
            if (i.edit == false) {
              const result = await this.confirm("ios", "¿Está seguro que desea Editar esta tecnología informática?", "", 21, i)
              if (result.role == 'cancel') item.name = this.dataEdit.name
            }
          }
        })
        break;

      case 10:
        this.language.forEach(async (i: any) => {
          if (item._id == i._id) {
            if (i.edit == false) this.editData(i, 2)
            i.edit = !i.edit
            if (i.edit == false) {
              const result = await this.confirm("ios", "¿Está seguro que desea Editar este idioma?", "", 24, i)
              if (result.role == 'cancel') item.name = this.dataEdit.name
            }
          }
        })
        break;

      case 11:
        this.documentType.forEach(async (i: any) => {
          if (item._id == i._id) {
            if (i.edit == false) this.editData(i, 2)
            i.edit = !i.edit
            if (i.edit == false) {
              const result = await this.confirm("ios", "¿Está seguro que desea Editar este tipo de documento?", "", 27, i)
              if (result.role == 'cancel') item.name = this.dataEdit.name
            }
          }
        })
        break;

      case 12:
        this.professions.forEach(async (i: any) => {
          if (item._id == i._id) {
            if (i.edit == false) this.editData(i, 2)
            i.edit = !i.edit
            if (i.edit == false) {
              const result = await this.confirm("ios", "¿Está seguro que desea Editar esta Profesión", "", 30, i)
              if (result.role == 'cancel') item.name = this.dataEdit.name
            }
          }
        })
        break;

      case 13:
        this.occupations.forEach(async (i: any) => {
          if (item._id == i._id) {
            if (i.edit == false) this.editData(i, 2)
            i.edit = !i.edit
            if (i.edit == false) {
              const result = await this.confirm("ios", "¿Está seguro que desea Editar esta Ocupación", "", 33, i)
              if (result.role == 'cancel') item.name = this.dataEdit.name
            }
          }
        })
        break;

      case 14:
        this.sectors.forEach(async (i: any) => {
          if (item._id == i._id) {
            if (i.edit == false) this.editData(i, 2)
            i.edit = !i.edit
            if (i.edit == false) {
              const result = await this.confirm("ios", "¿Está seguro que desea Editar este Sector", "", 36, i)
              if (result.role == 'cancel') item.name = this.dataEdit.name
            }
          }
        })
        break;

      case 15:
        this.countries.forEach(async (i: any) => {
          if (item._id == i._id) {
            if (i.edit == false) this.editData(i, 2)
            i.edit = !i.edit
            if (i.edit == false) {
              const result = await this.confirm("ios", "¿Está seguro que desea Editar esta País", "", 39, i)
              if (result.role == 'cancel') item.name = this.dataEdit.name
            }
          }
        })
        break;
    }
  }

  delete(_id: string, type?: number) {
    switch (type) {
      case 1:
        this.confirm("ios", "¿Está seguro que desea Eliminar esta habilidad?", "", 1, _id)
        break;

      case 2:
        this.confirm("ios", "¿Está seguro que desea Eliminar esta categoria?", "", 7, _id)
        break;

      case 3:
        this.confirm("ios", "¿Está seguro que desea Eliminar esta red de conocimiento?", "", 19, _id)
        break;

      case 4:
        this.confirm("ios", "¿Está seguro que desea Eliminar esta tecnología informática?", "", 22, _id)
        break;

      case 5:
        this.confirm("ios", "¿Está seguro que desea Eliminar este idioma?", "", 25, _id)
        break;

      case 6:
        this.confirm("ios", "¿Está seguro que desea Eliminar este tipo de documento?", "", 28, _id)
        break;

      case 7:
        this.confirm("ios", "¿Está seguro que desea Eliminar esta profesión?", "", 28, _id)
        break;

      case 8:
        this.confirm("ios", "¿Está seguro que desea Eliminar esta ocupación?", "", 28, _id)
        break;

      case 9:
        this.confirm("ios", "¿Está seguro que desea Eliminar este sector?", "", 28, _id)
        break;

      case 10:
        this.confirm("ios", "¿Está seguro que desea Eliminar este país?", "", 28, _id)
        break;
    }

  }


  async confirm(mode: any, title: any, message: any, action: number, data: any) {
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
                this.skillService.delete({ _id: data }).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Habilidades", "Eliminación", 'Habilidad Eliminada satisfactoriamente', "ios")
                    this.getSkills()
                  }
                })
                break;

              case 2:
                this.skillService.update(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Habilidades", "Actualización", 'habilidad actualizada satisfactoriamente', "ios")
                    this.getSkills()
                  }
                })
                break

              case 3:
                this.skillService.create(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Habilidades", "Registro", 'habilidad registrada satisfactoriamente', "ios")
                    this.getSkills()
                  }
                })
                break

              case 5:
                this.categoryService.create(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Categorias", "Registro", 'cateroria registrada satisfactoriamente', "ios")
                    this.getCategory()
                  }
                })
                break

              case 6:
                this.categoryService.update(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Categorias", "Actualización", 'Categoria actualizada satisfactoriamente', "ios")
                    this.getCategory()
                  }
                })
                break

              case 7:
                this.categoryService.delete({ _id: data }).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Categorias", "Eliminación", 'Categoria Eliminada satisfactoriamente', "ios")
                    this.getCategory()
                  }
                })
                break;

              case 8:
                this.roleService.create(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Roles", "Registro", 'role registrado satisfactoriamente', "ios")
                    this.frol.reset()
                    this.getRols()
                  }
                })
                break;

              case 9:
                this.roleService.update(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Roles", "Actualización", 'rol actualizado satisfactoriamente', "ios")
                    this.getRols()
                  }
                })
                break

              case 10:
                this.userService.create(data).subscribe((res: any) => {
                  if (res.status)
                    this.getUser()
                })
                break;

              case 11:
                this.userService.update({ user: data, profiles: this.storage[0] }).subscribe((res: any) => {
                  if (res.status)
                    this.storage = []
                  this.utilService.alertMsg("Gestión de Usuarios", "Actualización", 'Usuario actualizado satisfactoriamente', "ios")
                  this.getUser()
                })
                break;

              case 12:
                this.levelService.create(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Niveles", "Registro", 'nivel registrado satisfactoriamente', "ios")
                    this.flevel.reset()
                    this.getLevels()
                  }
                })
                break;

              case 13:
                this.levelService.update(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Niveles", "Actualización", 'nivel actualizado satisfactoriamente', "ios")
                    this.flevel.reset()
                    this.getLevels()
                  }
                })
                break;

              case 14:
                this.programService.update(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Programas de formación", "Actualización", 'programa registrado actualizado satisfactoriamente', "ios")
                    this.flevel.reset()
                    this.getPrograms()
                  }
                })
                break;

              case 15:
                this.modalityService.create(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Modalidades", "Registro", 'modalidad registrada satisfactoriamente', "ios")
                    this.fmodality.reset()
                    this.getModalities()
                  }
                })
                break;

              case 16:
                this.modalityService.update(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Modalidades", "Actualización", 'modalidad actualizada satisfactoriamente', "ios")
                    this.fmodality.reset()
                    this.getModalities()
                  }
                })
                break;

              case 17:
                this.knowledgeService.create(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Redes de conocimiento", "Registro", 'red de conocimiento registrada satisfactoriamente', "ios")
                    this.getKnownledge()
                  }
                })
                break

              case 18:
                this.knowledgeService.update(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Redes de conocimiento", "Actualización", 'Red de conocimiento actualizada satisfactoriamente', "ios")
                    this.getKnownledge()
                  }
                })
                break

              case 19:
                this.knowledgeService.delete({ _id: data }).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Redes de conocimiento", "Eliminación", 'Red de conocimiento Eliminada satisfactoriamente', "ios")
                    this.getKnownledge()
                  }
                })
                break;

              case 20:
                this.technologyService.create(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Tecnologías informáticas", "Registro", 'Tecnología informática registrada satisfactoriamente', "ios")
                    this.getTechnology()
                  }
                })
                break

              case 21:
                this.technologyService.update(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Tecnologías informáticas", "Actualización", 'Tecnología informática actualizada satisfactoriamente', "ios")
                    this.getTechnology()
                  }
                })
                break

              case 22:
                this.technologyService.delete({ _id: data }).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Tecnologías informáticas", "Eliminación", 'Tecnología informática Eliminada satisfactoriamente', "ios")
                    this.getTechnology()
                  }
                })
                break;

              case 23:
                this.languageService.create(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Idiomas", "Registro", 'Idioma registrado satisfactoriamente', "ios")
                    this.getLanguages()
                  }
                })
                break

              case 24:
                this.languageService.update(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Idiomas", "Actualización", 'Idioma actualizado satisfactoriamente', "ios")
                    this.getLanguages()
                  }
                })
                break

              case 25:
                this.languageService.delete({ _id: data }).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Idiomas", "Eliminación", 'Idioma Eliminado satisfactoriamente', "ios")
                    this.getLanguages()
                  }
                })
                break;

              case 26:
                this.documentTypeService.create(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Tipos de documento", "Registro", 'Tipo de documento registrado satisfactoriamente', "ios")
                    this.getDocumentTypes()
                  }
                })
                break

              case 27:
                this.documentTypeService.update(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Tipos de documento", "Actualización", 'Tipo de documento actualizado satisfactoriamente', "ios")
                    this.getDocumentTypes()
                  }
                })
                break

              case 28:
                this.documentTypeService.delete({ _id: data }).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Tipos de documento", "Eliminación", 'Tipo de documento Eliminado satisfactoriamente', "ios")
                    this.getDocumentTypes()
                  }
                })
                break;

              case 29:
                this.professionService.create(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Profesiones", "Registro", 'Profesión registrado satisfactoriamente', "ios")
                    this.getProfessions()
                  }
                })
                break

              case 30:
                this.professionService.update(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Profesiones", "Actualización", 'Profesión actualizado satisfactoriamente', "ios")
                    this.getProfessions()
                  }
                })
                break

              case 31:
                this.professionService.delete({ _id: data }).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Profesiones", "Eliminación", 'Profesión Eliminado satisfactoriamente', "ios")
                    this.getProfessions()
                  }
                })
                break;

              case 32:
                this.occupationService.create(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Ocupaciones", "Registro", 'Ocupación registrado satisfactoriamente', "ios")
                    this.getOccupations()
                  }
                })
                break

              case 33:
                this.occupationService.update(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Ocupaciones", "Actualización", 'Ocupación actualizado satisfactoriamente', "ios")
                    this.getOccupations()
                  }
                })
                break

              case 34:
                this.occupationService.delete({ _id: data }).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Ocupaciones", "Eliminación", 'Ocupación Eliminado satisfactoriamente', "ios")
                    this.getOccupations()
                  }
                })
                break;

              case 35:
                this.sectorService.create(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Sectores", "Registro", 'Sector registrado satisfactoriamente', "ios")
                    this.getSectors()
                  }
                })
                break

              case 36:
                this.sectorService.update(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Sectores", "Actualización", 'Sector actualizado satisfactoriamente', "ios")
                    this.getSectors()
                  }
                })
                break

              case 37:
                this.sectorService.delete({ _id: data }).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Sectores", "Eliminación", 'Sector Eliminado satisfactoriamente', "ios")
                    this.getSectors()
                  }
                })
                break;

              case 38:
                this.countryService.create(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Paises", "Registro", 'País registrado satisfactoriamente', "ios")
                    this.getCountries()
                  }
                })
                break

              case 39:
                this.countryService.update(data).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Paises", "Actualización", 'País actualizado satisfactoriamente', "ios")
                    this.getCountries()
                  }
                })
                break

              case 40:
                this.countryService.delete({ _id: data }).subscribe((res: any) => {
                  if (res.status) {
                    this.utilService.alertMsg("Gestión de Paises", "Eliminación", 'País Eliminado satisfactoriamente', "ios")
                    this.getCountries()
                  }
                })
                break;
            }
          }
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            return false
          }
        }
      ]
    });

    await alert.present()
    return await alert.onDidDismiss()
  }


  async addUser() {
    const alert = await this.alertController.create({
      header: 'Registro de Usuarios',
      mode: 'ios',
      inputs: [
        {
          name: 'firstname',
          type: 'text',
          label: 'Nombres',
          placeholder: 'Nombres'
        },
        {
          name: 'lastname',
          type: 'text',
          label: 'Apellidos',
          placeholder: 'Apellidos'
        },
        {
          name: 'doc',
          type: 'text',
          label: 'Documento',
          placeholder: 'Documento'
        },
        {
          name: 'username',
          type: 'text',
          label: 'Usuario',
          placeholder: 'Usuario'
        },
        {
          name: 'password',
          type: 'password',
          label: 'Contraseña',
          placeholder: 'Contraseña'
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email',
          placeholder: 'Email'
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Celular',
          placeholder: 'Celular'
        }
      ],
      buttons: [
        {
          text: 'Si',
          handler: (data) => {
            this.confirm("ios", "¿Está seguro que desea registrar usuario?", "", 10, data)
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

  addFPSena() {
    this.utilService.showModalMsg("Cargue o suelte aquí su archivo", "Cargar desde mi equipo", ProgramformationPage)
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
          placeholder: 'Habilidad'
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
          placeholder: 'Descripción'
        }
      ],
      buttons: [
        {
          text: 'Si',
          handler: (data) => {
            this.confirm("ios", "¿Está seguro que desea guardar esta habilidad?", "", 3, data)
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

  close() {
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
          placeholder: 'Categoria'
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
          placeholder: 'Descripción'
        }
      ],
      buttons: [
        {
          text: 'Si',
          handler: (data) => {
            this.confirm("ios", "¿Está seguro que desea guardar esta categorias ?", "", 5, data)
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

  async addKnowledge() {
    const alert = await this.alertController.create({
      header: 'Registro de Redes de conocimiento',
      mode: 'ios',
      inputs: [
        {
          name: 'name',
          type: 'text',
          label: 'Red de conocimiento',
          placeholder: 'Red de conocimiento'
        }
      ],
      buttons: [
        {
          text: 'Si',
          handler: (data) => {
            this.confirm("ios", "¿Está seguro que desea guardar esta Red de conocimiento?", "", 17, data)
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

  async addTechnology() {
    const alert = await this.alertController.create({
      header: 'Registro de Tecnologías informáticas',
      mode: 'ios',
      inputs: [
        {
          name: 'name',
          type: 'text',
          label: 'Tecnología informática',
          placeholder: 'Tecnología informática'
        }
      ],
      buttons: [
        {
          text: 'Si',
          handler: (data) => {
            this.confirm("ios", "¿Está seguro que desea guardar esta Tecnología informática?", "", 20, data)
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

  async addLanguage() {
    const alert = await this.alertController.create({
      header: 'Registro de Idiomas',
      mode: 'ios',
      inputs: [
        {
          name: 'name',
          type: 'text',
          label: 'Idioma',
          placeholder: 'Idioma'
        }
      ],
      buttons: [
        {
          text: 'Si',
          handler: (data) => {
            this.confirm("ios", "¿Está seguro que desea guardar esta Idioma?", "", 23, data)
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

  async addDcumentType() {
    const alert = await this.alertController.create({
      header: 'Registro de Tipos de documento',
      mode: 'ios',
      inputs: [
        {
          name: 'name',
          type: 'text',
          label: 'Tipo de documento',
          placeholder: 'Tipo de documento'
        }
      ],
      buttons: [
        {
          text: 'Si',
          handler: (data) => {
            this.confirm("ios", "¿Está seguro que desea guardar esta Tipo de documento?", "", 26, data)
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

  async addProfession() {
    const alert = await this.alertController.create({
      header: 'Registro de Profesiones',
      mode: 'ios',
      inputs: [
        {
          name: 'name',
          type: 'text',
          label: 'Profesión',
          placeholder: 'Profesión'
        }
      ],
      buttons: [
        {
          text: 'Si',
          handler: (data) => {
            this.confirm("ios", "¿Está seguro que desea guardar esta Profesión?", "", 29, data)
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

  async addOccupation() {
    const alert = await this.alertController.create({
      header: 'Registro de Ocupaciones',
      mode: 'ios',
      inputs: [
        {
          name: 'name',
          type: 'text',
          label: 'Ocupación',
          placeholder: 'Ocupación'
        }
      ],
      buttons: [
        {
          text: 'Si',
          handler: (data) => {
            this.confirm("ios", "¿Está seguro que desea guardar esta Ocupación?", "", 32, data)
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

  async addSector() {
    const alert = await this.alertController.create({
      header: 'Registro de Sectores',
      mode: 'ios',
      inputs: [
        {
          name: 'name',
          type: 'text',
          label: 'Sector',
          placeholder: 'Sector'
        }
      ],
      buttons: [
        {
          text: 'Si',
          handler: (data) => {
            this.confirm("ios", "¿Está seguro que desea guardar esta Sector?", "", 35, data)
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

  async addCountry() {
    const alert = await this.alertController.create({
      header: 'Registro de Pises',
      mode: 'ios',
      inputs: [
        {
          name: 'name',
          type: 'text',
          label: 'País',
          placeholder: 'País'
        }
      ],
      buttons: [
        {
          text: 'Si',
          handler: (data) => {
            this.confirm("ios", "¿Está seguro que desea guardar esta País?", "", 38, data)
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


  async addLevel() {
    this.submitted = true;
    if (this.flevel.invalid) {
      return false
    }
    this.confirm("ios", "¿Está seguro que desea agregar un nuevo nivel?", "", 12, this.flevel.value)
  }

  async addModality() {
    this.submitted = true;
    if (this.fmodality.invalid) {
      return false
    }
    this.confirm("ios", "¿Está seguro que desea agregar una nueva modalidad?", "", 15, this.fmodality.value)
  }

  async addRole() {
    this.submitted = true;
    if (this.frol.invalid) {
      return false
    }
    this.confirm("ios", "¿Está seguro que desea agregar un nuevo rol?", "", 8, this.frol.value)
  }

  async editData(data, option) {
    this.dataEdit = {}
    this.dataEdit.name = data.name
    if (option == 1) this.dataEdit.description = data.description
  }

}

import { Injectable } from '@angular/core';
import { AlertController, ToastController, ModalController, LoadingController } from '@ionic/angular';
import { DataService } from '../services/data.services';
import { ConfigService } from '../services/config-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  public loading = false;
  public dataBase64: any;
  public modalMsg = 'modalMsg'

  constructor(
    public toastController: ToastController,
    public modalController: ModalController,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public configService: ConfigService,
    public dataService: DataService,
    public router: Router
    ) {
 }

  b64ToUtf8(str: string) {
    str = str.replace(/\s/g, '');
    return decodeURIComponent(encodeURIComponent(window.atob(str)));
  }

  b64ToPdf(str: string) {
    str = str.replace(/\s/g, '');
    var bin = atob(str);
    console.log('File Size:', Math.round(bin.length / 1024), 'KB');
    console.log('PDF Version:', bin.match(/^.PDF-([0-9.]+)/)[1]);
    var obj = document.createElement('object');
    obj.type = 'application/pdf';
    obj.data = 'data:application/pdf;base64,' + str;
    return obj.data;
  }

  strNull(paramString: string) {
    return (!paramString || paramString === undefined || paramString === '');
  }

  replaceAll(text: any, busca: any, reemplaza: any) {
    while (text.toString().indexOf(busca) !== -1) {
      text = text.toString().replace(busca, reemplaza);
    }
    return text;
  }

  formatNumber(num: any, prefix: any) {
    prefix = prefix || '';
    num += '';
    let splitStr = num.split('.');
    let splitLeft = splitStr[0];
    let splitRight = splitStr.length > 1 ? '.' + splitStr[1] : '';
    let regx = /(\d+)(\d{3})/;
    while (regx.test(splitLeft)) {
      splitLeft = splitLeft.replace(regx, '$1' + '.' + '$2');
    }
    return prefix + splitLeft + splitRight;
  }

  onlyNumber(event: any, type?: number) {
    if (type === 1) {
      event.target.value = (event.target.value + '').replace(/[^0-9]/g, '');
    } else {
      event.target.value = (event.target.value + '').replace(/[^0-9]/g, '');
      event.target.value = this.formatNumber(event.target.value, '');
    }
  }

  async alertMsg(titulo: string, subtitle: string, message: string, mode: any) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitle,
      message,
      mode,
      buttons: [
        { text: 'Aceptar', role: 'aceptar', handler: (d) => {return d} },
      ],
    });
    await alert.present();
    return await alert.onDidDismiss();
  }

  fileToBase64(event: any, type?: number) {
    const reader = new FileReader();
    if (typeof (event.target.files[0]) === 'object') {
      this.dataService.storage = true;
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = () => {
        this.dataBase64 = reader.result;
        switch (event.target.files[0].type) {
          case this.configService.getConfig().typeimg.png:
            this.dataBase64 = this.dataBase64.replace(this.configService.getConfig().typeimg.replacepng, '');
            break;

          case this.configService.getConfig().typeimg.jpg:
          case this.configService.getConfig().typeimg.jpeg:
            this.dataBase64 = this.dataBase64.replace(this.configService.getConfig().typeimg.replacejpg, '');
            break;

          case this.configService.getConfig().typeimg.pdf:
            this.dataBase64 = this.dataBase64.replace(this.configService.getConfig().typeimg.replacepdf, '');
            break;
        }
        if (reader.readyState === 2) {
          switch (type) {
              case 1:
                  this.dataService.base64 = this.dataBase64
              break;
              case 2:
                  this.dataService.base64Rut = this.dataBase64
              break;
              case 3:
                  this.dataService.base64RLG = this.dataBase64
              break;
            default:
                this.dataService.base64 = this.dataBase64
              break;
          }
        }
      };
    }
  }

  
  async viewModal(page: any, params: any, mode: any) {
    const modal = await this.modalController.create({
      component: page,
      componentProps: {
        params
      },
      mode,
      backdropDismiss: false,
    });
    await modal.present();
  }

  async showModalMsg(title?: string, msg?: string, msgPage?: any, classModal?: any ) {
    if(classModal != null)
      this.modalMsg = classModal
      
    const popover = await this.modalController.create({
      component: msgPage,
      mode: 'ios',
      cssClass: this.modalMsg,
      componentProps: { title : title, msg : msg }
    });
    return await popover.present();
    }

  async closeModal() {
    this.dataService.anyStringData = null
    return await this.modalController.dismiss()
  }

  async presentLoading() {
    this.loading = true;
    return await this.loadingController.create({
      //duration: this.configService.getConfig().paramConfig.DEFAULT_TIMEOUT * 1000,
      message: this.configService.getConfig().paramConfig.messageSpiner,
      mode:"ios"
    }).then(a => {
      a.present().then(() => {
        if (!this.loading) {
          a.dismiss();
        }
      });
    });
  }

  async hideLoading() {
    if (this.loading) {
      this.loading = false;
      return await this.loadingController.dismiss();
    }
    return null;
  }

  convertBaseb64ToBlob(b64Data:string, contentType:string): Blob {
    contentType = contentType || '';
    const sliceSize = 512;
    b64Data = b64Data.replace(/^[^,]+,/, '');
    b64Data = b64Data.replace(/\s/g, '');
    const byteCharacters = window.atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
         const slice = byteCharacters.slice(offset, offset + sliceSize);
         const byteNumbers = new Array(slice.length);
         for (let i = 0; i < slice.length; i++) {
             byteNumbers[i] = slice.charCodeAt(i);
         }
         const byteArray = new Uint8Array(byteNumbers);
         byteArrays.push(byteArray);
    }
   return new Blob(byteArrays, {type: contentType});
 }

  async toast(title?:string, pos?: any) {
    const toast = await this.toastController.create({
      message: title,
      duration: 5000,
      position: pos,
      color:'success',
      cssClass:'whitecolor'
    });
    toast.present();
  }
   
  closeSesion(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('firstname')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('lastname')
    sessionStorage.removeItem('doc')
    this.router.navigate(['/loginAdmin'])
  }

  async validatorXLXS(data, option){
    let cont = 0;
    let validate: string[] = []
    switch (option) {
      case 1:
        validate = ["name"]
        break;
      default:
        validate = ["name", "description"]
        break;
    }
    
    Object.keys(data).forEach(element => {
      validate.forEach(i => {
        if (element == i) cont++;
      })
    });

    return (cont == validate.length)? true: false
  }

  logout()
  {
    document.body.classList.add("into")
    setTimeout(() => {
      sessionStorage.removeItem('token')
      this.router.navigate(['/loginAdmin'])
      document.body.classList.remove("into")
    },600);
  }

}

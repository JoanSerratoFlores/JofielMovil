export const configuration = {
  bussinesServer: {
    urlBackend: 'http://localhost:5000',
    //urlBackend: 'http://161.97.83.93:5000',
  },
  paramConfig: {
    DEFAULT_TIMEOUT: 5, // segundos
    messageSpiner: 'Por favor espere un momento ...'
  },
  modulos:[
    { id:1, name: 'Gestión de Modalidades', icon:'assets/icon/gmodalitys.png', mod: false },
    //{ id:2, name: 'Gestión de Centros de Formación', icon:'assets/icon/gcformation.png', mod: false },
    { id:3, name: 'Gestión de Habilidades', icon:'assets/icon/mhabilitis.png', mod: false },
    { id:4, name: 'Gestión de Redes de Conocimiento', icon:'assets/icon/grlearn.png', mod: false },
    { id:5, name: 'Gestión de Categorias', icon:'assets/icon/mglevel.png', mod: false },
    { id:6, name: 'Gestión de Roles', icon:'assets/icon/mglevel.png', mod: false },
    { id:7, name: 'Gestión de Perfiles', icon:'assets/icon/perfiles.png', mod: false },
    { id:8, name: 'Gestión de F. SENA', icon:'assets/icon/fsena.png', mod: false },
    { id:9, name: 'Gestión de Niveles', icon:'assets/icon/mglevel.png', mod: false },
    //{ id:10, name: 'Gestión de Competencias Lab.', icon:'assets/icon/gcompetitions.png', mod: false},
    { id:11, name: 'Gestión de Tecnologías Informáticas', icon:'assets/icon/gtech.png', mod: false},
    { id:12, name: 'Gestión de Idiomas', icon:'assets/icon/gtech.png', mod: false},
    { id:13, name: 'Gestión de Tipo de documento', icon:'assets/icon/gtech.png', mod: false},
    { id:14, name: 'Gestión de Profesiones', icon:'assets/icon/gtech.png', mod: false},
    { id:15, name: 'Gestión de Ocupaciones', icon:'assets/icon/gtech.png', mod: false},
    { id:16, name: 'Gestión de Sectores', icon:'assets/icon/gtech.png', mod: false},
    { id:17, name: 'Gestión de Paises', icon:'assets/icon/gtech.png', mod: false}
  ],
  typeimg: {
    txt: 'text/plain',
    doc: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    png: 'image/png',
    jpg: 'image/jpg',
    jpeg: 'image/jpeg',
    pdf: 'application/pdf',
    replacepng: 'data:image/png;base64,',
    replacejpg: 'data:image/jpeg;base64,/',
    replacepdf: 'data:application/pdf;base64,'
  },
  loginComponent: {
    titlte: 'Iniciar sesión',
    user: 'Usuario*',
    password: 'Contraseña*',
    forgotPassword: '¿Olvidaste tu Contraseña?',
    clickhere: 'Haz clic aqui',
    notaccount: '¿No tienes una cuenta?',
    registernow: 'Registrate ahora',
  },
  validation: {
    required: '*Please enter a valid email',
    requiredpassword: '*Please enter a valid password',
    requiredterms: 'I accept the',
    errorconfirmationpassword: 'Error! The confirmation of the password does not correspond.',
    warning: 'The number of characters is less, Check again'
  },
  skillColunms:[
    { name: 'ID', up: false, down:  false,  icon: false },
    { name: 'Fecha' , up:  false, down:  false, icon: true },
    { name: 'Hora' , up:  false, down:  false, icon: true },
    { name: 'Habilidades', up:  false, down:  false, icon: true },
    { name: 'Descripción', up:  false, down:  false, icon: true },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
  ctgColunms:[
    { name: 'ID',  up: false, down:  false,  icon: false },
    { name: 'Fecha' ,  up:  false, down:  false, icon: true },
    { name: 'Hora' , up:  false, down:  false, icon: true },
    { name: 'Nombre del Categoría', up:  false, down:  false, icon: true },
    { name: 'Descripción', up:  false, down:  false, icon: true },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
  rolesColunms:[
    { name: 'ID', up: false, down:  false,  icon: false },
    { name: 'Nombre' ,  up:  false, down:  false, icon: true },
    { name: 'Descripción', up:  false, down:  false, icon: true },
    { name: 'Fecha' , up:  false, down:  false, icon: true },
    { name: 'Hora', up:  false, down:  false, icon: true },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
  profilColunms:[
    { name: 'Usuario', up: false, down:  false,  icon: true },
    { name: 'Identificación' ,  up:  false, down:  false, icon: true },
    { name: 'Nombres' ,  up:  false, down:  false, icon: true },
    { name: 'Apellidos', up:  false, down:  false, icon: true },
    { name: 'Email' , up:  false, down:  false, icon: true },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Roles' , up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
  programColunms:[
    { name: 'ID', up: false, down:  false,  icon: true },
    { name: 'Fecha' ,  up:  false, down:  false, icon: true },
    { name: 'Hora' ,  up:  false, down:  false, icon: true },
    { name: 'Nombre de Categoría', up:  false, down:  false, icon: true },
    { name: 'Niveles' , up:  false, down:  false, icon: true },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
  levelsColunms:[
    { name: 'ID', up: false, down:  false,  icon: true },
    { name: 'Fecha' ,  up:  false, down:  false, icon: true },
    { name: 'Hora' ,  up:  false, down:  false, icon: true },
    { name: 'Nivel' ,  up:  false, down:  false, icon: true },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
  modalitiesColunms:[
    { name: 'ID', up: false, down:  false,  icon: true },
    { name: 'Fecha' ,  up:  false, down:  false, icon: true },
    { name: 'Hora' ,  up:  false, down:  false, icon: true },
    { name: 'Modalidad' ,  up:  false, down:  false, icon: true },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
  knowledgeColunms:[
    { name: 'ID',  up: false, down:  false,  icon: false },
    { name: 'Fecha' ,  up:  false, down:  false, icon: true },
    { name: 'Hora' , up:  false, down:  false, icon: true },
    { name: 'Redes de conocimiento', up:  false, down:  false, icon: true },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
  technologyColunms:[
    { name: 'ID',  up: false, down:  false,  icon: false },
    { name: 'Fecha' ,  up:  false, down:  false, icon: true },
    { name: 'Hora' , up:  false, down:  false, icon: true },
    { name: 'Tecnologías informáticas', up:  false, down:  false, icon: true },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
  languageColunms:[
    { name: 'ID',  up: false, down:  false,  icon: false },
    { name: 'Fecha' ,  up:  false, down:  false, icon: true },
    { name: 'Hora' , up:  false, down:  false, icon: true },
    { name: 'Idioma', up:  false, down:  false, icon: true },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
  documentTypeColunms:[
    { name: 'ID',  up: false, down:  false,  icon: false },
    { name: 'Fecha' ,  up:  false, down:  false, icon: true },
    { name: 'Hora' , up:  false, down:  false, icon: true },
    { name: 'Tipo de documento', up:  false, down:  false, icon: true },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
  occupationColunms:[
    { name: 'ID',  up: false, down:  false,  icon: false },
    { name: 'Fecha' ,  up:  false, down:  false, icon: true },
    { name: 'Hora' , up:  false, down:  false, icon: true },
    { name: 'Ocupaciones', up:  false, down:  false, icon: true },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
  professionColunms:[
    { name: 'ID',  up: false, down:  false,  icon: false },
    { name: 'Fecha' ,  up:  false, down:  false, icon: true },
    { name: 'Hora' , up:  false, down:  false, icon: true },
    { name: 'Tipo de documento', up:  false, down:  false, icon: true },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
  sectorColunms:[
    { name: 'ID',  up: false, down:  false,  icon: false },
    { name: 'Fecha' ,  up:  false, down:  false, icon: true },
    { name: 'Hora' , up:  false, down:  false, icon: true },
    { name: 'Tipo de documento', up:  false, down:  false, icon: true },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
  countryColunms:[
    { name: 'ID',  up: false, down:  false,  icon: false },
    { name: 'Fecha' ,  up:  false, down:  false, icon: true },
    { name: 'Hora' , up:  false, down:  false, icon: true },
    { name: 'Tipo de documento', up:  false, down:  false, icon: true },
    { name: 'Activar' , up:  false, down:  false, icon: false },
    { name: 'Editar' ,up:  false, down:  false, icon: false },
    { name: 'Ver' , up:  false, down:  false, icon: false }
  ],
 }
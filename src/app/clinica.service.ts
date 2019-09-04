import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
especialidad = 
[
  {
    IdEspecialidad:1,
    Name:'Medicina General', 
    cost:50,
    descripcion:'La medicina general constituye el primer nivel de atención médica. El médico general es un profesional capacitado para diagnosticar y manejar diferentes patologías comunes y derivar al especialista indicado cuando corresponda.'
  },
  {
    IdEspecialidad:2,
    Name:'Neumología', 
    cost:150,
    descripcion:'Es la especialidad médica que se encarga del estudio del sistema respiratorio, también conocida como Neumonología, Pulmonología y Medicina respiratoria. '
  },
  {
    IdEspecialidad:3,
    Name:'Cardiología', 
    cost:80,
    descripcion:'Es la rama de la medicina interna, escindida de "pulmón y corazón," se ocupa de las afecciones del corazón y del aparato circulatorio.'
  },
  {
    IdEspecialidad:4,
    Name:'Geriatría',
    cost:90,
    descripcion:'Los geriatras son médicos expertos en el cuidado de los adultos mayores, de la misma manera que los pediatras lo son de los niños. Tienen especial conocimiento de enfermedades que comúnmente aquejan a los ancianos.'
  },
  {
    IdEspecialidad:5,
    Name:'Dermatología', 
    cost:120,
    descripcion:'La dermatología es la especialidad de la medicina centrada en las enfermedades y en las funciones de la piel (el órgano más extenso del cuerpo humano'
  },
  {
    IdEspecialidad:6,
    Name:'Ginecología', 
    cost:40,
    descripcion:'La ginecología es la especialidad de la medicina dedicada al cuidado del sistema reproductor femenino. Los ginecólogos, por lo tanto, son los especialistas que atienden las cuestiones vinculadas al útero, la vagina y los ovarios.'
  },
  {
    IdEspecialidad:7,
    Name:'Reumatología', 
    cost:70,
    descripcion:'La Reumatología es la especialidad médica que se encarga de prevenir, diagnosticar y tratar las enfermedades musculo esqueléticas  y autoinmunes sistémicas. Se trata de una de las especialidades que más avances en diagnóstico y tratamiento ha experimentado en los últimos años.'
  },
  {
    IdEspecialidad:8,
    Name:'Medicina Interna', 
    cost:100,
    descripcion:'La Medicina Interna es una especialidad médica que se dedica al estudio, diagnóstico y tratamiento de las enfermedades propias del adulto.'
  },
  {
    IdEspecialidad:9,
    Name:'Endocrinología', 
    cost:80,
    descripcion:'Un endocrinólogo es un médico especializado en las enfermedades de las hormonas, del metabolismo y en los problemas nutricionales.'
  },
  {
    IdEspecialidad:10,
    Name:'Traumatología', 
    cost:90,
    descripcion:'La Traumatología es la especialidad médica que se encarga del cuidado, estudio y rehabilitación de la forma y función de las extremidades, columna y estructuras asociadas. Es una especialidad que abarca más allá del campo de lesiones traumáticas; contempla también el estudio de patologías congénitas.'
  },
  {
    IdEspecialidad:11,
    Name:'Oftalmología', 
    cost:70,
    descripcion:'Es la especialidad médica que se encarga del tratamiento de las enfermedades de los ojos. Esta disciplina también tiene aplicación en la veterinaria ya que los seres humanos y los animales suelen compartir, en este caso, procesos patológicos similares.'
  },
  {
    IdEspecialidad:12,
    Name:'Otorrinolaringología', 
    cost:80,
    descripcion:'Es la especialidad médica y quirúrgica que se encarga de la prevención, diagnóstico y tratamiento de las enfermedades del oído, las vías aéreo-respiratorias superiores y las zonas próximas de la cara y el cuello.'
  },
  {
    IdEspecialidad:13,
    Name:'Cirugia General', 
    cost:140,
    descripcion:'La cirugía general es la especialidad de la medicina que tiene competencia en el diagnóstico y tratamiento de las patologías que se resuelven mediante procedimientos quirúrgicos o potencialmente quirúrgicos, tanto electivos como de urgencia, de origen benigno, inflamatorio, traumático o neoplásico en los siguientes aparatos, sistemas y áreas anatómicas: aparato digestivo, pared abdominal, sistema endocrino, mama, piel y partes blandas, retroperitoneo y afecciones externas de la cabeza y el cuello.'
  },
  {
    IdEspecialidad:14,
    Name:'Gastroenterología', 
    cost:85,
    descripcion:'Un gastroenterólogo es un médico con capacitación y experiencia dedicadas en el manejo de enfermedades del tracto gastrointestinal y el hígado.'
  },
  {
    IdEspecialidad:15,
    Name:'Urologia', 
    cost:50,
    descripcion:'La Urología es una especialidad médico-quirúrgica que se ocupa del estudio, diagnóstico y tratamiento de las afecciones médicas y quirúrgicas del aparato urinario y retroperitoneo, en ambos sexos, y del aparato genital masculino, sin límite de edad, motivadas por padecimientos congénitos traumáticos, sépticos, metabólicos, obstructivos y oncológicos.'
  },
  {
    IdEspecialidad:16,
    Name:'Neurología', 
    cost:180,
    descripcion:'La Neurología se ocupa de forma integral de la asistencia médica al enfermo neurológico, de la docencia en todas las materias que afectan al sistema nervioso y de la investigación, tanto clínica como básica, dentro de su ámbito.'
  }
];
doctor = 
[
  {IdDoctor:1, FullName:'Medico general1',IdEspecialidad:1,CMP:9854325,IdSecretaria:1},
  {IdDoctor:2, FullName:'Neurologo',IdEspecialidad:2,CMP:9854325,IdSecretaria:1},
  {IdDoctor:3, FullName:'Cardiologo',IdEspecialidad:3,CMP:9854325,IdSecretaria:1},
  {IdDoctor:4, FullName:'Geriatra',IdEspecialidad:4,CMP:9854325,IdSecretaria:1},
  {IdDoctor:5, FullName:'Dermatologo',IdEspecialidad:5,CMP:9854325,IdSecretaria:1},
  {IdDoctor:6, FullName:'Ginecologa',IdEspecialidad:6,CMP:9854325,IdSecretaria:1},
  {IdDoctor:7, FullName:'Reumatologa',IdEspecialidad:7,CMP:9854325,IdSecretaria:1},
  {IdDoctor:8, FullName:'Internista',IdEspecialidad:8,CMP:9854325,IdSecretaria:1},
  {IdDoctor:9, FullName:'Endocrinologa',IdEspecialidad:9,CMP:9854325,IdSecretaria:1},
  {IdDoctor:10, FullName:'Traumatologo',IdEspecialidad:10,CMP:9854325,IdSecretaria:1},
  {IdDoctor:11, FullName:'Oftalmologo',IdEspecialidad:11,CMP:9854325,IdSecretaria:1},
  {IdDoctor:12, FullName:'Otorrinolaringologo',IdEspecialidad:12,CMP:9854325,IdSecretaria:1},
  {IdDoctor:13, FullName:'Cirujano',IdEspecialidad:13,CMP:9854325,IdSecretaria:1},
  {IdDoctor:14, FullName:'Gastroenterologo',IdEspecialidad:14,CMP:9854325,IdSecretaria:1},
  {IdDoctor:15, FullName:'Urologo',IdEspecialidad:15,CMP:9854325,IdSecretaria:1},
  {IdDoctor:16, FullName:'Neurologo',IdEspecialidad:16,CMP:9854325,IdSecretaria:1},
  {IdDoctor:17, FullName:'Medico general2',IdEspecialidad:1,CMP:9854325,IdSecretaria:1},
  {IdDoctor:18, FullName:'Medico general3',IdEspecialidad:1,CMP:9854325,IdSecretaria:1}
];
hora = 
[
  {Id:1,name: '8:00 am - 8:10 am'},
  {Id:2,name: '8:10 am - 8:20 am'},
  {Id:3,name: '8:20 am - 8:30 am'},
  {Id:4,name: '8:30 am - 8:40 am'},
  {Id:5,name: '8:30 am - 8:40 am'},
  {Id:6,name: '8:40 am - 8:50 am'},
  {Id:7,name: '8:50 am - 9:00 am'},
  {Id:8,name: '9:00 am - 9:10 am'},
  {Id:9,name: '9:10 am - 9:20 am'},
  {Id:10,name: '9:20 am - 9:30 am'},
  {Id:11,name: '9:30 am - 9:40 am'},
  {Id:12,name: '9:40 am - 9:50 am'},
  {Id:13,name: '9:50 am - 10:00 am'},
  {Id:14,name: '10:00 am - 10:10 am'},
  {Id:15,name: '10:10 am - 10:20 am'},
  {Id:16,name: '10:20 am - 10:30 am'},
  {Id:17,name: '10:30 am - 10:40 am'},
  {Id:18,name: '10:40 am - 10:50 am'},
  {Id:19,name: '10:50 am - 11:00 am'},
  {Id:20,name: '11:00 am - 11:10 am'},
  {Id:21,name: '11:10 am - 11:20 am'},
  {Id:22,name: '11:20 am - 11:30 am'},
  {Id:23,name: '11:30 am - 11:40 am'},
  {Id:24,name: '11:40 am - 11:50 am'},
  {Id:25,name: '11:50 am - 12:00 pm'},
  {Id:26,name: '12:00 pm - 12:10 pm'},
  {Id:27,name: '12:10 pm - 12:20 pm'},
  {Id:28,name: '12:20 pm - 12:30 pm'},
  {Id:29,name: '12:30 pm - 12:40 pm'},
  {Id:30,name: '12:40 pm - 12:50 pm'},
  {Id:31,name: '12:50 pm - 1:00 pm'},
  {Id:32,name: '1:00 pm - 1:10 pm'},
  {Id:33,name: '1:10 pm - 1:20 pm'},
  {Id:34,name: '1:20 pm - 1:30 pm'},
  {Id:35,name: '1:30 pm - 1:40 pm'},
  {Id:36,name: '1:40 pm - 1:50 pm'},
  {Id:37,name: '1:50 pm - 2:00 pm'},
  {Id:38,name: '2:00 pm - 2:10 pm'},
  {Id:39,name: '2:10 pm - 2:20 pm'},
  {Id:40,name: '2:20 pm - 2:30 pm'},
  {Id:41,name: '2:30 pm - 2:40 pm'},
  {Id:42,name: '2:40 pm - 2:50 pm'},
  {Id:43,name: '2:50 pm - 3:00 pm'},
  {Id:44,name: '3:00 pm - 3:10 pm'},
  {Id:45,name: '3:10 pm - 3:20 pm'},
  {Id:46,name: '3:20 pm - 3:30 pm'},
  {Id:47,name: '3:30 pm - 3:40 pm'},
  {Id:48,name: '3:40 pm - 3:50 pm'},
  {Id:49,name: '3:50 pm - 4:00 pm'},
  {Id:50,name: '4:00 pm - 4:10 pm'},
  {Id:51,name: '4:10 pm - 4:20 pm'},
  {Id:52,name: '4:20 pm - 4:30 pm'},
  {Id:53,name: '4:30 pm - 4:40 pm'},
  {Id:54,name: '4:40 pm - 4:50 pm'},
  {Id:55,name: '4:50 pm - 5:00 pm'},
  {Id:56,name: '5:00 pm - 5:10 pm'},
  {Id:57,name: '5:10 pm - 5:20 pm'},
  {Id:58,name: '5:20 pm - 5:30 pm'},
  {Id:59,name: '5:30 pm - 5:40 pm'},
  {Id:60,name: '5:40 pm - 5:50 pm'},
  {Id:61,name: '5:50 pm - 6:00 pm'},
  {Id:62,name: '6:00 pm - 6:10 pm'},
  {Id:63,name: '6:10 pm - 6:20 pm'},
  {Id:64,name: '6:20 pm - 6:30 pm'},
  {Id:65,name: '6:30 pm - 6:40 pm'},
  {Id:66,name: '6:40 pm - 6:50 pm'},
  {Id:67,name: '6:50 pm - 7:00 pm'},
  {Id:68,name: '7:00 pm - 7:10 pm'},
  {Id:69,name: '7:10 pm - 7:20 pm'},
  {Id:70,name: '7:20 pm - 7:30 pm'},
  {Id:71,name: '7:30 pm - 7:40 pm'},
  {Id:72,name: '7:40 pm - 7:50 pm'},
  {Id:73,name: '7:50 pm - 8:00 pm'},
  {Id:74,name: '8:00 pm - 8:10 pm'},
  {Id:75,name: '8:10 pm - 8:20 pm'},
  {Id:76,name: '8:20 pm - 8:30 pm'},
  {Id:77,name: '8:30 pm - 8:40 pm'},
  {Id:78,name: '8:40 pm - 8:50 pm'},
  {Id:79,name: '8:50 pm - 9:00 pm'},
  {Id:80,name: '9:00 pm - 9:10 pm'},
  {Id:81,name: '9:10 pm - 9:20 pm'},
  {Id:82,name: '9:20 pm - 9:30 pm'},
  {Id:83,name: '9:30 pm - 9:40 pm'},
  {Id:84,name: '9:40 pm - 9:50 pm'},
  {Id:85,name: '9:50 pm - 10:00 pm'},
  {Id:86,name: '10:00 pm - 10:10 pm'},
  {Id:87,name: '10:10 pm - 10:20 pm'},
  {Id:88,name: '10:20 pm - 10:30 pm'},
  {Id:89,name: '10:30 pm - 10:40 pm'},
  {Id:90,name: '10:40 pm - 10:50 pm'},
  {Id:91,name: '11:00 pm - 11:10 pm'}
];
horario =
[
  {IdHorario:1, IdHora: 1,IdEspecialidad:1},
]

cita = 
[
  {numero:1, fechaCita: '2019-08-29',tipo:4},
  {numero:2, fechaCita: '2019-08-28',tipo:1},
  {numero:3, fechaCita: '2019-08-23',tipo:9},
  {numero:4, fechaCita: '2019-08-27',tipo:4},
  {numero:5, fechaCita: '2019-08-21',tipo:6},
  {numero:6, fechaCita: '2019-08-22',tipo:2},
  {numero:7, fechaCita: '2019-08-28',tipo:7},
  {numero:8, fechaCita: '2019-08-25',tipo:6},
  {numero:9, fechaCita: '2019-08-26',tipo:3},
]

  constructor() { }
  ObtenerEspecialidad()
  {
    return this.especialidad;
      
  }
  ObtenerDoctor(){
    return this.doctor;
      
  }
  ObtenerCita()
  {
    return this.cita;
  }

  nuevaCita(citas) {
    this.cita.push(citas);
  }




}

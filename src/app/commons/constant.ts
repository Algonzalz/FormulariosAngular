
export class Constant {
public  static Pattern = {
    Form: {
      Username: /^[A-Za-z0-9áéíóúÁÉÍÓÚ]+(?:[_.-][A-Za-z0-9áéíóúÁÉÍÓÚ]+)*$/,
      Name: /^[A-Za-záéíóúÁÉÍÓÚ]+(?:['´][A-Za-záéíóúÁÉÍÓÚ]+)*(?:['´][\s][A-Za-záéíóúÁÉÍÓÚ]+)*(?:[\s][A-Za-záéíóúÁÉÍÓÚ]+)*$/,
      Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
      Password:  /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,}$/,
      Phone: /^[0-9]/,
      Disease: /^[A-Za-z0-9áéíóúÁÉÍÓÚ]+(?:[\s][A-Za-z0-9áéíóúÁÉÍÓÚ]+)*$/
    },
     Only: {
      OnlyNumber: /^[a-zA-Z]'/,
      OnlyLetters: /^[0-9]/
    },
     Replace: {
      PassWord: /[^A-Za-z\d]\w*/i,
      Username: /([-_.]{2})|[¿¡!@#$%^&*()\[\],?"'`:{}|<>/+¿;~¨=···ªºüéáíóúÁÉÍÓÚÜÑ ]/i,
      Email: /[^a-zA-Z0-9._%+-]+@[^a-z0-9.-]+\.[^a-z]{2,4}$\w*/i,
      Telfono: /[^0-9()-]\w*/i,
      Activation: /[^a-zA-Z0-9]|[iIñÑ]/i,
      FiltroNumber: /[^0-9]/g,
      //   const telfono = /[^0-9()-]\w*/i;
      Usuario: /([']{2})|[!@#$%^&*()\[\],.?":{}|<>0-9-_/+¿;~¨=···ªº]|(\s{2})/i
    }
  };
}

class Cuenta {
  
    constructor(saldo, tasaAnual) {
      this.saldo = saldo;
      this.tasaAnual = tasaAnual;
      this.numeroConsignaciones = 0;
      this.numeroRetiros = 0;
      this.comisionMensual = 0;
    }
  
   
    consignar(cantidad) {
      this.saldo += cantidad;
      this.numeroConsignaciones++;
    }
  
     
    
    retirar(cantidad) {
      const nuevoSaldo = this.saldo - cantidad;
      if (nuevoSaldo >= 0) {
        this.saldo = nuevoSaldo;
        this.numeroRetiros++;
      } else {
        console.log("La cantidad a retirar excede el saldo actual.");
      }
    }
  
    
    calcularInteres() {
      const tasaMensual = this.tasaAnual / 12;
      const interesMensual = this.saldo * tasaMensual;
      this.saldo += interesMensual;
    }
 
    extractoMensual() {
      this.saldo -= this.comisionMensual;
      this.calcularInteres();
    }
  }
  
  class CuentaAhorros extends Cuenta {
   
    constructor(saldo, tasa) {
      super(saldo, tasa);
      this.activa = saldo >= 10000;
    }
  
 
    retirar(cantidad) {
      if (this.activa) {
        super.retirar(cantidad);
      }
    }
  
 
    consignar(cantidad) {
      if (this.activa) {
        super.consignar(cantidad);
      }
    }

    extractoMensual() {
      if (this.numeroRetiros > 4) {
        this.comisionMensual += (this.numeroRetiros - 4) * 1000;
      }
      super.extractoMensual();
      if (this.saldo < 10000) {
        this.activa = false;
      }
    }
  
   
    imprimir() {
      console.log(`Saldo = $ ${this.saldo}`);
      console.log(`Comisión mensual = $ ${this.comisionMensual}`);
      console.log(`Número de transacciones = ${this.numeroConsignaciones + this.numeroRetiros}`);
    }
  }
  
  class CuentaCorriente extends Cuenta {
    constructor(saldo, tasa) {
      super(saldo, tasa);
      this.sobregiro = 0;
    }
  
    
    retirar(cantidad) {
      const resultado = this.saldo - cantidad;
      if (resultado < 0) {
        this.sobregiro -= resultado;
        this.saldo = 0;
      } else {
        super.retirar(cantidad);
      }
    }
  
  
    consignar(cantidad) {
      if (this.sobregiro > 0) {
        const residuo = this.sobregiro - cantidad;
        if (residuo > 0) {
          this.sobregiro = 0;
          this.saldo = residuo;
        } else {
          this.sobregiro = -residuo;
          this.saldo = 0;
        }
      } else {
        super.consignar(cantidad);
      }
    }
  
  
    extractoMensual() {
      super.extractoMensual();
    }
  
   
    imprimir() {
      console.log(`Saldo = $ ${this.saldo}`);
      console.log(`Comisión mensual = $ ${this.comisionMensual}`);
      console.log(`Número de transacciones = ${this.numeroConsignaciones + this.numeroRetiros}`);
      console.log(`Valor de sobregiro = $ ${this.sobregiro}`);
    }
  }
  

  const cuentaAhorros = new CuentaAhorros(15000, 0.05);
  cuentaAhorros.consignar(5000);
  cuentaAhorros.retirar(2000);
  cuentaAhorros.extractoMensual();
  cuentaAhorros.imprimir();
  
  const cuentaCorriente = new CuentaCorriente(2000, 0.03);
  cuentaCorriente.retirar(3000);
  cuentaCorriente.consignar(1000);
  cuentaCorriente.extractoMensual();
  cuentaCorriente.imprimir();
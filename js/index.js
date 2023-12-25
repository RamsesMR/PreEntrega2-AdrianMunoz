
//vairiables
const IVA = 0.21;
const IRPF = 0.20;
let totalIngresoBruto=0;
let totalIngreso=0;
let totalIva=0;
let totalIrpf=0;
let ok=0;
let totalGasto=0;
const arrayFacturasIngreso=[];
const arrayFacturasEgreso=[];



//clases
class FacturaIngreso{
    constructor(nombre,apellido, dni, ingreso){

        this.nombre=nombre;
        this.apellido= apellido;
        this.dni=dni;
        this.ingreso=ingreso;
        this.iva=ingreso*IVA;
        this.irpf=ingreso*IRPF;
        this.deducciones=this.iva+this.irpf
        this.neto=this.ingreso-this.deducciones;
    }

    sumarATotal(){

        totalIngreso+=this.neto;
        totalIva+=this.iva;
        totalIrpf+=this.irpf;
        totalIngresoBruto+=this.ingreso;
        
        console.log("se han cargado los datos de la factura");
    }
}

class FacturaEgreso{
    constructor(nombre,apellido, dni, gasto){

        this.nombre=nombre;
        this.apellido= apellido;
        this.dni=dni;
        this.gasto=gasto;
        this.iva=gasto*IVA;
        this.irpf=gasto*IRPF;
        this.deducciones=this.iva+this.irpf
        this.neto=this.gasto-this.deducciones;
    }

    sumarATotal(){

       
        totalIva-=this.iva;
        totalIrpf-=this.irpf;
        totalGasto+=this.gasto;
        totalIngreso+=this.deducciones
        console.log("se han cargado los datos de la factura");
        
    }
}

class Usuario{
    constructor(nombre,apellido,dni,correo){

        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.correo=correo;
        totalIngreso;
        totalIva;
        totalIrpf;
  
    }
}

//creacion de usuario


let nombreEntrada= prompt("Ingrese nombre...");

let apellidoEntrada = prompt("Ingrese apellido...");

let dniEntrada= parseInt(prompt("Ingrese dni..."));

let correoEntrada = prompt("ingrese correo");

const Usuario1= new Usuario(nombreEntrada,apellidoEntrada,dniEntrada,correoEntrada);

console.log(Usuario1)


//main 
while (ok!==3){

   
do{

  let seleccion= parseInt(prompt("MENU: "+ "\n1. Cargar factura de ingreso" + "\n2. Cargar factura de gasto" + "\n3. Consultar pago trimestral" +"\n4. Salir del programa"));



   if(seleccion===1){
    

   let ingresoEntrada=parseFloat(prompt("monto total de la factura"))

   const Factura1= new FacturaIngreso( Usuario1.nombre,Usuario1.apellido,Usuario1.dni,ingresoEntrada);

   Factura1.sumarATotal();

   arrayFacturasIngreso.push(Factura1);

   console.log(Factura1);
   console.log(arrayFacturasIngreso)
   
   alert("su factura de ingreso se ha cargado exitosamente")

   
   
   }

   else if(seleccion===2){
    
    let entradaGasto=parseFloat(prompt("ingrese monto del gasto"))

    const Factura2= new FacturaEgreso(Usuario1.nombre,Usuario1.apellido,Usuario1.dni,entradaGasto);

    Factura2.sumarATotal();

    arrayFacturasEgreso.push(Factura2);

    console.log(Factura2)

    console.log(arrayFacturasEgreso);

    alert("su factura de gasto se ha cargado exitosamente")
   }

   else if(seleccion===3){
    
   alert("Usuario: \n Nombre: " +Usuario1.nombre +" "+ Usuario1.apellido + "\n DNI: "+ Usuario1.dni +"\n Correo: "+ Usuario1.correo +"\n---------------- Resumen trimestal--------------------"+ "\n IVA deudor: " +totalIva+ "\n IRPF deudor: " + totalIrpf+"\n Ingreso bruto: "+ totalIngresoBruto+"\n Total ingreso con deducciones: "+ totalIngreso+ "\n Total gasto: "+ totalGasto);

   }
   else if(seleccion===4){
    
    alert("HA SALIDO DEL PROGRAMA, VUELVA PRONTO")
    ok=3;
   }
   
   else if(seleccion<1 || seleccion > 4){

    alert("la opcion introducida es invalida.. vuelva a intentarlo")
   }
   


}while(ok!==3); //while secundario

}//while principal
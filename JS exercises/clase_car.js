/*let car = {
    marca: 'Toyota',
    tipo: 'Sedan',
    puertas: 3,
    creadoEn: 'Hoy'
};*/

class carro {
    constructor(marca, tipo, puertas){
        this.marca = marca
        this.tipo = tipo
        this.puertas = puertas
        this.creadoEn = 'Hoy'
        this.encendido = false;
        this.gasolina = 100;

    }

    encenderAuto() {
        
        if (this.encendido = true) {
            console.log('El carro ya esta encendido')
        } else
        this.encendido = true;
         console.log ("El auto esta encendido")
    }

    realizarViaje(consumo){
        
        if (this.encendido) {
          

                if (consumo > this.gasolina  ) {
                console.log ('No puede realizar ninguún viaje, no tiene suficiente gasolina, sólo queda ' + this.gasolina + '% Disponible');
                } else {
                this.gasolina = this.gasolina - consumo;

                return 'Le queda ' + this.gasolina + ' litros de gasolina';
                
                        } 
                     } else {
                    console.log('No puede realizar ningún viaje, el auto esta apagado');
                    }
        
}           
}

let car2 = new carro('Mazda', 'Sedan', 4);

console.log(car2);

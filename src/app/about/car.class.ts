export class Car {
   vin: string;
   year: string;
   brand: string;
   color: string;

   constructor(private text: string) {
       this.brand = text;
   }
}

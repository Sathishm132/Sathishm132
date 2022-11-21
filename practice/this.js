//this insidethe object
'use strict'
this.table="windows table"
let myroom={
    table:"mytable",
    cleantable(){
        console.log(`cleaning ${this.table}`);
    }
}
myroom.cleantable();
//inside funtion
//iside iner funtion using arrow function to acces this from parent funtion
const cleaningtable=function(soap){
    const innerfunction=(soap_)=>{
        console.log(`cleaning ${this.table} using ${soap_}`);
    };
    innerfunction("somesoap")
};
cleaningtable.call(this,);
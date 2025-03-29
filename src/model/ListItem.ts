
export interface Item{        //definicion de interfaz
    id: string, 
    item: string,
    checked:boolean
}




export default class ListItem implements Item {                 //la clase (que crea un objeto) debe generar elementos del type Item  (implement)

    constructor(            
        private _id:string = '',                               //propiedad privada se debe usar getters y setter para modificar estos valores
        private  _item:string = '',                            //estas son las propiedades del objeto que crearé
        private _checked:boolean = false                        // se denota con  _ cuando son privadas
            
        
    ){}




    // GETTERS Y SETTERS        (se comportan como propiedades en lugar de métodos) -> leer y cambiar una propiedad privada



    get id():string{                       //obtener id (nombre del metodo = nombre de la propiedad) -> devuelve un valor de tipo string
        return this._id                     //al llamar el get -> console.log(nombreDelObjeto.id)
    }

    set id(id:string){                         //modificar id -> recibe un parametro de tipo string (cualquier nombre de parametro)
        this._id = id                           //al llamar al set ->       item1.id = 'nuevoValor'
    }



    get item():string{                                         //obtener item
      return this._item
    }

    set item(item:string){                                      //modificar item
        this._item = item
    }
    



    get checked():boolean{                                  //obtener checked
        return this._checked
    }

    set checked(checked:boolean){                           //modificar checked
        this._checked = checked
    }
}


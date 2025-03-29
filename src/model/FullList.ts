
import ListItem from "./ListItem";


interface List {
    list:ListItem[],                                      //array de objetos ListItem
    load():void,                                          //funcion sin parametro que no retorna nada
    save():void,
    clearList():void,
    addItem(itemObj: ListItem):void,                     //funcion que recibe como argumento un objeto, y no retorna nada
    removeItem(id:string):void
}



export default class FullList implements List{

    static instance: FullList = new FullList()                      

    /*
    static significa que instance pertenece a la clase FullList, y no a los objetos que se creen de esa clase.
    esto implica que podemos acceder a instance sin necesidad de instanciar FullList
    se accede con FullList.instance

    instance almacena un objeto de tipo FullList, como es de tipo FullList, significa que guardará una única instancia de la clase.


    */




    private constructor(private _list: ListItem[]=[]){}             //_list es un array privado que almacena objetos de tipo ListItem



    get list(): ListItem[]{
        return this._list
    }


    load(): void {
        const storeList:string|null = localStorage.getItem('myList')

        if(typeof storeList!=='string')  return

        
        const parsedList: {_id:string, _item:string, _checked:boolean}[] = JSON.parse(storeList)

        parsedList.forEach(itemObj =>{
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
        })
        

    }

    save(): void {
        localStorage.setItem('myList', JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !==id)
        this.save()
    }

}


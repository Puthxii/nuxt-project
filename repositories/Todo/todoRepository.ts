export default class todoRepository {
    _vm!:any

    constructor(_vm:any){
        this._vm = _vm
    }

    $fetch(){
        return this._vm.dispatch('todo.todo.get')
    }
}
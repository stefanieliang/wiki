// 建议事件通知
class EventBus{
    constructor(){
        this.callbacks = []
    }
    on(callback){
        this.callbacks.push(callback)
    }
    emit(){
        this.callbacks.forEach(cb=>cb())
    }
}


module.exports = EventBus
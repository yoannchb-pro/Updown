class Updown{
    constructor(json = {}){
        this.verify(json);

        this.config = json;

        this.$el = json.el;
        this.$up = json.up;
        this.$down = json.down;
        this.defaultOrder = json.defaultOrder;

        this.$orderStart = 1;
        this.$list = null;
        this.$size = null;

        this.start();
    }

    verify(json){
        if(!json.el) throw "'el' attribute must be specified !";
        if(!json.up) throw "'up' attribute must be specified !";
        if(!json.down) throw "'down' attribute must be specified !";
    }

    start(){
        const list = document.querySelectorAll(this.$el);
        this.$list = list;
        this.$size = list.length;

        const validDefaultOrder = this.defaultOrder && this.defaultOrder.length == list.length;
        if(validDefaultOrder) {
            this.$orderStart = Math.min(...this.defaultOrder);

            if(this.$orderStart <= 0) throw "'defaultOrder' must start at 1 !";
        }

        let cache = [];
        list.forEach((e, i) => {
            const order = validDefaultOrder ? this.defaultOrder[i] : i+1;
            if(cache.includes(order)) throw "'defaultOrder' have duplicate elements !";
            cache.push(order);

            e.style.order = order;
            e.querySelector(this.$up).addEventListener('click', (e) => this.handler(e, 'up', -1));
            e.querySelector(this.$down).addEventListener('click', (e) => this.handler(e, 'down', 1));
        });
    }

    getSortedList(){
        const arr = Array.prototype.slice.call(this.$list, 0);
        return arr.sort((a,b) => a.style.order - b.style.order);
    }

    updateOrder(el, or, inc){
        this.$list.forEach(e => {
          const order = e.style.order;
          const parsedOrder = parseInt(order);
          if(e != el && order == or){
            e.style.order = parsedOrder+inc;
          }
        })
    }

    handler(e, type, incr){
        const parent = e.target.closest(this.$el);
        const order = parent.style.order;
        const parsedOrder = parseInt(order);
        if(parsedOrder+incr >= this.$orderStart && parsedOrder+incr <= this.$size){
          parent.style.order = parsedOrder+incr;
          this.updateOrder(parent, parsedOrder+incr, incr*-1);

          const event = new Event("moved-" + type);
          parent.dispatchEvent(event);
        }
    }
}

//EXPORT
if (typeof exports == "object") module.exports = Updown;
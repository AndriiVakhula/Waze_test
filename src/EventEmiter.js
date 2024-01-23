import mitt from "mitt";

export default class {
    constructor() {
      this.provider = mitt();
    }

    $on(event, callback) {
      this.provider.on(event, callback);
    }
    $off(event, callback) {
      this.provider.off(event, callback);
    }

    $emit(event, args) {
      this.provider.emit(event, args);
    }
}

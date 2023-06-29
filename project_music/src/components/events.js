import EventEmitter from "events";

let ee = new EventEmitter();
ee.setMaxListeners(100);

export { ee };

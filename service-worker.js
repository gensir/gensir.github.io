self.addEventListener("install",e=>{e.waitUntil(()=>console.info("\u5B89\u88C5\u5B8C\u6210"))}),addEventListener("message",e=>{console.log(`The client sent me a message: ${e.data}`),e.source.postMessage("Hi client")});

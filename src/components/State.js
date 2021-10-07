import { proxy } from "valtio";


    const state = proxy({
      current: null,
      items: {
        mesh: "#ffffff",
        sole: "#ffffff",
        stripes: "#ffffff",
        band: "#ffffff",
        caps: "#ffffff",
        patch: "#ffffff",
        inner: "#ffffff",
        laces: "#ffffff"
      }
    });

    // const state = proxy({
    //   current: null,
    //   items: {
    //     material: "#0000ff",
    //     cam: "#ff0000",
    //     stripes: "#ffffff",
    //     band: "#ffffff",
    //     caps: "#ffffff",
    //     patch: "#ffffff",
    //     inner: "#ffffff",
    //     laces: "#ffffff"
    //   }
    // });


export default state

import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      /**
       * El url cambia de acuerdo a tu LAN
       * SEGERENCIA:
       * Al correr expo en el proyecto mobile busca en LAN
       * copia la direccion 
       * exp://192.168.43.195:19000
       * luego genere los cambios para que quede limpia
       * http://192.168.43.195:3333
       * para la web se puede usar la opcion de localhost
       */
      url: `http://192.168.43.195:3333/uploads/${image.path}`,
      // url: `http://localhost:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
};

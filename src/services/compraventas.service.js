import firebase from "../firebase";

const db = firebase.collection("/compra-ventas");

class CompraDataService {
  getAll() {
    return db;
  }

  create(compraventa) {
    return db.add(compraventa);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

const DataService = new CompraDataService();
export default DataService;
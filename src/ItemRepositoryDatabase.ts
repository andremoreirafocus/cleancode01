import ItemRepository from "./ItemRepository";
import Item from "./Item";
import DatabaseConnection from "./DatabaseConnection";

export default class ItemRepositoryDatabase implements ItemRepository {

  constructor (readonly databaseConnection: DatabaseConnection) {

  }

  findById(idItem: number): Item {
    const itemsData = this.databaseConnection.query("select * from ccca.item", []);
    // return new Item();
    return itemsData;
  }
  
}
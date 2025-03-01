export class Model {
  #data;
  #tableName;

  constructor(tableName) {
    this.#tableName = tableName;
    this.#data = JSON.parse(localStorage.getItem(tableName)) || [];
  }

  // Cria uim novo registro no DB -> DataBase -> LocalStorage
  create(record) {
    record.id = this.#generateId();
    this.#data.push(record);
    this.#save();
    return record;
  }

  // Retorna todos os registros do DB -> DataBase -> LocalStorage
  getAll() {
    return this.#data;
  }

  // Retorna um registro específico do DB -> DataBase -> LocalStorage
  findById(id) {
    return this.#data.find((record) => record.id === id); // pega o ÚNICO registro que o record.id === id
  }

  // Atualizar um registro do DB -> DataBase -> LocalStorage
  update(id, newData) {
    const index = this.#data.findIndex((item) => item.id === id);

    if (index === -1) return null;

    this.#data[index] = { ...this.#data[index], ...newData };

    this.#save();

    return this.#data[index];
  }

  // Deletar um registro do DB -> DataBase -> LocalStorage
  delete(id) {
    this.#data = this.#data.filter((item) => item.id !== id); // pega TODOS os registros que não sejam item.id === id
    this.#save();
  }

  #save() {
    localStorage.setItem(this.#tableName, JSON.stringify(this.#data));
  }

  #generateId() {
    return Math.floor(Math.random() * Date.now()).toString(36);
  }
}

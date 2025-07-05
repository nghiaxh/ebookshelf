import ApiClient from "./api.service";

class UserService {
  constructor(baseUrl = "/api/user") {
    this.api = ApiClient(baseUrl);
  }

  async create(data) {
    return (await this.api.post("/", data)).data;
  }

  async getAllUser() {
    return (await this.api.get("/")).data;
  }

  async getUser(id) {
    return (await this.api.get(`/${id}`)).data;
  }

  async updateUser(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }

  async deleteUser(id) {
    return (await this.api.delete(`/${id}`)).data;
  }

  // async deleteAllUser() {
  //   return (await this.api.delete("/")).data;
  // }

  async login(username, password) {
    try {
      const response = await this.api.post("/login", { username, password });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;

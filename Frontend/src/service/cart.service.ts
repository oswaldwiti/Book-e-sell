import { CartList, CartModel, GetCart } from "../models/CartModel";
import request from "./request";

class CartService {
 ENDPOINT = "cart";

 public async add(data: CartModel): Promise<CartModel> {
  const url = `${this.ENDPOINT}/add`;
  return request
   .post<CartModel>(url, data)
   .then((res) => {
    return res.data;
   })
   .catch((e) => {
    return Promise.reject(e.response);
   });
 }

 public async getList(id: number): Promise<GetCart> {
  const url = `${this.ENDPOINT}/list?UserId=${id}`;
  return request.get<GetCart>(url).then((res) => {
    return {
      records: res.data as unknown as CartList[],
      totalRecords: (res.data as unknown as CartList[] as Array<any>).length
    } as GetCart;
  });
 }

 public async updateItem(data: CartModel): Promise<CartModel> {
    const url = `${this.ENDPOINT}/Update`;
    return request
     .put<CartModel>(url, data)
     .then((res) => {
      return res.data;
     })
     .catch((e) => {
      return Promise.reject(e);
     });
   }

 public async removeItem(id: number): Promise<CartModel> {
  const url = `${this.ENDPOINT}?id=${id}`;
  return request
   .delete<CartModel>(url)
   .then((res) => {
    return res.data;
   })
   .catch((e) => {
    return e;
   });
 }


}

export default new CartService();

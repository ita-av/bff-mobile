// src/services/rest-service.ts
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import config from "../config";

export class RestService {
  private client: AxiosInstance;

  constructor(authToken?: string) {
    const headers: Record<string, string> = {};

    if (authToken) {
      headers["Authorization"] = `Bearer ${authToken}`;
    }

    this.client = axios.create({
      baseURL: config.rest.baseUrl,
      timeout: config.rest.timeout,
      headers,
    });
  }

  async getData(endpoint: string, params?: Record<string, any>): Promise<any> {
    try {
      const response = await this.client.get(endpoint, { params });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async postData(endpoint: string, data: any): Promise<any> {
    try {
      const response = await this.client.post(endpoint, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async putData(endpoint: string, data: any): Promise<any> {
    try {
      const response = await this.client.put(endpoint, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteData(endpoint: string): Promise<any> {
    try {
      const response = await this.client.delete(endpoint);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): never {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.message || error.message;
      throw new Error(`REST service error (${status}): ${message}`);
    }
    throw error;
  }
}

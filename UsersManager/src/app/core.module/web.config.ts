import { InjectionToken } from "@angular/core";

export let SHARED_DATA = new InjectionToken("shared.data");
export let WEB_CONFIG = new InjectionToken("web.config");


export interface IWebConfig {
  dataUrlUsers: string;
  dataUrlGroups: string
}

export const WebConfig: IWebConfig = {
  dataUrlUsers: 'https://localhost:44345/api/users',
  dataUrlGroups: 'https://localhost:44345/api/groups'
};




export interface IWebConfig {
  dataUrlUsers: string;
  dataUrlGroups: string
}

export let SharedData = {
  test: 123
};

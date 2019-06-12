import { Injectable } from '@angular/core';

@Injectable()
export class UploadFile {
  constructor() { }
  formWithFile(object, title:string) {
    let formData = new FormData();
    for (let key in object) {
      if (typeof  object[key] === 'object' && object[key] != null && !object[key].type && !Array.isArray(object[key])) {
        for (let oKey in object[key]) {
          formData.append(`${title}[${key}][${oKey}]`, object[key][oKey]);
        }
      }  else if (Array.isArray(object[key])) {
        for (let okey in object[key]) {
          if ( key === "category_ids") {
            formData.append(`${title}[${key}][]`, object[key][okey]);
          } else {
            for (let akey in object[key][okey]) {
              formData.append(`${title}[${key}][][${akey}]`, object[key][okey][akey]);
            }
          }
        }
      } else {
        formData.append(`${title}[${key}]`, object[key]);
      }
    }
    return formData;
  }
}

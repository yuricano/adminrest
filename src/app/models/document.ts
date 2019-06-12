export class Documents {
  id: string;
  license_expiration_date: Date;
  license_image: File;
  license_image_url: string;
  license_plate: string;
  insurance_expiration_date: Date;
  insurance_image: File;
  insurance_image_url: string;

  empty() {
    this.id = null;
    this.license_expiration_date = null;
    this.license_image = null;
    this.license_plate = null;
    this.insurance_expiration_date = null;
    this.insurance_image = null;
    return this;
  }
}
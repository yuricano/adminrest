export class Category {
  id: string;
  name: string;
  image: File;
  image_url: string;
  start: string;
  end: string;
  is_deleted: boolean;
  constructor() {
    this.start = '';
    this.end = '';
  }
}

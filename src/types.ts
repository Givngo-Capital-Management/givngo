export interface Charity {
  donate_url: string,
  name: string,
  video_date: number,
  video_id: string,
  video_preview: string,
  video_title: string,
  categories: Categories,
}

export interface Categories {
  [name: string]: string,
}

export interface Charities {
  [id: string]: Charity;
}
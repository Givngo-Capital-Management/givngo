export interface Charity {
  id: string,
  donate_url: string,
  name: string,
  video_date: number,
  video_id: string,
  video_preview: string,
  video_title: string,
  categories: Categories,
  description: string,
  logo: string,
  total_raised: string,
}

export interface Categories {
  [name: string]: string,
}

export interface Charities {
  [id: string]: Charity;
}
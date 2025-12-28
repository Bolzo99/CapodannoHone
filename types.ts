
export interface ItineraryItem {
  time?: string;
  activity: string;
  location?: string;
  description?: string;
  note?: string;
}

export interface DaySchedule {
  date: string;
  title: string;
  items: ItineraryItem[];
}

export interface MenuItem {
  category: string;
  dish: string;
  ingredients?: string;
}

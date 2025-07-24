export interface AbnormalityItem {
  gembaType: string;
  location: string;
  area: string;
  category: string;
  observation: string;
  assignedTo: string;
  date: string;
  status: string;
}

export const AbnormalityData: AbnormalityItem[] = [
  {
    gembaType: "Gemba",
    location: "Loc1",
    area: "Area1",
    category: "Minor",
    observation: "Abnormal Pipe",
    assignedTo: "Ram K",
    date: "2024-11-15",
    status: "Open",
  },
  {
    gembaType: "NDO",
    location: "Loc2",
    area: "Area2",
    category: "Major",
    observation: "Leak Detected",
    assignedTo: "Kishore B",
    date: "2024-11-18",
    status: "Closed",
  },
];

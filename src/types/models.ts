export type ZoneIcon = {id: number; fileName: string};
export type ZoneStatus = {running: boolean};
export interface Zone {
  id: number;
  name: string;
  icon: ZoneIcon;
  suspended: boolean;
  status: ZoneStatus;
}

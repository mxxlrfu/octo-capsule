export interface Ticket {
  id: number | string;
  description: string;
  assigneeId: number;
  completed: boolean;
}

export type NotificationFlavor = "info" | "success" | "error";

export interface Notification {
  id: number;
  text: string;
  flavor: NotificationFlavor;
  remainingDuration: number;
  initialDuration: number;
}

export const DEFAULT_NOTIFICATION_DURATION = 10; // sec

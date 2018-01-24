import { DeliverFeedback } from '../models/deliverFeedback';

export const DELIVERFEEDBACKS: DeliverFeedback[] = [
  new DeliverFeedback(1, "fsd", "app", "B01D001", 0,0,0,0, 0, 1, 1, 0, "ABCDEFGKA9B", 0),
  new DeliverFeedback(2, "hotplug", "app", "B01D001", 0,1,1,0,0, 1, 2, 0, "BBCDEFGKA9B", 0),
  new DeliverFeedback(3, "libfsd.so", "lib", "B01D001", 1,1,1,0,1, 2, 2, 0, "BBCDEFGKA9B", 0),
  new DeliverFeedback(4, "Docker", "app", "B01D001", 1,1,1,0,1, 2, 2, 0, "BBCDEFGKA9B", 0),
  new DeliverFeedback(5, "Kubernetes", "app", "B01D001", 1,1,1,0,1, 2, 2, 0, "BBCDEFGKA9B", 0),
  new DeliverFeedback(6, "Angularjs2", "js", "B01D001", 1,1,1,0,1, 2, 2, 0, "BBCDEFGKA9B", 0),
  new DeliverFeedback(7, "FS", "app", "B01D001", 1,1,1,0,1, 2, 2, 0, "BBCDEFGKA9B", 0),
];

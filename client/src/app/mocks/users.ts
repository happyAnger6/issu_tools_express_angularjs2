import { User } from '../models/user';

export const USERS: User[] = [
  new User(1, '张晓安', 'z09633', 'z09633@h3c.com', '123456', ['FS', 'Snmp', 'Comsh', 'Docker'], 'Support', 'TL'),
  new User(2, '安', 'z09632', 'z09632@h3c.com', '123456', ['PLATFORM'], 'Support', 'CMO'),
  new User(3, '晓安', 'z09631', 'z09631@h3c.com', '123456',['ALL'], 'Support', 'ADMIN'),
];

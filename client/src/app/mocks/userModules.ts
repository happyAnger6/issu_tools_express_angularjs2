import { UserModules } from '../models/userModules';

export const USER_MODULES: UserModules[] = [
  new UserModules("张晓安", "SUPPORT", ["Docker", "Kubernets", "FS", "Angularjs2"], [0, 0, 1, 0]),
  new UserModules("张子超", "SUPPORT", ["Comsh", "CLI"], [ 0, 1]),
  new UserModules("张安", "LAN", ["MAC", "Kubernets", "FS", "Angularjs2"], [0, 0, 1, 0]),
  new UserModules("晓安", "LAN", ["PortSec", "Kubernets", "FS", "Angularjs2"], [0, 0, 1, 0]),
  new UserModules("张", "SEC", ["Docker", "Kubernets", "FS", "Angularjs2"], [0, 0, 1, 0]),
  new UserModules("张晓", "SEC", ["Firewall", "Kubernets", "FS", "Angularjs2"], [0, 0, 1, 0]),
  new UserModules("晓", "ROUTE", ["rib", "Kubernets", "FS", "Angularjs2"], [0, 0, 1, 0]),
  new UserModules("安", "ROUTE", ["ospf", "Kubernets", "FS", "Angularjs2"], [0, 0, 1, 0]),
  new UserModules("赵瑞哲", "OS", ["kernel", "busybox", "bash", "ko"], [0, 0, 1, 0]),
  new UserModules("李勇", "WAN", ["Netconf", "Kubernets", "FS", "Angularjs2"], [0, 0, 1, 0]),
  new UserModules("勇", "WAN", ["Docker", "fib", "FS", "Angularjs2"], [0, 0, 1, 0]) ,
];

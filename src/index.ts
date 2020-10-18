import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

//const APIkey = "AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU";

const user = new User();
console.log("hello from index.ts");
console.log(user);


const company = new Company();
console.log(company);

const customMap = new CustomMap("map");

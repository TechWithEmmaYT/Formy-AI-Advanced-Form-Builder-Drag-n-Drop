import { v4 as uuidv4 } from "uuid";

export function generateUniqueId() {
  return uuidv4().replace(/-/g, "").substring(0, 25);
}

export function generateSixUniqueNo() {
  return uuidv4().replace(/-/g, "").substring(0, 6);
}
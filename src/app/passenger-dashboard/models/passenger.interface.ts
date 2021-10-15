export interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children: Child[] | null,
}

interface Child {
  name: string,
  age: number,
}
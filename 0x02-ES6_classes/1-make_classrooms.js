import Classroom from './classroom.js';

export default function initializeRooms() {
  const rooms = [new Classroom(19), new Classroom(20), new Classroom(34)];
  return rooms;
}

import { type CreateRoom, CreateRoomSchema } from "./createRoom.schema";

export const UpdateRoomSchema = CreateRoomSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  {
    message: "At least one field is required",
  }
);

export type UpdateRoom = CreateRoom;

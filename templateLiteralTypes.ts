type EntityType = "Message" | "Folder" | "File" | "NewEntity";
type EventOperations = "Created" | "Updated" | "Deleted";

type EventNames = `on${EntityType}${EventOperations}`;

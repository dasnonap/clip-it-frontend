class Media {
  id = "";
  createdAt = "";
  type = "";
  updatedAt = "";
  fileName = "";

  createFromArray(objectData) {
    if (Object.keys(objectData) < 1) {
      return;
    }

    this.id = objectData.id;
    this.createdAt = objectData.created_at;
    this.type = objectData.type;
    this.updatedAt = objectData.updatedAt;
    this.fileName = objectData.fileName;

    return this;
  }
}

export default Media;

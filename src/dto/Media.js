class Media {
  id = "";
  createdAt = "";
  type = "";
  updatedAt = "";
  fileName = "";
  href = "";

  createFromArray(objectData) {
    if (Object.keys(objectData) < 1) {
      return;
    }

    this.id = objectData.id;
    this.createdAt = objectData.created_at;
    this.type = objectData.type;
    this.updatedAt = objectData.updatedAt;
    this.fileName = objectData.fileName;
    this.href = objectData.href;

    return this;
  }
}

export default Media;

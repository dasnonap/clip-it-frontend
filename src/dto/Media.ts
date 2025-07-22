class Media {
  id: string;
  createdAt: Date;
  type: string;
  updatedAt: Date;
  fileName: string;
  href: string;

  constructor(objectData: any) {
    this.id = objectData.id ?? "";
    this.createdAt = objectData.created_at ?? undefined;
    this.updatedAt = objectData.updatedAt ?? undefined;
    this.type = objectData.type ?? "";
    this.fileName = objectData.fileName ?? "";
    this.href = objectData.href ?? "";
  }
}

export default Media;

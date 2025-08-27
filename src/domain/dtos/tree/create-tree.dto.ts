// domain/dtos/tree/create-tree.dto.ts

export class CreateTreeDto {
  private constructor(
    public readonly name: string,             // Common name (e.g. "Oak")
    public readonly scientificName: string,   // Scientific name (e.g. "Quercus robur")
    public readonly bestPlantingSeason: string, // e.g. "Spring", "Autumn"
    public readonly careInstructions: string, // General care notes
    public readonly wateringFrequency: string, // e.g. "Twice a week"
    public readonly sunlight: string,         // e.g. "Full sun", "Partial shade"
    public readonly soilType: string,         // e.g. "Well-drained", "Clay"
  ) {}

  static create(object: { [key: string]: any }): [string | null, CreateTreeDto | null] {
    const {
      name,
      scientificName,
      bestPlantingSeason,
      careInstructions,
      wateringFrequency,
      sunlight,
      soilType,
    } = object;

    if (!name) return ['Missing name', null];
    if (!scientificName) return ['Missing scientificName', null];
    if (!bestPlantingSeason) return ['Missing bestPlantingSeason', null];
    if (!careInstructions) return ['Missing careInstructions', null];
    if (!wateringFrequency) return ['Missing wateringFrequency', null];
    if (!sunlight) return ['Missing sunlight', null];
    if (!soilType) return ['Missing soilType', null];

    return [
      null,
      new CreateTreeDto(
        name,
        scientificName,
        bestPlantingSeason,
        careInstructions,
        wateringFrequency,
        sunlight,
        soilType,
      ),
    ];
  }
}

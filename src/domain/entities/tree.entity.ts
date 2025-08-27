
export class TreeEntity {
  constructor(
    public readonly id: string,
    public name: string,             // Common name, e.g. "Oak"
    public scientificName: string,   // Scientific name, e.g. "Quercus robur"
    public bestPlantingSeason: string, // e.g. "Spring", "Autumn"
    public careInstructions: string, // General care notes
    public wateringFrequency: string, // e.g. "Twice a week"
    public sunlight: string,         // e.g. "Full sun", "Partial shade"
    public soilType: string,         // e.g. "Well-drained", "Clay"
  ) {}
}

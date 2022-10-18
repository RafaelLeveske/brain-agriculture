export class ListRuralProducerDashboardDTO {
  total_number_of_farms: number;
  total_farms_in_hectares: number;
  states_occurrences: {
    AC: number;
    AL: number;
    AP: number;
    AM: number;
    BA: number;
    CE: number;
    DF: number;
    ES: number;
    GO: number;
    MA: number;
    MS: number;
    MT: number;
    MG: number;
    PA: number;
    PB: number;
    PR: number;
    PE: number;
    PI: number;
    RJ: number;
    RN: number;
    RS: number;
    RO: number;
    RR: number;
    SC: number;
    SP: number;
    SE: number;
    TO: number;
  };
  crops_occurrences: {
    soy: number;
    corn: number;
    cotton: number;
    coffee: number;
    sugar_cane: number;
  };
  soil_usage: {
    agricultural_hectares_area: number;
    vegetation_hectares_area: number;
  };
}

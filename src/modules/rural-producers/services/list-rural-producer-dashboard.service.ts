import { Injectable } from '@nestjs/common';
import { CropsPlantedType } from '../dtos/create-rural-producer.dto';
import { ListRuralProducerDashboardDTO } from '../dtos/list-rural-producer-dashboard.dto';
import { RuralProducer } from '../infra/database/entities/rural-producer.entity';
import RuralProducerRepositoryImplementation from '../infra/database/repositories/implementations/rural-producer-repository-implementation';

@Injectable()
export class ListRuralProducerDashboardService {
  constructor(
    private ruralProducerRepositoryImplementation: RuralProducerRepositoryImplementation,
  ) {}

  public async execute(): Promise<ListRuralProducerDashboardDTO> {
    const clients =
      await this.ruralProducerRepositoryImplementation.listRuralProducers();

    const totalFarmsInHectares = clients.map(
      (clients: RuralProducer) => clients.farmHectaresTotalArea,
    );

    const totalSumFarmsInHectares: number = totalFarmsInHectares.reduce(
      (accumulator: number | undefined, currentValue: number | undefined) =>
        Number(accumulator) + Number(currentValue),
      0,
    );

    const totalAgriculturalHectaresArea = clients.map(
      (clients: RuralProducer) => clients.agriculturalHectaresArea,
    );

    const totalSumAgriculturalHectaresArea: number =
      totalAgriculturalHectaresArea.reduce(
        (accumulator: number | undefined, currentValue: number | undefined) =>
          Number(accumulator) + Number(currentValue),
        0,
      );

    const totalVegetationHectaresArea = clients.map(
      (clients: RuralProducer) => clients.vegetationHectaresArea,
    );

    const totalSumVegetationHectaresArea: number =
      totalVegetationHectaresArea.reduce(
        (accumulator: number | undefined, currentValue: number | undefined) =>
          Number(accumulator) + Number(currentValue),
        0,
      );

    const filterACFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'AC',
    );
    const filterALFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'AL',
    );
    const filterAPFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'AP',
    );
    const filterAMFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'AM',
    );
    const filterBAFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'BA',
    );
    const filterCEFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'CE',
    );
    const filterDFFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'DF',
    );
    const filterESFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'ES',
    );
    const filterGOFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'GO',
    );
    const filterMAFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'MA',
    );
    const filterMSFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'MS',
    );
    const filterMTFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'MT',
    );
    const filterMGFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'MG',
    );
    const filterPAFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'PA',
    );
    const filterPBFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'PB',
    );
    const filterPRFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'PR',
    );
    const filterPEFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'PE',
    );
    const filterPIFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'PI',
    );
    const filterRJFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'RJ',
    );
    const filterRNFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'RN',
    );
    const filterRSFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'RS',
    );
    const filterROFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'RO',
    );
    const filterRRFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'RR',
    );
    const filterSCFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'SC',
    );
    const filterSPFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'SP',
    );
    const filterSEFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'SE',
    );
    const filterTOFarms = clients.filter(
      (clients: RuralProducer) => clients.state === 'TO',
    );

    const filterSoyCropsPlanted = clients.map((clients: RuralProducer) =>
      clients.cropsPlanted.filter((crops: CropsPlantedType) => crops === 'soy'),
    );

    const treatedSoyCropsPlanted = filterSoyCropsPlanted.filter(
      (treatedCrops) => treatedCrops.length === 1,
    );

    const filterCornCropsPlanted = clients.map((clients: RuralProducer) =>
      clients.cropsPlanted.filter(
        (crops: CropsPlantedType) => crops === 'corn',
      ),
    );

    const treatedCornCropsPlanted = filterCornCropsPlanted.filter(
      (treatedCrops) => treatedCrops.length === 1,
    );

    const filterCottonCropsPlanted = clients.map((clients: RuralProducer) =>
      clients.cropsPlanted.filter(
        (crops: CropsPlantedType) => crops === 'cotton',
      ),
    );

    const treatedCottonCropsPlanted = filterCottonCropsPlanted.filter(
      (treatedCrops) => treatedCrops.length === 1,
    );

    const filterCoffeeCropsPlanted = clients.map((clients: RuralProducer) =>
      clients.cropsPlanted.filter(
        (crops: CropsPlantedType) => crops === 'coffee',
      ),
    );

    const treatedCoffeeCropsPlanted = filterCoffeeCropsPlanted.filter(
      (treatedCrops) => treatedCrops.length === 1,
    );

    const filterSugarCaneCropsPlanted = clients.map((clients: RuralProducer) =>
      clients.cropsPlanted.filter(
        (crops: CropsPlantedType) => crops === 'sugar_cane',
      ),
    );

    const treatedSugarCaneCropsPlanted = filterSugarCaneCropsPlanted.filter(
      (treatedCrops) => treatedCrops.length === 1,
    );

    const response: ListRuralProducerDashboardDTO = {
      total_number_of_farms: clients.length,
      total_farms_in_hectares: totalSumFarmsInHectares,
      states_occurrences: {
        AC: filterACFarms.length,
        AL: filterALFarms.length,
        AP: filterAPFarms.length,
        AM: filterAMFarms.length,
        BA: filterBAFarms.length,
        CE: filterCEFarms.length,
        DF: filterDFFarms.length,
        ES: filterESFarms.length,
        GO: filterGOFarms.length,
        MA: filterMAFarms.length,
        MS: filterMSFarms.length,
        MT: filterMTFarms.length,
        MG: filterMGFarms.length,
        PA: filterPAFarms.length,
        PB: filterPBFarms.length,
        PR: filterPRFarms.length,
        PE: filterPEFarms.length,
        PI: filterPIFarms.length,
        RJ: filterRJFarms.length,
        RN: filterRNFarms.length,
        RS: filterRSFarms.length,
        RO: filterROFarms.length,
        RR: filterRRFarms.length,
        SC: filterSCFarms.length,
        SP: filterSPFarms.length,
        SE: filterSEFarms.length,
        TO: filterTOFarms.length,
      },
      crops_occurrences: {
        soy: treatedSoyCropsPlanted.length,
        corn: treatedCornCropsPlanted.length,
        cotton: treatedCottonCropsPlanted.length,
        coffee: treatedCoffeeCropsPlanted.length,
        sugar_cane: treatedSugarCaneCropsPlanted.length,
      },
      soil_usage: {
        agricultural_hectares_area: totalSumAgriculturalHectaresArea,
        vegetation_hectares_area: totalSumVegetationHectaresArea,
      },
    };

    return response;
  }
}

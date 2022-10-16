import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { CropsPlantedType } from 'src/modules/rural-producers/dtos/create-rural-producer.dto';

@ValidatorConstraint({ name: 'VALIDATE_CROPS_PLANTED', async: false })
export class ValidateCropsPlanted implements ValidatorConstraintInterface {
  validate(crops_planted: CropsPlantedType[], args: ValidationArguments) {
    if (!crops_planted) return false;

    if (crops_planted.length < 1) return false;

    for (let index = 0; index < crops_planted.length; index++) {
      const enumToVerify = ['soy', 'corn', 'cotton', 'coffee', 'sugar_cane'];

      if (!enumToVerify.includes(crops_planted[index])) return false;
    }
    return (
      crops_planted.includes('soy') ||
      crops_planted.includes('corn') ||
      crops_planted.includes('cotton') ||
      crops_planted.includes('coffee') ||
      crops_planted.includes('sugar_cane')
    );
  }

  defaultMessage(args: ValidationArguments) {
    return 'crops_planted is an array of enum and must contain at least one of the values: [soy, corn, cotton, coffee, sugar_cane]';
  }
}

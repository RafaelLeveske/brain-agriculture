import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { StatesType } from 'src/modules/rural-producers/dtos/create-rural-producer.dto';

@ValidatorConstraint({ name: 'VALIDATE_STATES_UF', async: false })
export class ValidateStatesUf implements ValidatorConstraintInterface {
  validate(state: StatesType, args: ValidationArguments) {
    if (!state) return false;

    return (
      state === 'AC' ||
      state === 'AL' ||
      state === 'AP' ||
      state === 'AM' ||
      state === 'BA' ||
      state === 'CE' ||
      state === 'DF' ||
      state === 'GO' ||
      state === 'ES' ||
      state === 'MA' ||
      state === 'MT' ||
      state === 'MS' ||
      state === 'MG' ||
      state === 'PA' ||
      state === 'PB' ||
      state === 'PR' ||
      state === 'PE' ||
      state === 'PI' ||
      state === 'RJ' ||
      state === 'RN' ||
      state === 'RS' ||
      state === 'RO' ||
      state === 'RR' ||
      state === 'SP' ||
      state === 'SC' ||
      state === 'SE' ||
      state === 'TO'
    );
  }

  defaultMessage(args: ValidationArguments) {
    return 'state must contain one of the values: [AC, AL, AP, AM, BA, CE, DF, GO, ES, MA, MT, MS, MG, PA, PB, PR, PE, PI, RJ, RN, RS, RO, RR, SP, SC, SE, TO]';
  }
}

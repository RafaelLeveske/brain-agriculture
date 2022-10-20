export interface IResponseOptions {
  description: string;
  status: number;
  content: any;
}

export default {
  createRuralProducerApiCreatedResponse(): IResponseOptions {
    return {
      description: 'Created',
      status: 201,
      content: {
        'application/json': {
          schema: {
            allOf: [
              {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                  },
                  agricultural_hectares_area: {
                    type: 'number',
                  },
                  city: {
                    type: 'string',
                  },
                  crops_planted: {
                    type: 'array',
                    items: {
                      type: 'string',
                      enum: ['soy', 'corn', 'cotton', 'coffee', 'sugar_cane'],
                    },
                  },
                  document_number: {
                    type: 'string',
                  },
                  farm_hectares_total_area: {
                    type: 'number',
                  },
                  farm_name: {
                    type: 'string',
                  },
                  producer_name: {
                    type: 'string',
                  },
                  vegetation_hectares_area: {
                    type: 'number',
                  },
                  state: {
                    type: 'string',
                    enum: [
                      'AC',
                      'AL',
                      'AP',
                      'AM',
                      'BA',
                      'CE',
                      'DF',
                      'GO',
                      'ES',
                      'MA',
                      'MT',
                      'MS',
                      'MG',
                      'PA',
                      'PB',
                      'PR',
                      'PE',
                      'PI',
                      'RJ',
                      'RN',
                      'RS',
                      'RO',
                      'RR',
                      'SP',
                      'SC',
                      'SE',
                      'TO',
                    ],
                  },
                },
              },
            ],
          },
          example: {
            id: '2bb94137-ef05-4e6c-b3d6-0e7fa2418818',
            agricultural_hectares_area: 22,
            city: 'string',
            crops_planted: ['soy', 'corn', 'cotton', 'coffee', 'sugar_cane'],
            document_number: '00.000.000/0001-00',
            farm_hectares_total_area: 889,
            farm_name: 'string',
            producer_name: 'rafael',
            vegetation_hectares_area: 99,
            state: 'AC',
          },
        },
      },
    };
  },

  createRuralProducerApiUnprocessableEntityResponse(): IResponseOptions {
    return {
      description: 'Unprocessable Entity',
      status: 422,
      content: {
        'application/json': {
          schema: {
            allOf: [
              {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                  },
                  statusCode: {
                    type: 'number',
                  },
                },
              },
            ],
          },
          example: {
            statusCode: 422,
            message: 'CPF/CNPJ is not valid',
          },
        },
      },
    };
  },

  listRuralProducerApiOkResponse(): IResponseOptions {
    return {
      description: 'OK',
      status: 200,
      content: {
        'application/json': {
          schema: {
            allOf: [
              {
                type: 'object',
                properties: {
                  total_number_of_farms: {
                    type: 'number',
                  },
                  total_farms_in_hectares: {
                    type: 'number',
                  },
                  states_occurrences: {
                    type: 'object',
                    properties: {
                      AC: {
                        type: 'number',
                      },
                      AL: {
                        type: 'number',
                      },
                      AP: {
                        type: 'number',
                      },
                      AM: {
                        type: 'number',
                      },
                      BA: {
                        type: 'number',
                      },
                      CE: {
                        type: 'number',
                      },
                      DF: {
                        type: 'number',
                      },
                      ES: {
                        type: 'number',
                      },
                      GO: {
                        type: 'number',
                      },
                      MA: {
                        type: 'number',
                      },
                      MS: {
                        type: 'number',
                      },
                      MT: {
                        type: 'number',
                      },
                      MG: {
                        type: 'number',
                      },
                      PA: {
                        type: 'number',
                      },
                      PB: {
                        type: 'number',
                      },
                      PR: {
                        type: 'number',
                      },
                      PE: {
                        type: 'number',
                      },
                      PI: {
                        type: 'number',
                      },
                      RJ: {
                        type: 'number',
                      },
                      RN: {
                        type: 'number',
                      },
                      RS: {
                        type: 'number',
                      },
                      RO: {
                        type: 'number',
                      },
                      RR: {
                        type: 'number',
                      },
                      SC: {
                        type: 'number',
                      },
                      SP: {
                        type: 'number',
                      },
                      SE: {
                        type: 'number',
                      },
                      TO: {
                        type: 'number',
                      },
                    },
                  },
                  crops_occurrences: {
                    type: 'object',
                    properties: {
                      soy: {
                        type: 'number',
                      },
                      corn: {
                        type: 'number',
                      },
                      cotton: {
                        type: 'number',
                      },
                      coffee: {
                        type: 'number',
                      },
                      sugar_cane: {
                        type: 'number',
                      },
                    },
                  },
                  soil_usage: {
                    type: 'object',
                    properties: {
                      agricultural_hectares_area: {
                        type: 'number',
                      },
                      vegetation_hectares_area: {
                        type: 'number',
                      },
                    },
                  },
                },
              },
            ],
          },
          example: {
            total_number_of_farms: 40,
            total_farms_in_hectares: 31511,
            states_occurrences: {
              AC: 0,
              AL: 0,
              AP: 0,
              AM: 3,
              BA: 0,
              CE: 0,
              DF: 2,
              ES: 0,
              GO: 0,
              MA: 0,
              MS: 0,
              MT: 0,
              MG: 0,
              PA: 2,
              PB: 0,
              PR: 0,
              PE: 0,
              PI: 0,
              RJ: 3,
              RN: 0,
              RS: 0,
              RO: 0,
              RR: 0,
              SC: 0,
              SP: 0,
              SE: 0,
              TO: 0,
            },
            crops_occurrences: {
              soy: 39,
              corn: 36,
              cotton: 37,
              coffee: 36,
              sugar_cane: 33,
            },
            soil_usage: {
              agricultural_hectares_area: 956,
              vegetation_hectares_area: 29961,
            },
          },
        },
      },
    };
  },

  editRuralProducerApiOkResponse(): IResponseOptions {
    return {
      description: 'OK',
      status: 200,
      content: {
        'application/json': {
          schema: {
            allOf: [
              {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                  },
                  agricultural_hectares_area: {
                    type: 'number',
                  },
                  city: {
                    type: 'string',
                  },
                  crops_planted: {
                    type: 'array',
                    items: {
                      type: 'string',
                      enum: ['soy', 'corn', 'cotton', 'coffee', 'sugar_cane'],
                    },
                  },
                  document_number: {
                    type: 'string',
                  },
                  farm_hectares_total_area: {
                    type: 'number',
                  },
                  farm_name: {
                    type: 'string',
                  },
                  producer_name: {
                    type: 'string',
                  },
                  vegetation_hectares_area: {
                    type: 'number',
                  },
                  state: {
                    type: 'string',
                    enum: [
                      'AC',
                      'AL',
                      'AP',
                      'AM',
                      'BA',
                      'CE',
                      'DF',
                      'GO',
                      'ES',
                      'MA',
                      'MT',
                      'MS',
                      'MG',
                      'PA',
                      'PB',
                      'PR',
                      'PE',
                      'PI',
                      'RJ',
                      'RN',
                      'RS',
                      'RO',
                      'RR',
                      'SP',
                      'SC',
                      'SE',
                      'TO',
                    ],
                  },
                },
              },
            ],
          },
          example: {
            id: '2bb94137-ef05-4e6c-b3d6-0e7fa2418818',
            agricultural_hectares_area: 22,
            city: 'string',
            crops_planted: ['soy', 'corn', 'cotton', 'coffee', 'sugar_cane'],
            document_number: '00.000.000/0001-00',
            farm_hectares_total_area: 889,
            farm_name: 'string',
            producer_name: 'rafael',
            vegetation_hectares_area: 99,
            state: 'AC',
          },
        },
      },
    };
  },

  editRuralProducerApiUnprocessableEntityResponse(): IResponseOptions {
    return {
      description: 'Unprocessable Entity',
      status: 422,
      content: {
        'application/json': {
          schema: {
            allOf: [
              {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                  },
                  statusCode: {
                    type: 'number',
                  },
                },
              },
            ],
          },
          example: {
            statusCode: 422,
            message: 'CPF/CNPJ is not valid',
          },
        },
      },
    };
  },
};

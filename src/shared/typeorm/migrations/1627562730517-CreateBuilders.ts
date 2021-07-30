import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateConstructionCompany1627562730517
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'builders',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'website',
            type: 'varchar'
          },
          {
            name: 'street',
            type: 'varchar'
          },
          {
            name: 'number',
            type: 'varchar'
          },
          {
            name: 'cep',
            type: 'varchar'
          },
          {
            name: 'latitude',
            type: 'decimal',
            precision: 12,
            scale: 8
          },
          {
            name: 'longitude',
            type: 'decimal',
            precision: 12,
            scale: 8
          },
          {
            name: 'neighborhood_id',
            type: 'uuid'
          },
          {
            name: 'city_id',
            type: 'uuid'
          },
          {
            name: 'state_id',
            type: 'uuid'
          },
          {
            name: 'logo',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('builders');
  }
}

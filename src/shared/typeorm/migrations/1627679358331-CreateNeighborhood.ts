import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateNeighborhood1627679358331 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'neighborhoods',
        columns: [
          {
            name: 'neighborhood_id',
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
    await queryRunner.dropTable('neighborhoods');
  }
}

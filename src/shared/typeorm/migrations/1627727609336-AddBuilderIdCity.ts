import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export class AddBuilderIdCity1627727609336 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'builders',
      new TableColumn({
        name: 'city_id',
        type: 'uuid',
        isNullable: true
      })
    );

    await queryRunner.createForeignKey(
      'builders',
      new TableForeignKey({
        name: 'CityBuilder',
        columnNames: ['city_id'],
        referencedColumnNames: ['city_id'],
        referencedTableName: 'cities',
        onDelete: 'SET NULL'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('builders', 'CityBuilder');
    await queryRunner.dropColumn('builders', 'city_id');
  }
}

import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export class AddNeighborhoodCity1627729757794 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'neighborhoods',
      new TableColumn({
        name: 'city_id',
        type: 'uuid',
        isNullable: true
      })
    );

    await queryRunner.createForeignKey(
      'neighborhoods',
      new TableForeignKey({
        name: 'CityNeighborhood',
        columnNames: ['city_id'],
        referencedColumnNames: ['city_id'],
        referencedTableName: 'cities',
        onDelete: 'SET NULL'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('neighborhoods', 'CityNeighborhood');
    await queryRunner.dropColumn('neighborhoods', 'city_id');
  }
}

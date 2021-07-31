import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export class AddCityState1627730017940 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'cities',
      new TableColumn({
        name: 'state_id',
        type: 'uuid',
        isNullable: true
      })
    );

    await queryRunner.createForeignKey(
      'cities',
      new TableForeignKey({
        name: 'StateCity',
        columnNames: ['state_id'],
        referencedColumnNames: ['state_id'],
        referencedTableName: 'states',
        onDelete: 'SET NULL'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('cities', 'StateCity');
    await queryRunner.dropColumn('cities', 'state_id');
  }
}
